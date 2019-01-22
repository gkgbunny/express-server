export default function dia(n: number): void {
  console.log(`Print a diamond pattern with ${n} rows`);
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
  for (let i: number = 1; i <= n; i++) {
    let c: string = "";
    for (let j: number = 1; j <= i - 1; j++) {
      c += " ";
    }

    let d: string = "";
    for (let k: number = 0; k <= n - i; k++) {
      d += "* ";
    }
    console.log(c, d);
  }
}
