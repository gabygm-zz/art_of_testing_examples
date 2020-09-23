const {verifyPassword} = require('../password_verifier')

describe('password verifier', () => {
    it('should return true and looger when rules are valid', () => {
        let logger = ''
        const mockLoger = {
            info: (text) => {
                logger = text;
            }
        }
        verifyPassword('anything', [], mockLoger);
        console.log(logger)

        expect(logger).toMatch(/PASSED/);
    })
})
