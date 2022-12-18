from flask import Flask
app = Flask(__name__)
@app.route("/data")
def data():
    return {"data": ["photo1", "photo2", "photo3"]}
if __name__ == "__main__":
    app.run(debug=True)
