const { inc, getCount } = require('./myModule');

inc();
inc();
inc();

console.log(`The count is ${getCount()}.`);
