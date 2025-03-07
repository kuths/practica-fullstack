import { Schema,model } from "mongoose";

let collection = 'moto'
let schema = Schema ({
    name:{type:String,require:true},
    modelo:{type:String,require:true},
    CC:{type:String,require:true},
    color:{type:String,require:true},
},{
    timestramp:true
})

let Moto = model(collection,schema) 

export default Moto
