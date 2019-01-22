export default function eql(n: number): void {
  console.log(`Print an equilateral triangle with ${n} rows`);
  for (let i: number = 1; i <= n; i++) {
    let a: string = "";
    for (let j: number = 1; j <= n - i; j++) {
      a += " ";
    }

    let b: string = "";
    for (let k: number = 1; k <= i; k++) {
      b += "* ";
    }
    console.log(a, b);
  }
}
