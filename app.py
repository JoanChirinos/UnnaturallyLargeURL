# Joan Chirinos

import os

from flask import Flask, render_template, redirect, url_for, session, request, flash, get_flashed_messages
import uuid

from util import db

#============instantiate Flask object================
app = Flask(__name__)
app.secret_key = os.urandom(32)

#===========manage user data here====================

DB_FILE = 'data/tuesday.db'


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_url')
def get_url():
    id = db.makeURL(request.args['url'])
    return id

@app.route('/goto/<urlID>')
def go_to(urlID):
    url = db.getURL(urlID)
    if url == 'Not valid':
        return render_template('goto.html', has_url='no', url='yeet')
    else:
        print('\n\n\n' + url[0][0] + '\n\n\n')
        if url[0][0][:4] != "http":
            url = [("http://" + url[0][0], 'lol')]
        return render_template('goto.html', has_url='yes', url=url[0][0])

if __name__ == '__main__':
    app.debug = True
    app.run()
