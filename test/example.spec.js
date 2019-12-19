import { signInUserEmail } from '../src/model/auth-user.js';

describe('test to  signInUserEmail function', () => {
  it('debería ser una función', () => {
    expect(typeof signInUserEmail).toBe('function');
  });
});
