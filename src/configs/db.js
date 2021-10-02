const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://Tanishq:Tanishq123@tanishq.rxt9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect