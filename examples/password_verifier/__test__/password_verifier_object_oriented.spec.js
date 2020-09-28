
const {PasswordVerifier} = require('../password_verifier_object_oriented')

describe('password verifier', () => {
    it('should logger with PASS when rules are valid', () => {
        let logged = ''
        const mockLog = {info: (text) => (logged = text)};
        const verifierPasswork = new PasswordVerifier([], mockLog)
        verifierPasswork.verify('anything');
        expect(logged).toMatch(/PASSED/)
    })
})
