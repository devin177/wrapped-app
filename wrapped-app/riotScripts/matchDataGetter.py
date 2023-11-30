import requests
import json
import time
from datetime import datetime

matchesFile = open('matches.json')
matchHistory = json.load(matchesFile)
matchHistoryData = open('matchHistoryData.txt', 'w')
reginaPuuid = "55AEK5rxdj26s0ZhSEU0tCCQglyfWBbfnOyXKJnjFWNuEFqjDkWojqpBIE_k_KGx7MPE8tuThI8wsg"
numGamesWithRegina = 0
numWins = 0
numLosses = 0
durationPlayedInSeconds = 0

for month in matchHistory:
    for matchId in matchHistory[month]:
        endpoint = 'https://americas.api.riotgames.com/lol/match/v5/matches/{matchId}?api_key=RGAPI-8d61c191-edbd-4a9d-9bdf-66f70e687856'.format(
            matchId=matchId
        )
        response = requests.get(url = endpoint)
        matchData = response.json()
        participants = (matchData['metadata']['participants'])
        if reginaPuuid in participants:
            numGamesWithRegina+=1
            durationPlayedInSeconds += matchData['info']['gameDuration']
            index = participants.index(reginaPuuid)
            if matchData['info']['participants'][index]['win'] == True:
                numWins+=1
            else:
                numLosses+=1
        time.sleep(1.5)

print(numGamesWithRegina, "games")
print(durationPlayedInSeconds)
print(durationPlayedInSeconds//3600, "hours", (durationPlayedInSeconds%3600)//60, "minutes", (durationPlayedInSeconds%3600%60), "seconds")
print("Number of wins:", numWins, "Number of losses: ", numLosses)
matchHistoryData.close()
matchesFile.close()