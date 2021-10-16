const whereCanIPark = function (spots, vehicle) {

  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots.length; x++) {
      let parkingS = [];
      let parkingR = [];
      let parkingM = [];
      if ((vehicle === 'motorcycle' && spots[y][x] === 'S') || (vehicle === 'motorcycle' && spots[y][x] === 'R') || (vehicle === 'motorcycle' && spots[y][x] === 'M')) {
        parkingM.push(x);
        parkingM.push(y);
        return parkingM;
      } else if ((vehicle === 'small' && spots[y][x] === 'S') || (vehicle === 'small' && spots[y][x] === 'R')) {
        parkingS.push(x);
        parkingS.push(y);
        return parkingS;
      } else if (vehicle === 'regular' && spots[y][x] === 'R') {
        parkingR.push(x);
        parkingR.push(y);
        return parkingR;
      }
    }
  }
  return false;
};

// END OF FUNCTION


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))