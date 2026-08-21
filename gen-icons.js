// Simple PNG generator without external dependencies
// Generates a solid-color square PNG with text
const fs = require('fs');
const zlib = require('zlib');

function createSimplePNG(size, bgColor, label) {
  // bgColor: {r, g, b}
  // Create RGBA pixel data
  const channels = 4;
  const rowData = Buffer.alloc(1 + size * channels); // 1 filter byte + pixels
  const imageData = Buffer.alloc(size * (1 + size * channels));
  
  for (let y = 0; y < size; y++) {
    const row = imageData.slice(y * (1 + size * channels), (y + 1) * (1 + size * channels));
    row[0] = 0; // filter byte (none)
    for (let x = 0; x < size; x++) {
      const offset = 1 + x * channels;
      // Check if in rounded corners (simple circle check)
      const cx = Math.abs(x - size / 2);
      const cy = Math.abs(y - size / 2);
      const radius = size * 0.22;
      const inCorner = cx > size / 2 - radius && cy > size / 2 - radius;
      const dist = Math.sqrt(Math.pow(cx - (size / 2 - radius), 2) + Math.pow(cy - (size / 2 - radius), 2));
      
      if (inCorner && dist > radius) {
        // Transparent corner
        row[offset] = 0; row[offset+1] = 0; row[offset+2] = 0; row[offset+3] = 0;
      } else {
        row[offset] = bgColor.r; row[offset+1] = bgColor.g; row[offset+2] = bgColor.b; row[offset+3] = 255;
      }
    }
  }
  
  // PNG header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  
  const crc32 = (buf, init = 0xffffffff) => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[i] = c;
    }
    let crc = init;
    for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  };
  
  const makeChunk = (type, data) => {
    const typeBytes = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const crcData = Buffer.concat([typeBytes, data]);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(crcData), 0);
    return Buffer.concat([lenBuf, typeBytes, data, crcBuf]);
  };
  
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const compressed = zlib.deflateSync(imageData, { level: 6 });
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const orange = { r: 0xF1, g: 0x55, b: 0x33 };

const png192 = createSimplePNG(192, orange, 'CE');
fs.writeFileSync('/Users/aditya/Desktop/Code/cabeazy-website/public/icons/icon-192.png', png192);

const png512 = createSimplePNG(512, orange, 'CE');
fs.writeFileSync('/Users/aditya/Desktop/Code/cabeazy-website/public/icons/icon-512.png', png512);

// Also create apple-icon
const pngApple = createSimplePNG(180, orange, 'CE');
fs.writeFileSync('/Users/aditya/Desktop/Code/cabeazy-website/public/icons/apple-icon.png', pngApple);

console.log('PNG icons created successfully');
