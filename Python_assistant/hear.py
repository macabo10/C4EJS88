import speech_recognition
import pyttsx3
from datetime import date

bot = ''
robot_hear = speech_recognition.Recognizer()
bot_speak = pyttsx3.init()

with speech_recognition.Microphone() as mic:
    print("Robot: I'm hearing")
    audio = robot_hear.listen(mic)

try:
    you = robot_hear.recognize_google(audio)
except:
    you = ''

print("You: ",you.capitalize())  
you.lower()

if you == '':
    bot = "Sorry, I can't hear you"
if "day" in you and "today" in you:
    bot = date.today()
if you == 'hi':
    bot = 'Hello Master, what can I help you?'
else:
    bot = "I'm fine thanks and you?"

print('Bot: ', bot)

bot_speak.say(bot)
bot_speak.runAndWait()