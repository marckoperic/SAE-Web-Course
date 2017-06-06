var fruits = ["jabuka", "kruska", "jagoda", "visnja", "tresnja"];
console.log (fruits);
fruits.unshift("avokado", "mango");
console.log (fruits);
fruits.pop();
console.log (fruits);
fruits.push("limun", "kiwi");
console.log (fruits);
fruits.splice(2, 2, "narandza", "lubenica");
console.log (fruits);

for (var i = 0; i < fruits.length; i ++){
console.log (fruits[i]);
}