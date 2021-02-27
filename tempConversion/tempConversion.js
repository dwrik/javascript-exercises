// toFixed returns a string
// so unary + is used to convert to Number

const ftoc = function(ftemp) {
  return +((ftemp - 32) * 5 / 9).toFixed(1);
}


const ctof = function(ctemp) {
  return +(ctemp * 9 / 5 + 32).toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
