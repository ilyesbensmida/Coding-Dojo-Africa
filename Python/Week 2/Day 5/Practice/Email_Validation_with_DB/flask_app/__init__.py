from flask import Flask 
app=Flask(__name__)

DATABASE="email_validation"
app.secret_key="123456789"