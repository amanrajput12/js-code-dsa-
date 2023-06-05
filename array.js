

function shiftZero(num) {
    console.log(num);
  
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i]!== 0) {
        num[temp] = num[i];
        temp++;
      }
    }
  
    while (temp < num.length) {
      num[temp] = 0;
      temp++;
    }
  
    console.log(num);
  }
  
  let num = [0, 1, 0, 3, 12];
  shiftZero(num);
  