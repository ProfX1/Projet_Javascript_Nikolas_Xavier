from flask import Flask, redirect, render_template, jsonify
from flask import request
import json
import cryptage as c

key = "gattaca"

setuser = ""
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
    # for plainPass in passwords:
    #     plain_passwords.append(c.decode(key, plainPass))
    
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

@app.route('/password', methods=['GET', "POST"])
def password():
    global key
    users=json.load(open("JSON\\user.json"))
    if request.method == "POST":
        
        UserName = request.form.get("username")
        print(UserName)

        if UserName in [user['username'] for user in users]:
            print("this is in the list")
            global setuser
            setuser = UserName
            return render_template("password.html", users=users, UserName=UserName)

        else:
            print("this is not in the list")
            return render_template("index.html", users=users)
        # userUserName = {}
        # userUserName["username"]=request.form["username"]
        # print(userUserName["username"])

        # plain_password = []

            
        # return render_template("password.html", users=users)

@app.route('/SuperSecret', methods=['GET', 'POST'])
def supersecret():
    global key
    global setuser
    users=json.load(open("JSON\\user.json"))
    print("we are in supersecret")
    if request.method == 'POST':
        username = request.form.get('username')
        Password = request.form.get('password')
        Password = c.encode(key, Password)
        print(setuser)
        print(Password)

        for user in users:
            if user["password"] == Password and user["username"] == setuser:
                print("password correct")
                return render_template('SuperSecret.html', Password=Password, users=users)

                
        # if (Password, setuser) in [(user['password'], user['username']) for user in users]:
        #     print("password is in the list")
        #     return render_template('SuperSecret.html', Password=Password, users=users)
        # else:
        #     print("no go")
    # userID = {}
    # userID ['password'] = request.form['pwd'] 
    # if c.decode(key, userID["password"]) in users:
    #     print("hello", userID["username"], "!")
    #     return redirect('Docs\\SuperSecret.html')

    return render_template('index.html', Password=Password, users=users)


app.run(debug=True)