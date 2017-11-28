'use strict';
const request = require('request');
const parser = require('./parser');
// const server = require('./server');
// const response = require('./functions');
let result;
function get(path) {
// console.time('Getting data:');
    let data;
    console.time('Status');
    request(path, function (err, res, body) {
        if (err) throw err;


        module.exports.status = res.statusCode;
        console.log('res.statusCode '+res.statusCode);
        if (res.statusCode) {
            console.timeEnd('Status');
            // server.answer();

        }


        result = parser.parse(body);
        module.exports.obj = result;
    });
    // console.timeEnd('Getting data:');
    // return data;
}

module.exports.getData = get ;



