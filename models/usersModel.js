const db = require('./conn');

class UsersModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async save() {
        try {
            const response = await db.one(`
                insert into users 
                    (name, email, password) 
                values 
                    ($1, $2, $3) 
                returning id
                `, [this.name, this.email, this.password]
                );
            console.log("user was created with id:", response.id);
            return response;
        } catch(err) {
            return err.message;
        }
    }
    async newUser() {
        try {
            const response = await db.one('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id;', [this.name, this.email,this.password]);
            return response
        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }

    async userLogin() {
        try {
            const response = await db.one(`SELECT id, name, password FROM users WHERE email = $1;`, [this.email]);
            console.log("response is", response);
            return response    
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    }
}



module.exports = UsersModel;


