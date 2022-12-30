import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('get object', () => {
  const arrayBuf = new ArrayBufferConverter(getBuffer()).toString();
  const receivedObject = {
    data: {
      user: {
        id: 1,
        name: 'Hitman',
        level: 10,
      },
    },
  };
  expect(new ArrayBufferConverter().load(arrayBuf)).toEqual(receivedObject);
});

test('get json object', () => {
  expect(new ArrayBufferConverter(getBuffer()).toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
