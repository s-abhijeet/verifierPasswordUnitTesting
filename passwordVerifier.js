function verifyPassword(password){
    if(password === null)
    throw new Error ("password should not be null");
    if(password.length < 9)
    throw new Error ("password should be greater then 8");
    if(password === password.toLowerCase())
    throw new Error("No UpperCase Char Error");
    if(password === password.toUpperCase())
    throw new Error("No LowerCase Char Error");
    if( !(/\d/.test(password)) )
    throw new Error("No digit Error");
}
module.exports ={verifyPassword};