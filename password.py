from flask import Flask, redirect, render_template, jsonify
from flask import request
import json
import cryptage as c

key = "gattaca"


app=Flask(__name__)

@app.route('/')
def index():
    usrs=json.load(open("JSON\\user.json"))
    passwrds = json.load(open("JSON\\pass.json"))

    # Initialize empty lists for usernames and passwords
    usernames = []
    passwords = []
    plain_passwords = []
    print(usrs)
    print(passwrds)
    # Extract usernames and passwords from the loaded data
    # for user in usrs:
    #     usernames.append(user['username'])
    #     passwords.append(user['password'])

    # for password in passwrds:
    #       decyphered_password=c.decode(key, password)
    #       plain_passwords.append(decyphered_password)

    
    return render_template("index.html", usernames=usernames, plain_passwords=password)

@app.route('/password', methods=['GET'])
def password():
    users=json.load(open("JSON\\user.json"))
    passwords = json.load(open("JSON\\pass.json"))

    plain_password = []

         
    return render_template("Docs\\password.html", users=users, plain_passwords=passwords)

@app.route('/password', methods=['POST'])
def passwordPost():
    users=json.load(open("JSON\\user.json"))
    passwords = json.load(open("JSON\\pass.json"))

    return redirect('/')


app.run(debug=True)