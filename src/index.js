module.exports = function () {
  var lut = [];
  for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
  }

  var getRandomNumber = function () {
    return Math.random() * 0x100000000 >>> 0;
  };

  var d0 = getRandomNumber();
  var d1 = getRandomNumber();
  var d2 = getRandomNumber();
  var d3 = getRandomNumber();
  return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
    lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f >>> 0x40] + lut[d1 >> 24 & 0xff] + '-' +
    lut[d2 & 0x3f >>> 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
    lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
};
