const lonelyNumber = (x, y, z) => {
  xy = x === y;
  xz = x === z;
  yz = y === z;
  
  return xy && xz && yz ? 1 : xy ? z : xz ? y : yz ? x : x * y * z;
}

lonelyNumber(7,7,7);
lonelyNumber(6,6,4);
lonelyNumber(1,2,3);
