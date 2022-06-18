const ftoc = function (f) {
  returnVal = (f - 32) * 5 / 9;
  return (Math.round(returnVal * 10) / 10);
};

const ctof = function (c) {
  returnVal = (c * 9 / 5) + 32;
  return (Math.round(returnVal * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
