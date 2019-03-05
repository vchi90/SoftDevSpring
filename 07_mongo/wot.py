#Team Brobdingnagian - Jiayang Chen, Vincent Chi
#SoftDev2 pd7
#K07 -- Import/Export Bank
#2019-03-05

'''
The dataset we used was the Tvmaze API for Rick and Morty containing all the episode information.
http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
We import our data by loading the json file into a dictionary using json.load(file). Then we loop through the episodes in the dictionary
and use Collection.insert_one(dictionary) to individually insert one at a time.
'''

import json

from pymongo import MongoClient

#Connect to the database
client = MongoClient('104.248.235.186')
db = client.test
coll = db['episodes']

#Load the data by opening the json file and individually inserting into database
def load_data(file):
    f = open(file)
    data = json.load(f)
    #Load the episodes
    for doc in data['_embedded']['episodes']:
        coll.insert_one(doc)

#Running load data again would cause duplicate information
#load_data('rick_morty.json')

#Get the episode based on the season and number
def get_episode(season, number):
    query = {'$and': [
            {'season' : season},
            {'number' : number}
        ]
    }
    post = coll.find_one(query)
    return post['name']

#Get the episodes that aired during a season
def get_episodes(season):
    query = {'season' : season}
    posts = coll.find(query)
    return set([post['name'] for post in posts])

#Get episodes by the year they aired
def episodes_by_year(year):
    query = {'airdate' : {'$regex': year}}
    posts = coll.find(query)
    return set([post['name'] for post in posts])

#Get episodes by the id
def episode_by_id(id):
    query = {'id' : id}
    post = coll.find_one(query)
    return post['name']

print(get_episode(1,1))
print(get_episodes(2))
print(episodes_by_year('2014'))
print(episode_by_id(14318))