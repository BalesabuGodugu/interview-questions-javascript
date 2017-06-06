/*
Given a list of bytes a, each representing one byte of a larger
integer (ie. {0x12, 0x34, 0x56, 0x78} representing the integer
0x12345678), and an interger b, find a % b.

mod({0x03, 0xED, 10}) => 5
0x03ED


long division :

   012
12/152
  -0 (1 / 12 = 0) => 0 * 12 = 0
   15 (15 / 12 = 1) => 1 * 12 = 12
  -12
    32 (32 / 12 = 2) => 2 * 12 = 24
   -24
    8 => final mod
------------------------------
    152 / (12 = 12 * 12) + 8

    Key :
    Going through the number digit by digit, each round we
    multiply previous division by ten and to next digit
*/

function mod (a, b) {
  let m = 0;
  for (var i = 0; i < a.length; i++) {
    m <<= 8;
    m += (a[i] & 0xFF);
    m %= b;
  }

  return m;
}

mod([0x03, 0xED], 10);
