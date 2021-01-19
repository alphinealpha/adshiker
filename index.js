const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const insertData = async(adID) =>
{
    const params = {
        TableName:"users",
        Item:{
            id:111,
            firstname:"Alphine",
            lastname:"patrick"
        }
        
    }
    try {
        const res = await docClient.put(params).promise();
        console.log(res);
    } catch (e) {console.log("Error",e)}
}
exports.handler = async (event) => {
    const {id,firstname,lastname}= JSON.parse(event.body);
};
