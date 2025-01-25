const {MongoClient}=require('mongodb')
var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);

async function run()
{
    try
    {
        const db=client.db('cmsdb')
        const collection=db.collection('mycol')
        var obj=[{name:"mohamed",age:36,email:"mohamed@gmail.com"},{name:"raja",age:33,email:"raja@gmail.com"}]
        await collection.insertMany(obj);
        console.log("DataInserted..")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)