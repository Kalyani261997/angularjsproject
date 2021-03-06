from src import app
from flask import request,make_response,send_file
from flask_cors import CORS,cross_origin

@app.route("/")
@cross_origin()
def home():
    try:
        return send_file(app.root_path+"/static/index.html")

    except Exception as e:
        return make_response({"error":str(e)},500)



@app.route("/assets",defaults={"path":''})
@app.route("/assets/<path:path>")
@cross_origin()
def asset_handler(path):
    try:
        return send_file(app.root_path+"/assets/"+path)
    except Exception as e:
        return make_response({"error":str(e)},500)

@app.route("/",defaults={"path":''})
@app.route("/<path:path>")
@cross_origin()
def file_handler(path):
    try:
        return send_file(app.root_path+"/static/index.html")
    except Exception as e:
        return make_response({"error":str(e)},500)

@app.route("/login")
def login():
    try:
        return send_file(app.root_path+"/static/login.html")
    except Exception as e:
        return make_response({"error":str(e)},500)

@app.route("/register")
def register():
    try:
        return send_file(app.root_path+"/static/register.html")
    except Exception as e:
        return make_response({"error":str(e)},500)

@app.route("/forget_password")
def forget():
    try:
        return send_file(app.root_path+"/static/forget_password.html")
    except Exception as e:
        return make_response({"error":str(e)},500)