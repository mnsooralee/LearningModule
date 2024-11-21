let fact = (n) => {
  if(n===1) {
    return 1;
  }
  else {
    let f = fact(n-1);
    console.log("n = ",n,"(n-1)! = ",f,"n! = ",n*f);
    return n * f;
    // return n * fact(n-1);
  }
}
let m = fact(10);
console.log(m);