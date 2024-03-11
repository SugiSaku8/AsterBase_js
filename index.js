const fs = require("fs")
const base = {
    arsJSON:function(pass){
        let file = fs.readFileSync(pass);
        try{
        JSON.stringify(file)
    },
}