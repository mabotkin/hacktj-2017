from flask import Flask, request, render_template
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
	return render_template('index.html')

@app.route('/vr', methods=['GET'])
def vr():
	return render_template('vr.html')

if __name__ == '__main__':
	app.run(port=os.getenv('PORT', 5000), host='0.0.0.0', debug=True)
