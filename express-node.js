const fs = require('fs');

// Async read
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log('Async:', data.toString('utf-8'));
    }
});

// Sync read
try {
    const file = fs.readFileSync('./hello.txt');
    console.log('Sync:', file.toString());
} catch (err) {
    console.log("Error during sync read:", err);
}

// // Append to file
// fs.appendFile('./hello.txt', ' This is cool and awesome!!!!', err => {
//     if (err) {
//         console.log("Error appending to file:", err);
//     } else {
//         console.log("Data successfully appended to file!");
//     }
// });


//write
fs.writeFile('bye.txt', 'Sad to see you go', err=>{
    if(err){
        console.log(err)
    }
})

// delete
fs.unlink('./bye.txt',err=>{
    if(err){
        console.log(err)
    }
    console.log('Delete successful')
})