function print(...arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    console.log(sum)
};
print(1,2,3,4,5);   //15
print(1,2,3,4,5,6); //21

