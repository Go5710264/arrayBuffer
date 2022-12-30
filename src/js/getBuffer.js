export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => { // input = data
    const buffer = new ArrayBuffer(data.length * 2); // Uint8Contents
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i); // преобразование в двоичный код
    }
    return buffer;
  })(data);
}
