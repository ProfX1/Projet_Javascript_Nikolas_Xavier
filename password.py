from flask import Flask, redirect, render_template, jsonify
from flask import request
import json
import cryptage as c

key = "gattaca"


app=Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    with open('Projet_Javascript_Nikolas_Xavier\JSON\pass.json', 'r') as file:
        users = json.load(file)

    # Initialize empty lists for usernames and passwords
    usernames = []
    passwords = []
    plain_passwords = []
    # Extract usernames and passwords from the loaded data
    for user in users:
        usernames.append(user['username'])
        passwords.append(user['password'])

    for password in passwords:
          decyphered_password=c.decode(key, password)
          plain_passwords.append(decyphered_password)

    
    return render_template("index.html", usernames=usernames, plain_passwords=password)