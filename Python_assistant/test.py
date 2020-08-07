import requests,json

url = "https://netflix-unofficial.p.rapidapi.com/api/search"

headers = {
    'x-rapidapi-host': "netflix-unofficial.p.rapidapi.com",
    'x-rapidapi-key': "df04cb6865msha77f6ca500b312ep1202bcjsn9a883a67fa18"
    }

response = requests.request("GET", url, headers=headers)
data_netflix = response.json()
you = '13TH'
for x in data_netflix:
    if x.lower() in you:
        bot = 'Some information about ' + x +'\nDuration: ' + data_netflix[x]['time'] 
        # + '\nYear: ' + data_netflix[x]['year'] + '\nGerne: ' + data_netflix[x]['gerne'] + '\nDirector: ' + data_netflix[x]['director'] + '\nActors: ' + data_netflix[x]['actors'] + '\nCountry: ' + data_netflix[x]['country'] + '\nRating: ' + data_netflix[x]['rating']
        
print(bot)