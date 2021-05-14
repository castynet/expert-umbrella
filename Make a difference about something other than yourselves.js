room = { length: 12, width: 10, height: 9 }
canCoverage = 200

function getCans(r, cc){
  area = (r.length * r.height * 2) + (r.width * r.height *2);
  return Math.ceil(area/cc);
}

getCans(room, canCoverage)


