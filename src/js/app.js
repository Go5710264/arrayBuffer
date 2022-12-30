import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const arrayBuf = new ArrayBufferConverter(getBuffer()).toString();

console.log(new ArrayBufferConverter().load(arrayBuf));
