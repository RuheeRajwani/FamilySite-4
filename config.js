module.exports = {
    isUsingDB() {
        return useDb;
    }
}

const argv = require('yargs').argv;
let dbOn = argv.db || 'on';
let useDb = true;
if (dbOn == 'off')
    useDb = false;
console.log("useDb: " + useDb)
