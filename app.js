'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const response = require('./functions');
const get = require('./getData');

let info;

const server = (req, res)=>{

    const q = url.parse(req.url, true);
    const data = q.query;
    if (data.path){
        // console.time('All request');
        let path = data.path;
        const pib = data.pib;
        // console.time('Operating get:');
        get.getData(path);
        // console.timeEnd('Operating get:');

        // console.log(get.status);


        setTimeout(()=>{
            // console.time('Operating:');
            info = get.obj;
            // console.time('Functions:');
            const answer = response.getNumOfFirstPriority(info,pib);
            // console.timeEnd('Functions:');
            console.log(answer);
            // console.timeEnd('Operating:');
            res.end();
            },30000);

        // console.timeEnd('All request');

        }else {
        res.write(fs.readFileSync('home.html','utf8'));
        res.end();
    }
};

const runServer = http.createServer(server).listen(8080);