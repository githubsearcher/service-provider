export class ServiceController {
    constructor() {

    }
    // get list of user
    async getUsers(req, res, next) {
        try {
            // let users: any = 
            // if(users.length > 0) {
            //     res.status(200).send(users);
            // } else {
            //     res.status(404).send('Yet no user exist !!');  
            // }
        } catch(e) {
            res.status(400).json(e);
        }
    }
}