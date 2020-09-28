const {verifyPassword} = require('../password_verifier_curring')

describe('password verifier', () => {
    it('should logger with PASS when rules are valid', () => {
        let logged = ''
        const mockLog = {info: (text) => (logged = text)};
        const injectedVerify = verifyPassword([], mockLog)
        injectedVerify("anything");
        expect(logged).toMatch(/PASSED/)
    })
})
