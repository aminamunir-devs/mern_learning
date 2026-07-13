const bcrypt = require("bcrypt");
const users=require("./users")

async function signup() {
    const password = "amina123";
    const hashedPassword = await bcrypt.hash(password, 10);

    const user={
        email:"amina@gmail.com",
        password:hashedPassword,
    };
    users.push(user);

    console.log("user registered successsfuly");
    console.log(users);

    login("amina123");

    async function login(loginPassword){
        const user=users[0];

        const isMatch =await bcrypt.compare(loginPassword,user.password);
      if(isMatch)
      {
        console.log("login succesfully ")
      }
      else{
        console.log("invalid pssword ")
      }

    }
}
signup();