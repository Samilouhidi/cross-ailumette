const readline = require('readline');
const colors = require('colors');
const { exec } = require('child_process');
const { stderr } = require('process');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log("*********\n*   |   *\n*  |||  *\n* ||||| *\n*|||||||*\n*********\n".red)
  rl.question("Line:", function(answer) {
    // TODO: Log the answer in a database
    console.log(answer);
  
    rl.close();


function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min)) + min;
}

if(process.argv.length ===3){
  if(process.argv[2] === '==gui'){
    process.chdir('electron')
    exec('npm run start', (error,stdout,stderr) => {
      if(error){
        console.log('erro: $(stderr)')
        return
    )
    if (stderr){
      console.log('stderr:$(stderr')
      return
    }
    console.log('stoudt: $(stdout)')
  ])


  async function Game
