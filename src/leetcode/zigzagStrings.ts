

const input = "PAYPALISHIRING";
const rows = 3;

/** 
PAYPALISHIRING:3

P   A   H   N
A P L S I I G
Y   I   R
*/


/*
PAYPALISHIRING:4

P     I    N
A   L S  I G
Y A   H R
P     I
*/

const makeZigzag = (str: string, rows: number) => {
    const rowContents: string[][] = new Array(rows).fill([]);

    str.split("").forEach((x, index) => {
        rowContents[index].push(x);
    })

} 