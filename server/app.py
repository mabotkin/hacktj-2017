#!/usr/bin/env python3

from flask import Flask, request, render_template, redirect, url_for, send_file, redirect
from werkzeug.utils import secure_filename

import os
import matlab_interface
import shutil

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET'])
def home():
	return render_template('index.html')

@app.route('/vr', methods=['GET'])
def vr():
	return render_template('vr.htmli')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
	if request.method != 'POST':
	    return render_template('upload.html')

	file = request.files.get('file')
	if not file:
		raise ValueError('No selected file')
	if not allowed_file(file.filename):
		raise ValueError('File type not allowed')

	filename = secure_filename(file.filename)
	filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
	file.save(filepath)

	# perform the stuff
	outfile = matlab_interface.do_the_thing(filepath)
	blurfile = matlab_interface.do_the_blur(filepath)

	# copy to vr folder
	vr_assets_dir = os.path.join(os.path.dirname(matlab_interface.dir_path),
		'vr', 'static_assets')
	shutil.copyfile(filepath, os.path.join(vr_assets_dir, 'original.png'))
	shutil.copyfile(outfile, os.path.join(vr_assets_dir, 'out.png'))
	shutil.copyfile(blurfile, os.path.join(vr_assets_dir, 'blur.png'))

	#return send_file(outfile)
	return redirect("http://localhost:8081/vr/") # disclaimer: this is larrys fault

if __name__ == '__main__':
	app.run(port=os.getenv('PORT', 5000), host='0.0.0.0', debug=True)
