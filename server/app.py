from flask import Flask, request, render_template

@app.route('/', methods=['GET'])
def home():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(port=os.getenv('PORT', 5000), host='0.0.0.0', debug=True)
