import getBuffer from '../arraybuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('check ArrayBufferConverter class to convert from Uint16Array', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const bufferConvert = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConvert.load(buffer);
  expect(bufferConvert.toString()).toEqual(data);
});
