import threading
import MySQLdb
import urllib.request
import json
from datetime import date
from datetime import datetime
import random
import time
import traceback

Num_Of_threads = 16

host="mysql"
user = "root"
db = "concertDB"
passwd = "rock"

class myThread(threading.Thread):

    def __init__(self, conn, cur, page):
        threading.Thread.__init__(self)
        self.threadID = threading.get_ident()
        self.conn = conn
        self.cur = cur
        self.page = page

    def run(self):
        with urllib.request.urlopen("https://api.seatgeek.com/2/events?client_id=MjE3MTUzMzN8MTYxODQwMTQwNC4xNzYzMzc&type=concert&per_page=250&page=" + str(self.page)) as url:
            data = json.loads(url.read().decode())
        for e in data["events"]:
            concertDate = datetime.strptime(
                e["datetime_local"], '%Y-%m-%dT%H:%M:%S')
            currentDate = datetime.now()
            if concertDate >= currentDate:
                try:
                    d1 = datetime.strptime(
                        e["datetime_local"], "%Y-%m-%dT%H:%M:%S")
                    new_format = "%Y-%m-%d%H:%M:%S"
                    d1.strftime(new_format)
                    venue = e["venue"]
                    self.cur.execute("INSERT IGNORE INTO `venue` (`id`,`venue_name`,`city`,`timezone`,`country`,`capacity`,`score_venue`) VALUES (%s,%s,%s,%s,%s,%s,%s)", (int(
                        venue["id"]), venue["name"], venue["city"], venue["timezone"], venue["country"], int(venue["capacity"]), float(venue["score"])))
                    self.cur.execute("INSERT IGNORE INTO `concert` (`concert_id`,`short_title`,`venue`,`datetime_local`,`score_concert`,`popularity`,`performer`) VALUES (%s,%s,%s,%s,%s,%s,%s)", (int(
                        e["id"]), e["short_title"], e["venue"]["name"], d1, float(e["score"]), float(e["popularity"]), e["performers"][0]["name"]))
                    self.cur.execute("INSERT IGNORE INTO `concertDetails` (`concert_id`,`remaining_seats`,`ticket_price`) VALUES (%s,%s,%s)", (int(
                        e["id"]), random.randint(5, 200), random.uniform(30, 150)))
                    for performer in e["performers"]:
                        if "genres" in performer:
                            genre = performer["genres"][0]
                            image = performer["image"].replace(
                                'huge.jpg', '1200x627.jpg')
                            genre_image = genre["image"].replace(
                                'huge.jpg', '1200x627.jpg')
                            self.cur.execute("INSERT IGNORE INTO `performer` (`id`,`name`,`image`,`score_performer`,`genre_name`) VALUES (%s,%s,%s,%s,%s)", (int(
                                performer["id"]), performer["name"], image, float(performer["score"]), genre["name"]))
                            self.cur.execute("INSERT IGNORE INTO `genre` (`id`,`name`,`image`) VALUES (%s,%s,%s)", (int(
                                genre["id"]), genre["name"], genre_image))
                            self.conn.commit()
                        else:
                            image = performer["image"].replace(
                                'huge.jpg', '1200x627.jpg')
                            self.cur.execute("INSERT IGNORE INTO `performer` (`id`,`name`,`image`,`score_performer`) VALUES (%s,%s,%s,%s)", (int(
                                performer["id"]), performer["name"], image, float(performer["score"])))
                            self.conn.commit()

                except Exception as e:
                    self.conn.commit()
                    print(e)
                    # pass


def executeScriptsFromFile(filename, host, user, passwd):
    cnx = MySQLdb.connect(host, user, passwd)
    cursor = cnx.cursor()
    fd = open(filename, 'r')
    sqlFile = fd.read()
    fd.close()
    sqlCommands = sqlFile.split(';')

    for command in sqlCommands:
        try:
            if command.strip() != '':
                cursor.execute(command)
        except (IOError):
            print("Command skipped")


def populateDB():
    print("Number of concerts before the update: " + str(count_concerts(host, user, passwd, db)))

    print("Extracting data from seatgeek API")

    threads = []
    print("Creating " + str(Num_Of_threads) + " threads...")

    for i in range(1,Num_Of_threads+1):
        conn = MySQLdb.connect(host,user,passwd,db)
        cur = conn.cursor()
        new_thread = myThread(conn, cur, i)
        threads.append(new_thread)
    
    print("Populating the database")

    for th in threads:
        time.sleep(0.1) ## delay execution to avoid deadlocks
        th.start()

    for t in threads:
        t.join()

    print("db populated successfully...")

    print("Number of concerts after the update: " + str(count_concerts(host, user, passwd, db)))

def count_concerts(host,user,passwd,db):
    count_connection = MySQLdb.connect(host,user,passwd,db)
    count_cursor = count_connection.cursor()

    # count number of concerts
    query = "SELECT COUNT(*) from `concert`"
    count_cursor.execute(query)
    res = count_cursor.fetchone()
    total_rows = res[0]

    return total_rows
