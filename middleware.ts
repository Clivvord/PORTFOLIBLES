import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
const toRegex = require('path-to-regexp');

const pathTemplaten= '/users/:usersId';
const regex = toRegex(pathTemplate);

console.log(regex.exec('/users/123')); // [ '/users/123', '123' ]