function eql(n) {
    console.log('Print a diamond pattern with 5 rows');
    for(let i=1;i<=n;i++) {
        let a=''
        for(let j=1;j<=n-i;j++) {
            a += ' '
        }

        let b=''
        for(let k=1;k<=i;k++) {
            b += '* '
        }
        console.log(a,b)
    }
    for(let i=1;i<=5;i++) {
        let c=''
        for(let j=1;j<=i-1;j++) {
            c += ' '
        }
        
        let d=''
        for(let k=0;k<=n-i;k++) {
            d += '* '
        }
        console.log(c,d)
    }
}
eql(5)
