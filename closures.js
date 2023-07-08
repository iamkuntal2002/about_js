<<<<<<< HEAD
// function init() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     name = "kuntal"
//     return displayName;
// }
// let ret = init();
// ret()   //kuntal


function returnfun() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z()
        }
        a = 10
        y()
    }
    a = 10
    return x;
}
const ret = returnfun();
=======
// function init() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     name = "kuntal"
//     return displayName;
// }
// let ret = init();
// ret()   //kuntal


function returnfun() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z()
        }
        a = 10
        y()
    }
    a = 10
    return x;
}
const ret = returnfun();
>>>>>>> 3a26d14 (first try)
ret() //1 10 10