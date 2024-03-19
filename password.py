from flask import Flask, redirect, render_template, jsonify
from flask import request
import json

app=Flask(__name__)

@app.route('/')
def index():
    user = json.load(open('Projet_Javascript_Nikolas_Xavier\JSON\pass.json'))