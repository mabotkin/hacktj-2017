#!/usr/bin/env python3
import os

original_dir = os.getcwd()
dir_path = os.path.dirname(os.path.realpath(__file__))
matlab_dir = os.path.join(os.path.dirname(dir_path), 'matlab')

print('Loading Matlab engine... please wait.')
os.chdir(matlab_dir)
os.makedirs('uploads/precompute', exist_ok=True)

import matlab.engine
eng = matlab.engine.start_matlab()

os.chdir(original_dir)
print('Done!')

def do_the_thing(imgfile):
	imgfile = os.path.realpath(imgfile)

	os.chdir(matlab_dir)
	outfile = eng.runProgram(imgfile, 1.0, 0.0)
	outfile = os.path.realpath(outfile)
	os.chdir(original_dir)

	#print('outfile:', outfile)
	return outfile
