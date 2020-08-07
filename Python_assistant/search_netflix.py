import requests, json
from pprint import pprint

url_netflix = "https://netflix-unofficial.p.rapidapi.com/api/search"

headers_netflix = {
    'x-rapidapi-host': "netflix-unofficial.p.rapidapi.com",
    'x-rapidapi-key': "df04cb6865msha77f6ca500b312ep1202bcjsn9a883a67fa18"
    }

response_netflix = requests.request("GET", url_netflix, headers=headers_netflix)
data_netflix = response_netflix.json()

print(data_netflix)
