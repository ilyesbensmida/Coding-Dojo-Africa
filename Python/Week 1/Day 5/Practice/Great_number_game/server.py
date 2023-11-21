# from flask import Flask, render_template, request, session
# import random

# app = Flask(__name__)
# app.secret_key = 'secret'

# @app.route('/')
# def index():
#     if 'secret_number' not in session:
#         session['secret_number'] = random.randint(1, 100)
#     return render_template('index.html')

# @app.route('/guess', methods=['POST'])
# def guess():
#     guess = int(request.form['guess'])
#     secret_number = session['secret_number']
#     if guess < secret_number:
#         result = "Too low!"
#     elif guess > secret_number:
#         result = "Too high!"
#     else:
#         result = f"Congratulations! You guessed the number."
#         session['secret_number'] = random.randint(1, 100)
#     return render_template('guess.html', result=result)

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, render_template, session, redirect,request
import random

app = Flask(__name__)

app.secret_key="Benny bob wuz heer."

@app.route('/')
def index():
    if "num" not in session:
        session['num'] = random.randint(1,100)

    return render_template("index.html")

@app.route('/guess',methods=['POST'])
def guess():
    session['guess'] = int(request.form['guess'])
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)