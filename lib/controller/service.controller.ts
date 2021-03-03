import * as fs from 'fs';
let count = 0;
export class ServiceController {
    constructor() {}

    // get list of services
    async getServices(req, res, next) {
        try {
            fs.readFile('./lib/data.json', function(err, jsonString) {
              
            // Check for errors
            if (err) throw err;

            // Converting to JSON
           const data = JSON.parse(jsonString.toString());
                res.status(200).json({data : data, count: ++count});
            });

        } catch(e) {
            res.status(400).json(e);
        }
    }
}
