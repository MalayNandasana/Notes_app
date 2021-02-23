
// npm  package

//validator package
const validator = require('validator')
console.log(validator.isEmail('malay@gmail.com'))

console.log(validator.isURL('https://www.npmjs.com/package/validator'))
//--------------------------------------------------------

// chalk package
const chal = require('chalk')
console.log(chal.green('Success!'));
console.log(chal.inverse('Success!'));
console.log(chal.red.bold('Success!'));
console.log(chal.green.inverse.bold('Success!'));

console.log(chal.red('Success! ' + 'good ' + chal.blue("morning")));

//------------------------------------------------------------


const g = require('./functionchalleneg.js') 

const msg = g()
console.log(msg)

//----------------------
//taking input from user (command line argument)
console.log(process.argv)
//-------------------

const commamd = process.argv[2]
if (commamd==='add')
{
    console.log('adding notes')
}
else if (commamd === 'remove')
{
    console.log('removing notes')
}

//yargs
const yargs = require('yargs')

console.log(process.argv)
console.log(yargs.argv)

//change the verion of yargs
const yargs = require('yargs')
yargs.version('1.1.0') // to check the command is (--version)
console.log(yargs.argv)


// create add command
const yargs = require('yargs');
const { describe } = require('yargs');
yargs.command({
    command: 'add',
    describe: "add a new note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }//body can be written here also
    },
    body: {
        describe: "Note body",
        demandOption: true,
        type: 'string'

    },
    handler: function(argv){
        //console.log("adding a new note!!!")
        console.log("Title " + argv.title)
        console.log("Body " + argv.body)
    }
})
console.log(yargs.argv) //console.log(yargs.argv) or yargs.parse()
//yargs.parse()

//create remove command
const yargs = require('yargs');
yargs.command({
    command: 'remove',
    describe: "remove a note",
    handler: function(){
        var a=5;
        var b=6;
        var c = a+b;
        console.log(c)
    }
})

//create list command
const yargs= require('yargs')
yargs.command({
    command: 'list',
    describe: 'list a notes',
    handler: function(){
        console.log("listing a notes!!!")
    }
})

//create read command
//const yargs= require('yargs')
yargs.command({
    command: 'read',
    describe: "reading a notes",
    handler: function(){
        console.log("reading a new notes!!!")
    }
})
console.log(yargs.argv)