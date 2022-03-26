const userDetails = {
        userName : "johndoe",
        password : "pass"
}

async function login(user, password) {
    try{
        const result = await checkUser(user, password);
        if(result){
            console.log("Succesfull Login");
        }
    }catch(err){
        console.log(err)
    }
}

const checkUser = (user, pass) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(user == userDetails.userName && pass == userDetails.password){
                resolve(true);
            }
            else{
                reject(false);
            }
        },2000);
    })
}

const USERNAME = "johndoe"
const PASSWORD = "pass"

login(USERNAME,PASSWORD);