import requests
import json
import time
from datetime import datetime

matchesFile = open('matches.json')
matchHistory = json.load(matchesFile)
matchHistoryData = open('matchHistoryData.txt', 'w')
reginaPuuid = "55AEK5rxdj26s0ZhSEU0tCCQglyfWBbfnOyXKJnjFWNuEFqjDkWojqpBIE_k_KGx7MPE8tuThI8wsg"
numGamesWithRegina = 0
durationPlayedInSeconds = 0

for month in matchHistory:
    for matchId in matchHistory[month]:
        endpoint = 'https://americas.api.riotgames.com/lol/match/v5/matches/{matchId}?api_key=RGAPI-c898a5d1-6d46-4645-b3f3-c212cfd41801'.format(
            matchId=matchId
        )
        response = requests.get(url = endpoint)
        matchData = response.json()
        metadata = (matchData['metadata']['participants'])
        if reginaPuuid in metadata:
            numGamesWithRegina+=1
            durationPlayedInSeconds += matchData['info']['gameDuration']
        time.sleep(1.5)

print(numGamesWithRegina, "games")
print(durationPlayedInSeconds)
print(durationPlayedInSeconds//3600, "hours", (durationPlayedInSeconds%3600)//60, "minutes", (durationPlayedInSeconds%3600%60), "seconds")
matchHistoryData.close()
matchesFile.close()