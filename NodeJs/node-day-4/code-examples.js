const fs = require('fs');
const path = require('path');


fs.readdir('../', (err, files) => {
    if(err) console.log('an error has occurred');
    else{
        console.log(files);
        for(let i =0; i < files.length; i++){
            let file = path.join('../', files[i]);
            console.log(file);
            fs.stat(file, (err, stats)=>{
                if(err) console.log('an error has occurred');
                if(stats.isFile()){
                    fs.readFile(file, (err, fileInfo) =>{
                        console.log(file+ " to string " + fileInfo.toString());
                    })

                }


            })
        }
    }
});

//read files in directory
//fs stat
//read files
// fs.writeFileSync('./tmp/readme.me')
