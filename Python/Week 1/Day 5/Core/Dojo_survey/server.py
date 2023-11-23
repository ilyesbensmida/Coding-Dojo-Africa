from flask import Flask, render_template, redirect,request,session

app = Flask(__name__)
app.secret_key = 'we are not safe' # set a secret key for security purposes


# http://127.0.0.1/
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    print("*"*20, request.form,"*"*20)
    session["name"] = request.form["name"]
    session["comments"] = request.form["comments"]
    session["Location"] = request.form["Location"]
    session["fav_language"] = request.form["fav_language"]
    return redirect('/display')

@app.route('/display')
def display():
    return render_template("display.html")

@app.route('/clear')
def clear():
    session.clear()
    return redirect ('/display')

if __name__ == "__main__":
    app.run(debug=True, port=5001)