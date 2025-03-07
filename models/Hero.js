import { Schema,model } from "mongoose";

let collection = 'hero'
let schema = Schema ({
    name:{type:String,require:true},
    power:{type:String,require:true},
    genero:{type:String,require:true}
},{
    timestamps:true
})

let Hero = model(collection,schema)

export default Hero