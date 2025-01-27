const db = require('./dbConnect');
const table = db.model('user');

function authenticate({email,password}){
    return new Promise((resolve,reject)=>{
        table.findOne({email:email},(err,result)=>{
            if(err) reject(err);
            else if(result!=null){
                //console.log(password);
                if(result.passwordHash == password){
                    console.log("here");
                    resolve(result);
                }
                else
                reject(false);
            }
            else reject("Email doesnot exist");
        });
    });
}

module.exports = authenticate;