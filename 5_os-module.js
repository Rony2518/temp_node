const os = require('os');

console.log("Hello World!", os.hostname());
//user Info
console.log(os.userInfo());
//uptime
console.log(`${os.uptime()} Seconds`);

const CurrentOs = {
    name:os.type(),
    relese:os.release(),
    version:os.version(),
    platform:os.platform(),
    arch:os.arch(),
    free_memmory:os.freemem(),
    total_memmory:os.totalmem(),
}

console.log(CurrentOs);