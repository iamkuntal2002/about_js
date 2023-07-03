// let cont = document.getElementById("cont");
// cont.innerText= 'kuntal das'

let obj = {};
(() => {
    let tags = document.getElementsByTagName("*");
    for(let tag in tags){
        console.log(tag);
    }
})()