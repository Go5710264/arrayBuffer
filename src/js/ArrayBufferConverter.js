export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
  }

  load(buff) {
    this.data = JSON.parse(buff);
    return this.data;
  }

  toString() {
    const bufView = new Uint16Array(this.data);
    const arrayData = [];
    for (let i = 0; i < bufView.length; i += 1) {
      arrayData.push(String.fromCharCode(bufView[i]));
    }
    this.load(arrayData.join(''));
    return arrayData.join('');
  }
}
