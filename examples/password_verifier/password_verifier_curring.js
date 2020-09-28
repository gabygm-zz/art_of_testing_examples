const _ = require('lodash')

const verifyPassword = _.curry((rules, logger, input) => {
    const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);
    
    console.log('here')
    console.log(failed)
    console.log(failed.length)
    if(failed.length === 0) {
        logger.info('PASSED');
        return true;
    }
    logger.info('FAIL');
    return false;
})

module.exports = {
    verifyPassword
}
