const MSB = 0x80;
const REST = 0x7F;

function encode(num, outIn) {
    const out = outIn || [];
    while(num > REST) {
        out.push((num & 0xFF) | MSB);
        num >>>= 7
    }
    out.push(num);
    return out;
}

function decode(varint) {
    let result = 0;
    let pos = 0;
    varint.forEach(encoded => {
        result += (encoded & REST) << (7 * pos);
        pos += 1;
    });
    return result;
}

three = encode(300);
console.log(decode(three));
six = encode(16384);
console.log(decode(six));