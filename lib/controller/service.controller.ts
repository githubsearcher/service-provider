import * as fs from 'fs';
const path = require('./../data.json');

export class ServiceController {
    constructor() {

    }
    // get list of services
    async getServices(req, res, next) {
        try {
           console.log('isndie', path)
            fs.readFile('./../data.json', (err, data) => {
              // Check for errors
            if (err) throw err;

            // Converting to JSON
            console.log('data..', data)
           // const data = JSON.parse(data);

            console.log(data);
              // const serviceData = JSON.parse(jsonString);
              // console.log('jsonString...', serviceData)
              // res.status(200).json({data : jsonString});
            });
            // const jsonString = fs.readFileSync('./../data.json');
            // console.log('jsonString', jsonString)

        } catch(e) {
            res.status(400).json(e);
        }
    }
}
