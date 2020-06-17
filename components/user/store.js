const model = require("./model");

const addUser = user => {
  const myUser = new model(user)
  return myUser.save()
}
const listUser = () => {
  return model.find()
}
module.exports = {
  add: addUser,
  list: listUser
};