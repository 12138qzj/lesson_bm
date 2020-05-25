var map = new Map();

map.set("key", 1);
map.set("key2", 2);
map.set("key3", 3);

map.set("key4", 4);


console.log(map)
map.delete(map.keys().next().value);
map.delete("key4");


let value = map.get("key2")
map.delete("key2")
map.set("key2", 2)

// console.log(map.get(3))
console.log(map)