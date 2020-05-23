const pos = new Array(1 << 5).fill(-1);
pos[0] = 0

var status = 0;
status ^= 1 << 4;
console.log(pos[status])