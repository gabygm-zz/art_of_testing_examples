const log = require('./complicated_logger');

const verifyPassword = (input, rules, logger) => {
    const failed = rules.map(rule => rule(input))
    .filter(result => result === false);
    console.log(failed)
    console.log(failed.count)
    if (failed.length === 0) {
        logger.info('PASSED');
        return true;
    }

    logger.info('FAIL');
    return false;
}  
module.exports = {verifyPassword}

