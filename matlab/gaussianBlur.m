function [ outfilename ] = gaussianBlur( filename, sigma )
%GAUSSIANBLUR Summary of this function goes here
%   Detailed explanation goes here

I = imread(filename);
Iblur = imgaussfilt(I, sigma);

outfilename = 'output/blurred.png';
imwrite(Iblur, outfilename, 'png');

end

