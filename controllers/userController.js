
const User = require("../models/user")

exports.createUser =function (name,age,email,password) {
    const newUser = new User({name,age,email,password})
    return newUser.save()
}

exports.putUser =function (id,email,age){
    return  User.findByIdAndUpdate(id,{"email":email},{"age":age},{new:true})
}
exports.deleteUser =function (id){
    return User.findByIdAndDelete(id)
}
