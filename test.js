const fs = require('fs');
function convertToDecimal(base, value) {
    return parseInt(value, base);
}
function lagrangeInterpolation(points) {
    let c = 0;
    for (let i = 0; i < points.length; i++) {
        let xi = points[i][0];
        let yi = points[i][1];
        let li = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (0 - xj) / (xi - xj);
             
            }
        }
        c += yi * li;
    }
    return c;
}
fs.readFile('test1.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        let p=[]
        let points = [];
        for (let key in jsonData) {
            if (key !== "keys") {
                let base = parseInt(jsonData[key].base);
                let value = jsonData[key].value;
                let numericValue = convertToDecimal(base, value);
                points.push([parseInt(key), numericValue]);
            }
        }
        if (points.length < jsonData.keys.k) {
            console.error(`At least ${jsonData.keys.k} points are required for Lagrange interpolation.`);
        } else {
            let c = lagrangeInterpolation(points);
            console.log("The value of c is:", c);
       

        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
});
