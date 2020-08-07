import speech_recognition
import pyttsx3
from datetime import date, datetime
from president import *
import requests, json
from pprint import pprint
from search_netflix import *

bot = ''
you = ''
robot_hear = speech_recognition.Recognizer()
bot_speak = pyttsx3.init()
def weather_data(query):
	res = requests.get('http://api.openweathermap.org/data/2.5/weather?'+query+'&APPID=b35975e18dc93725acb092f7272cc6b8&units=metric')
	return res.json()


while you != "bye":
    with speech_recognition.Microphone() as mic:
        print("Robot: I'm listening")
        audio = robot_hear.listen(mic)

    try:
        you = robot_hear.recognize_google(audio)
    except:
        you = ''

    print("You: ",you.capitalize())  
    you.lower()

    if you == '':
        bot = "Sorry, I can't hear you"
    # elif "what" in you and "weather" in you:
    elif "quang" in you:
        bot = 'Dit me thang ngu lon'   
    elif "day" in you and "today" in you:
        today = date.today()
        bot = today.strftime("%B %d, %Y")
    elif you == 'hi':
        bot = 'Hello Master, what can I help you?'
    elif "what" in you and "time" in you:
        now = datetime.now()
        bot = now.strftime("%H hours %M minutes %S seconds")
    elif 'weather' in you:
        bot = 'Excuse me, which city?' 
        print('Bot: ', bot)
        bot_speak.say(bot)
        bot_speak.runAndWait()
        with speech_recognition.Microphone() as mic:
            print("Robot: I'm listening")
            audio = robot_hear.listen(mic)

        try:
            you = robot_hear.recognize_google(audio)
        except:
            you = ''
        print("You: ",you.capitalize())  
        you = you.capitalize()
        
        data = weather_data('q='+you) 
        bot = 'Temperature: ' + str(data['main']['temp']) + ' degree celsius'

    elif "handsome" in you:
        bot = "Phan Viet Hung is the most handsome person in the world"
    elif "who" in you and "president" in you:
        you_say = list(you.split(' '))
        for i in you_say:
            if i in president:
                bot = president[i]
    elif you == "bye":
        bot = "Goodbye sir"
        print("Bot: ", bot)
        bot_speak.say(bot)
        bot_speak.runAndWait()
        break
    # for x in data_netflix:
    #     # if x.lower() in you:
    #     #     bot = 'Some information about ' + x +'\nDuration: ' + data_netflix[x]['time'] + '\nYear: ' + data_netflix[x]['year'] + '\nGerne: ' + data_netflix[x]['gerne'] + '\nDirector: ' + data_netflix[x]['director'] + '\nActors: ' + data_netflix[x]['actors'] + '\nCountry: ' + data_netflix[x]['country'] + '\nRating: ' + data_netflix[x]['rating']
    #     print(x)    
    else:
        bot = "I'm fine thanks and you?"

    print('Bot: ', bot)

    bot_speak.say(bot)
    bot_speak.runAndWait()