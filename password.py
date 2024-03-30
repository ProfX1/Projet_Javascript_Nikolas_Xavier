from flask import Flask, redirect, render_template, jsonify
from flask import request
import json
import cryptage as c

key = "gattaca"


app=Flask(__name__)

@app.route('/')
def index():
    usrs=json.load(open("JSON\\user.json"))


    # Initialize empty lists for usernames and passwords
    usernames = []
    usernames = [user['username'] for user in usrs]
    passwords = []
    passwords = [password['password'] for password in usrs]
    plain_passwords=[]
    for plainPass in passwords:
        plain_passwords.append(c.decode(key, plainPass))
    
    print(usrs)
    print(usernames)
    print(plain_passwords)

    # Extract usernames and passwords from the loaded data
    # for user in usrs:
    #     usernames.append(user['username'])
    #     passwords.append(user['password'])

    # for password in passwrds:
    #       decyphered_password=c.decode(key, password)
    #       plain_passwords.append(decyphered_password)

    
    return render_template("index.html", usrs=usernames)

@app.route('/password', methods=['GET'])
def password():
    users=json.load(open("JSON\\user.json"))

    userUserName = {}
    userUserName["username"]=request.form["username"]
    print(userUserName["username"])

    plain_password = []

         
    return render_template("password.html", users=users)

@app.route('/password', methods=['POST'])
def passwordPost():
    users=json.load(open("JSON\\user.json"))

    userID = {}
    userID ['password'] = request.form['pwd'] 
    if c.decode(key, userID["password"]) in users:
        print("hello", userID["username"], "!")
        return redirect('Docs\\SuperSecret.html')

    return redirect('Docs\\SuperSecret.html')


app.run(debug=True)