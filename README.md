# Macro-Dux-Visualizer
As a music producer, one of my go to software synthesizers is Massive by Native Instruments.
A standout feature is its set of macro control knobs that can be connected to as many other parameters as you like,
granting the user five customizable single points of control. I thought it would be interesting to implement this macro
control paradigm in a React application. The song is divided into three voices, each of which has three macros
that control audio effects parameters as well as the voice's representation in the visualizer. I utilized the tone.js library
to build the synthesizer components, and the p5.js library for the visualizer. There are two demo songs one using both the 
synthesizer and visualizer, the other just passes an mp3 to the visualizer. The app also has user functionality. Once signed, the user 
can upload their own song (broken up into bass, harmony, and melody) that saves to the backend.

#Install Instructions
-fork and clone this repository
-cd into the macro-dux-api folder and run bundle install
-cd into the macro-dux-visualizer folder and run npm install
-in one terminal run rails s from the macro-dux-api folder
-in another terminal run npm start form the macro-dux-visualizer folder
