import sys
import subprocess
import os
from decouple import config

ip = "192.168.55.1"
device = "192.168.55.101"

IP_NETWORK = config('IP_NETWORK')
IP_DEVICE = config('IP_DEVICE')

proc = subprocess.Popen(["ping", ip],stdout=subprocess.PIPE)
proc = subprocess.Popen(["ping", IP_NETWORK],stdout=subprocess.PIPE)
while True:
    line = proc.stdout.readline()
    if not line:
        break
#the real code does filtering here
    connected_ip = line.decode('utf-8').split()[3]

    # if connected_ip == device:
    if connected_ip == IP_DEVICE:
        subprocess.Popen(["say", "Hung just connected to the network"])

# import socket    
# hostname = socket.gethostname()    
# IPAddr = socket.gethostbyname(hostname)    
# print("Your Computer Name is:" + hostname)    
# print("Your Computer IP Address is:" + IPAddr)   