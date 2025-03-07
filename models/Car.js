import { Schema,model } from "mongoose";

let collection = 'Car'
let schema = Schema ({
    name:{type:String,require:true},
    modelo:{type:String,require:true},
    CC:{type:String,require:true},
    color:{type:String,require:true},
    seating:{type:String,require:true},
},{
    timestramp:true
})

let Car = model(collection,schema) 

export default Car