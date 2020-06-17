const model = require('./model')

const addchat = chat =>{
    const mychat = new model (chat)
    return mychat.save()
}
const getchat = async (userId) =>{
    return new Promise ((resolve, reject) => {
        let filter = []
        if (userId){
            filter = {
                users: userId
            }
        }
        model.find(filter)
        .populate('users')
        .exec((error, populated) => {
            console.log(`[POPULATED: CHAT] ${populated}`);
            
            if(error)
                reject (error)
            else
                resolve (populated)
        })
    })
}
module.exports={
    add : addchat,
    list : getchat
}