function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => { // input = data
      const buffer = new ArrayBuffer(data.length * 2); // Uint8Contents
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i); // преобразование в двоичный код
  
      }
      return buffer;
    })(data);
  }
  
  class ArrayBufferConverter {
    constructor (data) {
      this.data = data;
    }
  
    load(buffer) {
      // метод из вопроса
    }
  
    toString() {
      const bufView = new Uint16Array(this.data);
      const arrayData = [];
      for(let i = 0; i < bufView.length; i +=1) {
        arrayData.push(String.fromCharCode(bufView[i]))
      }
      return arrayData.join('');
    }  
  }
  
  const arrayBuf = new ArrayBufferConverter(getBuffer());
  console.log(arrayBuf.toString())
  