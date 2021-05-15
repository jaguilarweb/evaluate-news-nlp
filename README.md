# Evaluate news NLP

## Introduction

This project is a FEND program powered by Udacity.

The goal of this project is to give me practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I was introduced it to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech.


## Overview

I builded a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

In this project I used an external api called Meaning Cloud API (https://www.meaningcloud.com/) to interact with their NLP system.

This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Accessing the app

This website has been hosting on Heroku and it is currently working at this link:

https://evaluate-news-nlp-jaguilarweb.herokuapp.com/

![](https://github.com/jaguilarweb/evaluate-news-nlp/blob/master/src/client/assets/nlp-project-screenshot.png)

## Getting started

### Principal Dependencies

This project needs to have installed NodeJS.

That once you clone, you will still need to install:

`cd` into your new folder and run:
- `npm install`

### Installing other Dependencies

```
- npm i webpack webpack-cli
- npm i -D @babel/core @babel/preset-env babel-loader
- npm i -D html-webpack-plugin
- npm i -D clean-webpack-plugin
- npm i -D webpack-dev-server 
- npm i -D style-loader node-sass css-loader sass-loader
- npm i -D mini-css-extract-plugin
- npm i -D optimize-css-assets-webpack-plugin
- npm i -D terser-webpack-plugin
- npm install dotenv
- npm install express
- nom install body-parser
- npm install cors
- npm install node-fetch
- npm install workbox-webpack-plugin --save-dev
```

### Environment Variables

To use Meaning Cloud you need to be register and to have a personal API KEY.

## Running

To run development mode, run:

`npm run build-dev`

To run product mode, run:

`npm run build-prod`


## Testing

To run the tests, run:

`npm run test`


## Credits and Disclaimer

- Fonts: Customize Fonts Google (https://fonts.google.com/) were used in this projects.

- Disclaimer: This is a proposal or test project and your use of the code is under your own accountability.

- Trademarks: Any of the trademarks, service marks, collective marks, design rights, personality rights or similar rights that are mentioned, used or cited in this project are the property of their respective owners. Their use here does not imply that you may use them for any other purpose other than for the same or a similar informational use as contemplated by the original authors.

## Author
This application and documentation were created by Jenny Aguilar.