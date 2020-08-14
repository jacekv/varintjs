A small varint implementation based on the description given here [unsigned-varint](https://github.com/multiformats/unsigned-varint)

# Install 
```
npm i varintjs
```

# How to use
If you want to encode an int to a varint, this is what you have to do:
```javascript
const varint = require('varintjs');

const num = 300;
const encodedNum = varint.encode(num) // [172, 2]
const decodedNum = varint.decode(encodedNum) // 300
```

# Test
```
npm test
```