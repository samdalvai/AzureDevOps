import time
from populator import populateDB
from datetime import datetime

print("Starting scheduled jobs... waiting for the database to initialize...")
time.sleep(5)

while(1):
    print("Scheduled job : " + str(datetime.now()))
    try:
        populateDB()
        print("Scheduled job finished, next job in 30 minutes..")
        print()
        time.sleep(1800)
    except:
        print("Connection not available, retrying in 5 seconds...")
        time.sleep(5)
        populateDB()

