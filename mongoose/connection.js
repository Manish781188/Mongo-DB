const  mongoose = require('mongoose')
const main =async()=>{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/stproject")
    console.log("connected to Mongo");
  // create
    // await StModel.insertMany({name:"manish",age:"20" ,city:"Bhopal"});
    console.log("data inserted successfully");
    //create single data using constructor
    const st = new StModel({
        name:"saumya",
        age:15
        
    });
    await st.save();

    //read
    const data = await StModel.find();
    console.log(data);

    //update

    // await StModel.updateOne({name:"aman"},{$set:{name:"panday"}})
    // const data = await StModel.find();
    // console.log(data);

    //delete
    // await StModel.deleteOne({name:"nishant"});
    // const data = await StModel.find();
    // console.log(data);

    mongoose.disconnect();
    console.log("connection is disconnected");
  
}
main()
const stSchema =mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    city:{type:String, required:true}
},{
    versionKey:false,
})

const StModel =mongoose.model("student",stSchema)