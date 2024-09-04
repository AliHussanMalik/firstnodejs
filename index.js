const fs=require('fs')
// const{add,minus}= require('./math')
// let addnNumbers=add(2,5);
// let minusnNumbers=minus(4,2);

// console.log(addnNumbers)
// console.log(minusnNumbers)
// fs.readFile("html.txt", "Utf8", function(err, data){

// if 
// (err) {console.log(err)}
// else
// {console.log(data)}
// })

//To write something in file.
// let data="Ali Hussan Malik(The Loely BOy)"
fs.writeFile("html.txt", "The Lovely BOy" , (err)=>{

    if (err) {
        console.log(err)
    }
    else{
    console.log(fs.readFileSync("html.txt","utf8") )
}
    })