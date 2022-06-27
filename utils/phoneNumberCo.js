export default function phoneNumberCo(){
  var mno = [310, 311, 312, 313, 314,321,320,322, 323, 315, 316, 317, 318, 305, 319, 350, 351, 300, 301, 302]
  return parseInt(`${mno[Math.floor(Math.random()*mno.length)]}${Math.floor(Math.random() * 10000000)}`)
}

