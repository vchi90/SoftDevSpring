import pymongo
from pymongo import MongoClient

client = MongoClient()
SERVER_ADDR = "104.248.235.186"
con = MongoClient(SERVER_ADDR)
db = con.test
collection = db.restaurants

def borough(b):
    restaurants = []
    for restaurant in collection.find({"borough": bor}):
        restaurants.append(restaurant["name"])
    print(restaurants)
    return restaurants

def zip(z):
    zips = []
    for rest in collection.find({"address.zipcode" : zip}):
        zips.append(rest['name'])
    print(zips)
    return zips

def zipGrade(zip,grade):
    rests = []
    for rest in collection.find( { '$and': [{"address.zipcode": zip}, {"grades.1.grade" : grade}]}):
        rests.append(rest['name'])
    print(rests)
    return rests

def zipScore(zip,score):
    rests = []
    for rest in collection.find( { '$and': [{"address.zipcode": zip}, {"grades.1.score" : {'$lt' : score}}]}):
        rests.append(rest['name'])
    print(rests)
    return rests


boroughs("Brooklyn")
zip("11204")
zipGrade("11204","A")
zipScore('11204',4)