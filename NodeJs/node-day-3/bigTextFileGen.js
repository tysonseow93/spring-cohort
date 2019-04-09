// =====================Send Big File=====================

const fs = require('fs');
const file = fs.createWriteStream('./bobRossIpsumBig.txt');

for(let i=0; i <= 1e6; i++){
    file.write('bobRossIpsum.txt');
}

