const varint = require('../varint.js');
const assert = require('assert');

describe('Varint', function () {
  describe('Encoding', function () {
    it('Encoding 1 should return [1] ', function () {
        assert.deepEqual(varint.encode(1), [1]);
    });

    it('Encoding 127 should return [127] ', function () {
        assert.deepEqual(varint.encode(127), [127]);
    });

    it('Encoding 128 should return [128, 1] ', function () {
        assert.deepEqual(varint.encode(128), [128, 1]);
    });

    it('Encoding 255 should return [255, 1] ', function () {
        assert.deepEqual(varint.encode(255), [255, 1]);
    });

    it('Encoding 300 should return [172, 2] ', function () {
        assert.deepEqual(varint.encode(300), [172, 2]);
    });

    it('Encoding 16384 should return [128, 128, 1] ', function () {
        assert.deepEqual(varint.encode(16384), [128, 128, 1]);
    });
  });

  describe('Decoding', function () {
    it('Decoding [1] should return 1 ', function () {
        assert.deepEqual(varint.decode([1]), 1);
    });

    it('Decoding [127] should return [127] ', function () {
        assert.deepEqual(varint.encode(127), [127]);
    });

    it('Decoding [128, 1] should return 128 ', function () {
        assert.deepEqual(varint.decode([128, 1]), 128);
    });

    it('Decoding [255, 1] should return 255', function () {
        assert.deepEqual(varint.decode([255, 1]), 255);
    });

    it('Decoding [172, 2] should return 300', function () {
        assert.deepEqual(varint.decode([172, 2]), 300);
    });

    it('Decoding [128, 128, 1] should return 16384 ', function () {
        assert.deepEqual(varint.decode([128, 128, 1]), 16384);
    });
  });
});
