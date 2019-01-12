import sqlite3
import uuid

DB_FILE="./data/urls.db"

def create_db():
    '''
    Creates the db.
    '''
    db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
    c = db.cursor()               #facilitate db ops

    c.execute("CREATE TABLE IF NOT EXISTS urls(newID TEXT, original TEXT)")

    db.commit()
    db.close()

def makeURL(url):
    db = sqlite3.connect(DB_FILE)
    c = db.cursor()

    print('\n\n\n' + url + '\n\n\n')
    c.execute('SELECT newID FROM urls WHERE original = "{}"'.format(url))
    exists = c.fetchall()

    out = ""
    print(exists)

    if len(exists) > 0:
        newID = ""
        for i in range(30):
            newID += str(uuid.uuid1())
        c.execute('INSERT INTO urls VALUES("{}", "{}")'.format(newID, url))
        out = newID
        db.commit()
    else:
        print('else')
        out = exists[0]

    db.close()

    return out

def getURL(id):
    db = sqlite3.connect(DB_FILE)
    c = db.cursor()

    c.execute('SELECT original FROM urls WHERE newID = "{}"'.format(id))
    og = c.fetchall()
    print(og)

    if og == None or og == '':
        return 'Not valid'
    else:
        return og


if __name__ == '__main__':
    create_db()
