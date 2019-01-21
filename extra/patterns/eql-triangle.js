export default function eql(n) {
  console.log("Print an equilateral triangle with 10 rows");
  for (let i = 1; i <= n; i++) {
    let a = "";
    for (let j = 1; j <= n - i; j++) {
      a += " ";
    }

    let b = "";
    for (let k = 1; k <= i; k++) {
      b += "* ";
    }
    console.log(a, b);
  }
}
