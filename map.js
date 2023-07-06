const mp = new Map();
mp.set("kuntal",2);
console.log(mp.get("kuntal"))
const obj = {
    name : "kuntal",
}
const wmp = new WeakMap();
wmp.set(obj,{age : 22});
console.log(wmp.get(obj))