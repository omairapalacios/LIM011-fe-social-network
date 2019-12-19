import { signInUserEmail } from '../src/model/auth-user.js';


const firebasemock = require('firebase-mock');

const mockAuth = new firebasemock.MockFirebase();
mockAuth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

describe('Sign In User', () => {
  it('Debería poder iniciar sesión', () => signInUserEmail('omairapalacios@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('omairapalacios@gmail.com');
    }));
});
