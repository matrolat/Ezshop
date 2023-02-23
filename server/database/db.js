import mongoose from 'mongoose';

const connection =()=>{
    mongoose.connect("mongodb://localhost:27017/Ezshop",{}).then(
        (data)=>{
            console.log(`mongodb connected with server ${data.connection.host}`)
        }
    ).catch(
    
        (err)=>{
            console.log(err);
        }
    )
}
export default connection;