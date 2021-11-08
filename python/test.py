import MySQLdb

### python script used for testing inside the python container

host="mysql"
user = "root"
db = "concertDB"
passwd = "rock"

count_connection = MySQLdb.connect(host,user,passwd,db)
count_cursor = count_connection.cursor()

# count number of concerts before update
query = "SELECT COUNT(*) from `concert`"
count_cursor.execute(query)
res = count_cursor.fetchone()
total_rows_before = res[0]

print(total_rows_before)