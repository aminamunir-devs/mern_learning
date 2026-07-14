const jwt=require("jsonwebtoken");
const secretKey="mySecretKey";


const token=jwt.sign(
{
    id:1,
    email:"amina@gmail.com",
},
secretKey,
{
    expiresIn:"20s",
}    
);

console.log("generated token");
console.log("token is :",token);

const decoded=jwt.verify(token,secretKey);
console.log("\n decoded token");
console.log(decoded);