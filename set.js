const st1 = new Set([1,9,7,8,8])
console.log(st1)    //ok
const obj = {
    name : "kuntal",
    gender : "male"
}
const wst1 = new WeakSet([])
wst1.add(obj);
console.log(wst1)   //ok
console.log(wst1.has(obj))
wst1.delete(obj)