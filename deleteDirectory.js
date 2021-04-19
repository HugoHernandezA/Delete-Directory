const fs = require('fs');
const readline = require('readline')
const dir = './tryDelete'

//FUNCTION TO KNOW IF DIRECTORY IS EMPTY
function isEmpty(dir) {
    return fs.readdirSync(dir).length === 0;
}

//FUNCTION TO REMOVE DIRECTORY WITH RECURSIVE
function removeDir(dir){
    fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${dir} is deleted!`);
    });
}

//REMOVING THE DIRECTORY
try{
    if (fs.existsSync(dir)) {
        if(isEmpty(dir) === true){
            removeDir(dir);
        }
        else{
            const response = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
              
            response.question('Are you sure you want to delete directory? Y/N', (answer) => {
            // TODO: Log the answer in a database
            if(answer === "Y"){
                removeDir(dir);
            }
            else{
                console.log("Nothing was deleted.")
            }
            response.close();
            });
        }
    } else {
        throw "Directory does not exist or is not specified.";
    }
}
catch(err) {
    console.log(err);
}
