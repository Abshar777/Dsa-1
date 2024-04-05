
let flag = 0;
function abc() {
  flag++;
  if (flag == 5) {
    return flag;
    
  } else {
    console.log(flag);
    abc();
  }
}
const g=abc()
console.log(g);
