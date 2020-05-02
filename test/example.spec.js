import { signUp } from '../Model/firebase.js';

describe('eMail', () => {
    it('debería ser una función', () => {
        expect(typeof signUp).toBe(true);
    });
    it('deberia ser un correo', () => {
        expect(correo('brenda@hotmail.com')).toBe(true);
    })
});