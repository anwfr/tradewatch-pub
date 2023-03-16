// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 10:19:36 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "02e1b796fa21d55bb000":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
// OP_RETURN {data}
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const OPS = bscript.OPS;
function check(script) {
  const buffer = bscript.compile(script);
  return buffer.length > 1 && buffer[0] === OPS.OP_RETURN;
}
exports.check = check;
check.toJSON = () => {
  return 'null data output';
};
const output = { check };
exports.output = output;


/***/ }),

/***/ "08030d8a45f1cae3f1b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
function decode(buffer, maxLength, minimal) {
  maxLength = maxLength || 4;
  minimal = minimal === undefined ? true : minimal;
  const length = buffer.length;
  if (length === 0) return 0;
  if (length > maxLength) throw new TypeError('Script number overflow');
  if (minimal) {
    if ((buffer[length - 1] & 0x7f) === 0) {
      if (length <= 1 || (buffer[length - 2] & 0x80) === 0)
        throw new Error('Non-minimally encoded script number');
    }
  }
  // 40-bit
  if (length === 5) {
    const a = buffer.readUInt32LE(0);
    const b = buffer.readUInt8(4);
    if (b & 0x80) return -((b & ~0x80) * 0x100000000 + a);
    return b * 0x100000000 + a;
  }
  // 32-bit / 24-bit / 16-bit / 8-bit
  let result = 0;
  for (let i = 0; i < length; ++i) {
    result |= buffer[i] << (8 * i);
  }
  if (buffer[length - 1] & 0x80)
    return -(result & ~(0x80 << (8 * (length - 1))));
  return result;
}
exports.decode = decode;
function scriptNumSize(i) {
  return i > 0x7fffffff
    ? 5
    : i > 0x7fffff
    ? 4
    : i > 0x7fff
    ? 3
    : i > 0x7f
    ? 2
    : i > 0x00
    ? 1
    : 0;
}
function encode(_number) {
  let value = Math.abs(_number);
  const size = scriptNumSize(value);
  const buffer = Buffer.allocUnsafe(size);
  const negative = _number < 0;
  for (let i = 0; i < size; ++i) {
    buffer.writeUInt8(value & 0xff, i);
    value >>= 8;
  }
  if (buffer[size - 1] & 0x80) {
    buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
  } else if (negative) {
    buffer[size - 1] |= 0x80;
  }
  return buffer;
}
exports.encode = encode;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "12fc7dc108ee22ef249d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("30cac4907ab3e1f14fb6");
exports.input = input;
const output = __webpack_require__("79f3a97e0c3a3c140749");
exports.output = output;


/***/ }),

/***/ "20a0049eaa138cdc1fa2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const multisig = __webpack_require__("989ba8f7d369b0d9568d");
const nullData = __webpack_require__("02e1b796fa21d55bb000");
const pubKey = __webpack_require__("8a06de8a113371251a5d");
const pubKeyHash = __webpack_require__("12fc7dc108ee22ef249d");
const scriptHash = __webpack_require__("be8a53eb8cb69afa8539");
const witnessCommitment = __webpack_require__("a7f571aaad544c0a1b11");
const witnessPubKeyHash = __webpack_require__("659a4e58bd908ef31801");
const witnessScriptHash = __webpack_require__("647d842e21953e5606d8");
const types = {
  P2MS: 'multisig',
  NONSTANDARD: 'nonstandard',
  NULLDATA: 'nulldata',
  P2PK: 'pubkey',
  P2PKH: 'pubkeyhash',
  P2SH: 'scripthash',
  P2WPKH: 'witnesspubkeyhash',
  P2WSH: 'witnessscripthash',
  WITNESS_COMMITMENT: 'witnesscommitment',
};
exports.types = types;
function classifyOutput(script) {
  if (witnessPubKeyHash.output.check(script)) return types.P2WPKH;
  if (witnessScriptHash.output.check(script)) return types.P2WSH;
  if (pubKeyHash.output.check(script)) return types.P2PKH;
  if (scriptHash.output.check(script)) return types.P2SH;
  // XXX: optimization, below functions .decompile before use
  const chunks = script_1.decompile(script);
  if (!chunks) throw new TypeError('Invalid script');
  if (multisig.output.check(chunks)) return types.P2MS;
  if (pubKey.output.check(chunks)) return types.P2PK;
  if (witnessCommitment.output.check(chunks)) return types.WITNESS_COMMITMENT;
  if (nullData.output.check(chunks)) return types.NULLDATA;
  return types.NONSTANDARD;
}
exports.output = classifyOutput;
function classifyInput(script, allowIncomplete) {
  // XXX: optimization, below functions .decompile before use
  const chunks = script_1.decompile(script);
  if (!chunks) throw new TypeError('Invalid script');
  if (pubKeyHash.input.check(chunks)) return types.P2PKH;
  if (scriptHash.input.check(chunks, allowIncomplete)) return types.P2SH;
  if (multisig.input.check(chunks, allowIncomplete)) return types.P2MS;
  if (pubKey.input.check(chunks)) return types.P2PK;
  return types.NONSTANDARD;
}
exports.input = classifyInput;
function classifyWitness(script, allowIncomplete) {
  // XXX: optimization, below functions .decompile before use
  const chunks = script_1.decompile(script);
  if (!chunks) throw new TypeError('Invalid script');
  if (witnessPubKeyHash.input.check(chunks)) return types.P2WPKH;
  if (witnessScriptHash.input.check(chunks, allowIncomplete))
    return types.P2WSH;
  return types.NONSTANDARD;
}
exports.witness = classifyWitness;


/***/ }),

/***/ "247180d06ad5f0d3ae5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const networks = __webpack_require__("928311dc04c6002b08e8");
const payments = __webpack_require__("8181d1a037f7ee7c0bf5");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const bech32 = __webpack_require__("eb43aa378b3d50eaa0db");
const bs58check = __webpack_require__("53ead306b62e35ae6518");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
function fromBase58Check(address) {
  const payload = bs58check.decode(address);
  // TODO: 4.0.0, move to "toOutputScript"
  if (payload.length < 21) throw new TypeError(address + ' is too short');
  if (payload.length > 21) throw new TypeError(address + ' is too long');
  const version = payload.readUInt8(0);
  const hash = payload.slice(1);
  return { version, hash };
}
exports.fromBase58Check = fromBase58Check;
function fromBech32(address) {
  const result = bech32.decode(address);
  const data = bech32.fromWords(result.words.slice(1));
  return {
    version: result.words[0],
    prefix: result.prefix,
    data: Buffer.from(data),
  };
}
exports.fromBech32 = fromBech32;
function toBase58Check(hash, version) {
  typeforce(types.tuple(types.Hash160bit, types.UInt8), arguments);
  const payload = Buffer.allocUnsafe(21);
  payload.writeUInt8(version, 0);
  hash.copy(payload, 1);
  return bs58check.encode(payload);
}
exports.toBase58Check = toBase58Check;
function toBech32(data, version, prefix) {
  const words = bech32.toWords(data);
  words.unshift(version);
  return bech32.encode(prefix, words);
}
exports.toBech32 = toBech32;
function fromOutputScript(output, network) {
  // TODO: Network
  network = network || networks.bitcoin;
  try {
    return payments.p2pkh({ output, network }).address;
  } catch (e) {}
  try {
    return payments.p2sh({ output, network }).address;
  } catch (e) {}
  try {
    return payments.p2wpkh({ output, network }).address;
  } catch (e) {}
  try {
    return payments.p2wsh({ output, network }).address;
  } catch (e) {}
  throw new Error(bscript.toASM(output) + ' has no matching Address');
}
exports.fromOutputScript = fromOutputScript;
function toOutputScript(address, network) {
  network = network || networks.bitcoin;
  let decodeBase58;
  let decodeBech32;
  try {
    decodeBase58 = fromBase58Check(address);
  } catch (e) {}
  if (decodeBase58) {
    if (decodeBase58.version === network.pubKeyHash)
      return payments.p2pkh({ hash: decodeBase58.hash }).output;
    if (decodeBase58.version === network.scriptHash)
      return payments.p2sh({ hash: decodeBase58.hash }).output;
  } else {
    try {
      decodeBech32 = fromBech32(address);
    } catch (e) {}
    if (decodeBech32) {
      if (decodeBech32.prefix !== network.bech32)
        throw new Error(address + ' has an invalid prefix');
      if (decodeBech32.version === 0) {
        if (decodeBech32.data.length === 20)
          return payments.p2wpkh({ hash: decodeBech32.data }).output;
        if (decodeBech32.data.length === 32)
          return payments.p2wsh({ hash: decodeBech32.data }).output;
      }
    }
  }
  throw new Error(address + ' has no matching Script');
}
exports.toOutputScript = toOutputScript;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "2d6e5edc7083b0a69b78":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const createHash = __webpack_require__("51c14598f89e3eb6cfa8");
function ripemd160(buffer) {
  try {
    return createHash('rmd160')
      .update(buffer)
      .digest();
  } catch (err) {
    return createHash('ripemd160')
      .update(buffer)
      .digest();
  }
}
exports.ripemd160 = ripemd160;
function sha1(buffer) {
  return createHash('sha1')
    .update(buffer)
    .digest();
}
exports.sha1 = sha1;
function sha256(buffer) {
  return createHash('sha256')
    .update(buffer)
    .digest();
}
exports.sha256 = sha256;
function hash160(buffer) {
  return ripemd160(sha256(buffer));
}
exports.hash160 = hash160;
function hash256(buffer) {
  return sha256(sha256(buffer));
}
exports.hash256 = hash256;


/***/ }),

/***/ "30cac4907ab3e1f14fb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// {signature} {pubKey}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const chunks = bscript.decompile(script);
  return (
    chunks.length === 2 &&
    bscript.isCanonicalScriptSignature(chunks[0]) &&
    bscript.isCanonicalPubKey(chunks[1])
  );
}
exports.check = check;
check.toJSON = () => {
  return 'pubKeyHash input';
};


/***/ }),

/***/ "3b58bc5d4fd32db48dd3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const UINT31_MAX = Math.pow(2, 31) - 1;
function UInt31(value) {
  return typeforce.UInt32(value) && value <= UINT31_MAX;
}
exports.UInt31 = UInt31;
function BIP32Path(value) {
  return typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
}
exports.BIP32Path = BIP32Path;
BIP32Path.toJSON = () => {
  return 'BIP32 derivation path';
};
function Signer(obj) {
  return (
    (typeforce.Buffer(obj.publicKey) ||
      typeof obj.getPublicKey === 'function') &&
    typeof obj.sign === 'function'
  );
}
exports.Signer = Signer;
const SATOSHI_MAX = 21 * 1e14;
function Satoshi(value) {
  return typeforce.UInt53(value) && value <= SATOSHI_MAX;
}
exports.Satoshi = Satoshi;
// external dependent types
exports.ECPoint = typeforce.quacksLike('Point');
// exposed, external API
exports.Network = typeforce.compile({
  messagePrefix: typeforce.oneOf(typeforce.Buffer, typeforce.String),
  bip32: {
    public: typeforce.UInt32,
    private: typeforce.UInt32,
  },
  pubKeyHash: typeforce.UInt8,
  scriptHash: typeforce.UInt8,
  wif: typeforce.UInt8,
});
exports.Buffer256bit = typeforce.BufferN(32);
exports.Hash160bit = typeforce.BufferN(20);
exports.Hash256bit = typeforce.BufferN(32);
exports.Number = typeforce.Number; // tslint:disable-line variable-name
exports.Array = typeforce.Array;
exports.Boolean = typeforce.Boolean; // tslint:disable-line variable-name
exports.String = typeforce.String; // tslint:disable-line variable-name
exports.Buffer = typeforce.Buffer;
exports.Hex = typeforce.Hex;
exports.maybe = typeforce.maybe;
exports.tuple = typeforce.tuple;
exports.UInt8 = typeforce.UInt8;
exports.UInt32 = typeforce.UInt32;
exports.Function = typeforce.Function;
exports.BufferN = typeforce.BufferN;
exports.Null = typeforce.Null;
exports.oneOf = typeforce.oneOf;


/***/ }),

/***/ "3ea3f4f10c55dd85e691":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
const bs58check = __webpack_require__("53ead306b62e35ae6518");
function stacksEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((x, i) => {
    return x.equals(b[i]);
  });
}
// input: [redeemScriptSig ...] {redeemScript}
// witness: <?>
// output: OP_HASH160 {hash160(redeemScript)} OP_EQUAL
function p2sh(a, opts) {
  if (!a.address && !a.hash && !a.output && !a.redeem && !a.input)
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      network: typef.maybe(typef.Object),
      address: typef.maybe(typef.String),
      hash: typef.maybe(typef.BufferN(20)),
      output: typef.maybe(typef.BufferN(23)),
      redeem: typef.maybe({
        network: typef.maybe(typef.Object),
        output: typef.maybe(typef.Buffer),
        input: typef.maybe(typef.Buffer),
        witness: typef.maybe(typef.arrayOf(typef.Buffer)),
      }),
      input: typef.maybe(typef.Buffer),
      witness: typef.maybe(typef.arrayOf(typef.Buffer)),
    },
    a,
  );
  let network = a.network;
  if (!network) {
    network = (a.redeem && a.redeem.network) || networks_1.bitcoin;
  }
  const o = { network };
  const _address = lazy.value(() => {
    const payload = bs58check.decode(a.address);
    const version = payload.readUInt8(0);
    const hash = payload.slice(1);
    return { version, hash };
  });
  const _chunks = lazy.value(() => {
    return bscript.decompile(a.input);
  });
  const _redeem = lazy.value(() => {
    const chunks = _chunks();
    return {
      network,
      output: chunks[chunks.length - 1],
      input: bscript.compile(chunks.slice(0, -1)),
      witness: a.witness || [],
    };
  });
  // output dependents
  lazy.prop(o, 'address', () => {
    if (!o.hash) return;
    const payload = Buffer.allocUnsafe(21);
    payload.writeUInt8(o.network.scriptHash, 0);
    o.hash.copy(payload, 1);
    return bs58check.encode(payload);
  });
  lazy.prop(o, 'hash', () => {
    // in order of least effort
    if (a.output) return a.output.slice(2, 22);
    if (a.address) return _address().hash;
    if (o.redeem && o.redeem.output) return bcrypto.hash160(o.redeem.output);
  });
  lazy.prop(o, 'output', () => {
    if (!o.hash) return;
    return bscript.compile([OPS.OP_HASH160, o.hash, OPS.OP_EQUAL]);
  });
  // input dependents
  lazy.prop(o, 'redeem', () => {
    if (!a.input) return;
    return _redeem();
  });
  lazy.prop(o, 'input', () => {
    if (!a.redeem || !a.redeem.input || !a.redeem.output) return;
    return bscript.compile(
      [].concat(bscript.decompile(a.redeem.input), a.redeem.output),
    );
  });
  lazy.prop(o, 'witness', () => {
    if (o.redeem && o.redeem.witness) return o.redeem.witness;
    if (o.input) return [];
  });
  lazy.prop(o, 'name', () => {
    const nameParts = ['p2sh'];
    if (o.redeem !== undefined) nameParts.push(o.redeem.name);
    return nameParts.join('-');
  });
  if (opts.validate) {
    let hash = Buffer.from([]);
    if (a.address) {
      if (_address().version !== network.scriptHash)
        throw new TypeError('Invalid version or Network mismatch');
      if (_address().hash.length !== 20) throw new TypeError('Invalid address');
      hash = _address().hash;
    }
    if (a.hash) {
      if (hash.length > 0 && !hash.equals(a.hash))
        throw new TypeError('Hash mismatch');
      else hash = a.hash;
    }
    if (a.output) {
      if (
        a.output.length !== 23 ||
        a.output[0] !== OPS.OP_HASH160 ||
        a.output[1] !== 0x14 ||
        a.output[22] !== OPS.OP_EQUAL
      )
        throw new TypeError('Output is invalid');
      const hash2 = a.output.slice(2, 22);
      if (hash.length > 0 && !hash.equals(hash2))
        throw new TypeError('Hash mismatch');
      else hash = hash2;
    }
    // inlined to prevent 'no-inner-declarations' failing
    const checkRedeem = redeem => {
      // is the redeem output empty/invalid?
      if (redeem.output) {
        const decompile = bscript.decompile(redeem.output);
        if (!decompile || decompile.length < 1)
          throw new TypeError('Redeem.output too short');
        // match hash against other sources
        const hash2 = bcrypto.hash160(redeem.output);
        if (hash.length > 0 && !hash.equals(hash2))
          throw new TypeError('Hash mismatch');
        else hash = hash2;
      }
      if (redeem.input) {
        const hasInput = redeem.input.length > 0;
        const hasWitness = redeem.witness && redeem.witness.length > 0;
        if (!hasInput && !hasWitness) throw new TypeError('Empty input');
        if (hasInput && hasWitness)
          throw new TypeError('Input and witness provided');
        if (hasInput) {
          const richunks = bscript.decompile(redeem.input);
          if (!bscript.isPushOnly(richunks))
            throw new TypeError('Non push-only scriptSig');
        }
      }
    };
    if (a.input) {
      const chunks = _chunks();
      if (!chunks || chunks.length < 1) throw new TypeError('Input too short');
      if (!Buffer.isBuffer(_redeem().output))
        throw new TypeError('Input is invalid');
      checkRedeem(_redeem());
    }
    if (a.redeem) {
      if (a.redeem.network && a.redeem.network !== network)
        throw new TypeError('Network mismatch');
      if (a.input) {
        const redeem = _redeem();
        if (a.redeem.output && !a.redeem.output.equals(redeem.output))
          throw new TypeError('Redeem.output mismatch');
        if (a.redeem.input && !a.redeem.input.equals(redeem.input))
          throw new TypeError('Redeem.input mismatch');
      }
      checkRedeem(a.redeem);
    }
    if (a.witness) {
      if (
        a.redeem &&
        a.redeem.witness &&
        !stacksEqual(a.redeem.witness, a.witness)
      )
        throw new TypeError('Witness and redeem.witness mismatch');
    }
  }
  return Object.assign(o, a);
}
exports.p2sh = p2sh;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "53a0834872f8472c4ada":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// <scriptSig> {serialized scriptPubKey script}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const p2ms = __webpack_require__("989ba8f7d369b0d9568d");
const p2pk = __webpack_require__("8a06de8a113371251a5d");
const p2pkh = __webpack_require__("12fc7dc108ee22ef249d");
const p2wpkho = __webpack_require__("8b0c8f6bc1e2b4530d3c");
const p2wsho = __webpack_require__("ebf61b4027142c40c33c");
function check(script, allowIncomplete) {
  const chunks = bscript.decompile(script);
  if (chunks.length < 1) return false;
  const lastChunk = chunks[chunks.length - 1];
  if (!Buffer.isBuffer(lastChunk)) return false;
  const scriptSigChunks = bscript.decompile(
    bscript.compile(chunks.slice(0, -1)),
  );
  const redeemScriptChunks = bscript.decompile(lastChunk);
  // is redeemScript a valid script?
  if (!redeemScriptChunks) return false;
  // is redeemScriptSig push only?
  if (!bscript.isPushOnly(scriptSigChunks)) return false;
  // is witness?
  if (chunks.length === 1) {
    return (
      p2wsho.check(redeemScriptChunks) || p2wpkho.check(redeemScriptChunks)
    );
  }
  // match types
  if (
    p2pkh.input.check(scriptSigChunks) &&
    p2pkh.output.check(redeemScriptChunks)
  )
    return true;
  if (
    p2ms.input.check(scriptSigChunks, allowIncomplete) &&
    p2ms.output.check(redeemScriptChunks)
  )
    return true;
  if (
    p2pk.input.check(scriptSigChunks) &&
    p2pk.output.check(redeemScriptChunks)
  )
    return true;
  return false;
}
exports.check = check;
check.toJSON = () => {
  return 'scriptHash input';
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "571d362cc5f59a8db748":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// {signature} {pubKey}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function isCompressedCanonicalPubKey(pubKey) {
  return bscript.isCanonicalPubKey(pubKey) && pubKey.length === 33;
}
function check(script) {
  const chunks = bscript.decompile(script);
  return (
    chunks.length === 2 &&
    bscript.isCanonicalScriptSignature(chunks[0]) &&
    isCompressedCanonicalPubKey(chunks[1])
  );
}
exports.check = check;
check.toJSON = () => {
  return 'witnessPubKeyHash input';
};


/***/ }),

/***/ "5c1198e48f2c6e65e14b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bufferutils_1 = __webpack_require__("beaf39890650aa5299f8");
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const transaction_1 = __webpack_require__("f49d9113a79536d617f0");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const fastMerkleRoot = __webpack_require__("7b47a420ba8bead20f4a");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const varuint = __webpack_require__("4a25c0f2b2142de6fa09");
const errorMerkleNoTxes = new TypeError(
  'Cannot compute merkle root for zero transactions',
);
const errorWitnessNotSegwit = new TypeError(
  'Cannot compute witness commit for non-segwit block',
);
class Block {
  constructor() {
    this.version = 1;
    this.prevHash = undefined;
    this.merkleRoot = undefined;
    this.timestamp = 0;
    this.witnessCommit = undefined;
    this.bits = 0;
    this.nonce = 0;
    this.transactions = undefined;
  }
  static fromBuffer(buffer) {
    if (buffer.length < 80) throw new Error('Buffer too small (< 80 bytes)');
    const bufferReader = new bufferutils_1.BufferReader(buffer);
    const block = new Block();
    block.version = bufferReader.readInt32();
    block.prevHash = bufferReader.readSlice(32);
    block.merkleRoot = bufferReader.readSlice(32);
    block.timestamp = bufferReader.readUInt32();
    block.bits = bufferReader.readUInt32();
    block.nonce = bufferReader.readUInt32();
    if (buffer.length === 80) return block;
    const readTransaction = () => {
      const tx = transaction_1.Transaction.fromBuffer(
        bufferReader.buffer.slice(bufferReader.offset),
        true,
      );
      bufferReader.offset += tx.byteLength();
      return tx;
    };
    const nTransactions = bufferReader.readVarInt();
    block.transactions = [];
    for (let i = 0; i < nTransactions; ++i) {
      const tx = readTransaction();
      block.transactions.push(tx);
    }
    const witnessCommit = block.getWitnessCommit();
    // This Block contains a witness commit
    if (witnessCommit) block.witnessCommit = witnessCommit;
    return block;
  }
  static fromHex(hex) {
    return Block.fromBuffer(Buffer.from(hex, 'hex'));
  }
  static calculateTarget(bits) {
    const exponent = ((bits & 0xff000000) >> 24) - 3;
    const mantissa = bits & 0x007fffff;
    const target = Buffer.alloc(32, 0);
    target.writeUIntBE(mantissa, 29 - exponent, 3);
    return target;
  }
  static calculateMerkleRoot(transactions, forWitness) {
    typeforce([{ getHash: types.Function }], transactions);
    if (transactions.length === 0) throw errorMerkleNoTxes;
    if (forWitness && !txesHaveWitnessCommit(transactions))
      throw errorWitnessNotSegwit;
    const hashes = transactions.map(transaction =>
      transaction.getHash(forWitness),
    );
    const rootHash = fastMerkleRoot(hashes, bcrypto.hash256);
    return forWitness
      ? bcrypto.hash256(
          Buffer.concat([rootHash, transactions[0].ins[0].witness[0]]),
        )
      : rootHash;
  }
  getWitnessCommit() {
    if (!txesHaveWitnessCommit(this.transactions)) return null;
    // The merkle root for the witness data is in an OP_RETURN output.
    // There is no rule for the index of the output, so use filter to find it.
    // The root is prepended with 0xaa21a9ed so check for 0x6a24aa21a9ed
    // If multiple commits are found, the output with highest index is assumed.
    const witnessCommits = this.transactions[0].outs
      .filter(out =>
        out.script.slice(0, 6).equals(Buffer.from('6a24aa21a9ed', 'hex')),
      )
      .map(out => out.script.slice(6, 38));
    if (witnessCommits.length === 0) return null;
    // Use the commit with the highest output (should only be one though)
    const result = witnessCommits[witnessCommits.length - 1];
    if (!(result instanceof Buffer && result.length === 32)) return null;
    return result;
  }
  hasWitnessCommit() {
    if (
      this.witnessCommit instanceof Buffer &&
      this.witnessCommit.length === 32
    )
      return true;
    if (this.getWitnessCommit() !== null) return true;
    return false;
  }
  hasWitness() {
    return anyTxHasWitness(this.transactions);
  }
  weight() {
    const base = this.byteLength(false, false);
    const total = this.byteLength(false, true);
    return base * 3 + total;
  }
  byteLength(headersOnly, allowWitness = true) {
    if (headersOnly || !this.transactions) return 80;
    return (
      80 +
      varuint.encodingLength(this.transactions.length) +
      this.transactions.reduce((a, x) => a + x.byteLength(allowWitness), 0)
    );
  }
  getHash() {
    return bcrypto.hash256(this.toBuffer(true));
  }
  getId() {
    return bufferutils_1.reverseBuffer(this.getHash()).toString('hex');
  }
  getUTCDate() {
    const date = new Date(0); // epoch
    date.setUTCSeconds(this.timestamp);
    return date;
  }
  // TODO: buffer, offset compatibility
  toBuffer(headersOnly) {
    const buffer = Buffer.allocUnsafe(this.byteLength(headersOnly));
    const bufferWriter = new bufferutils_1.BufferWriter(buffer);
    bufferWriter.writeInt32(this.version);
    bufferWriter.writeSlice(this.prevHash);
    bufferWriter.writeSlice(this.merkleRoot);
    bufferWriter.writeUInt32(this.timestamp);
    bufferWriter.writeUInt32(this.bits);
    bufferWriter.writeUInt32(this.nonce);
    if (headersOnly || !this.transactions) return buffer;
    varuint.encode(this.transactions.length, buffer, bufferWriter.offset);
    bufferWriter.offset += varuint.encode.bytes;
    this.transactions.forEach(tx => {
      const txSize = tx.byteLength(); // TODO: extract from toBuffer?
      tx.toBuffer(buffer, bufferWriter.offset);
      bufferWriter.offset += txSize;
    });
    return buffer;
  }
  toHex(headersOnly) {
    return this.toBuffer(headersOnly).toString('hex');
  }
  checkTxRoots() {
    // If the Block has segwit transactions but no witness commit,
    // there's no way it can be valid, so fail the check.
    const hasWitnessCommit = this.hasWitnessCommit();
    if (!hasWitnessCommit && this.hasWitness()) return false;
    return (
      this.__checkMerkleRoot() &&
      (hasWitnessCommit ? this.__checkWitnessCommit() : true)
    );
  }
  checkProofOfWork() {
    const hash = bufferutils_1.reverseBuffer(this.getHash());
    const target = Block.calculateTarget(this.bits);
    return hash.compare(target) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw errorMerkleNoTxes;
    const actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(actualMerkleRoot) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw errorMerkleNoTxes;
    if (!this.hasWitnessCommit()) throw errorWitnessNotSegwit;
    const actualWitnessCommit = Block.calculateMerkleRoot(
      this.transactions,
      true,
    );
    return this.witnessCommit.compare(actualWitnessCommit) === 0;
  }
}
exports.Block = Block;
function txesHaveWitnessCommit(transactions) {
  return (
    transactions instanceof Array &&
    transactions[0] &&
    transactions[0].ins &&
    transactions[0].ins instanceof Array &&
    transactions[0].ins[0] &&
    transactions[0].ins[0].witness &&
    transactions[0].ins[0].witness instanceof Array &&
    transactions[0].ins[0].witness.length > 0
  );
}
function anyTxHasWitness(transactions) {
  return (
    transactions instanceof Array &&
    transactions.some(
      tx =>
        typeof tx === 'object' &&
        tx.ins instanceof Array &&
        tx.ins.some(
          input =>
            typeof input === 'object' &&
            input.witness instanceof Array &&
            input.witness.length > 0,
        ),
    )
  );
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "5d9e5db4b273f00a777d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// OP_RETURN {aa21a9ed} {commitment}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const HEADER = Buffer.from('aa21a9ed', 'hex');
function check(script) {
  const buffer = bscript.compile(script);
  return (
    buffer.length > 37 &&
    buffer[0] === script_1.OPS.OP_RETURN &&
    buffer[1] === 0x24 &&
    buffer.slice(2, 6).equals(HEADER)
  );
}
exports.check = check;
check.toJSON = () => {
  return 'Witness commitment output';
};
function encode(commitment) {
  typeforce(types.Hash256bit, commitment);
  const buffer = Buffer.allocUnsafe(36);
  HEADER.copy(buffer, 0);
  commitment.copy(buffer, 4);
  return bscript.compile([script_1.OPS.OP_RETURN, buffer]);
}
exports.encode = encode;
function decode(buffer) {
  typeforce(check, buffer);
  return bscript.decompile(buffer)[1].slice(4, 36);
}
exports.decode = decode;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "5da7ca624d4d72bb8522":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const bip66 = __webpack_require__("78631df91a52183a6424");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const ZERO = Buffer.alloc(1, 0);
function toDER(x) {
  let i = 0;
  while (x[i] === 0) ++i;
  if (i === x.length) return ZERO;
  x = x.slice(i);
  if (x[0] & 0x80) return Buffer.concat([ZERO, x], 1 + x.length);
  return x;
}
function fromDER(x) {
  if (x[0] === 0x00) x = x.slice(1);
  const buffer = Buffer.alloc(32, 0);
  const bstart = Math.max(0, 32 - x.length);
  x.copy(buffer, bstart);
  return buffer;
}
// BIP62: 1 byte hashType flag (only 0x01, 0x02, 0x03, 0x81, 0x82 and 0x83 are allowed)
function decode(buffer) {
  const hashType = buffer.readUInt8(buffer.length - 1);
  const hashTypeMod = hashType & ~0x80;
  if (hashTypeMod <= 0 || hashTypeMod >= 4)
    throw new Error('Invalid hashType ' + hashType);
  const decoded = bip66.decode(buffer.slice(0, -1));
  const r = fromDER(decoded.r);
  const s = fromDER(decoded.s);
  const signature = Buffer.concat([r, s], 64);
  return { signature, hashType };
}
exports.decode = decode;
function encode(signature, hashType) {
  typeforce(
    {
      signature: types.BufferN(64),
      hashType: types.UInt8,
    },
    { signature, hashType },
  );
  const hashTypeMod = hashType & ~0x80;
  if (hashTypeMod <= 0 || hashTypeMod >= 4)
    throw new Error('Invalid hashType ' + hashType);
  const hashTypeBuffer = Buffer.allocUnsafe(1);
  hashTypeBuffer.writeUInt8(hashType, 0);
  const r = toDER(signature.slice(0, 32));
  const s = toDER(signature.slice(32, 64));
  return Buffer.concat([bip66.encode(r, s), hashTypeBuffer]);
}
exports.encode = encode;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "647d842e21953e5606d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("f21d93edd510689eb2ca");
exports.input = input;
const output = __webpack_require__("ebf61b4027142c40c33c");
exports.output = output;


/***/ }),

/***/ "64ac9276262faec88968":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const NETWORKS = __webpack_require__("928311dc04c6002b08e8");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const randomBytes = __webpack_require__("dc10a1e1660f93ecd0a2");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const wif = __webpack_require__("14bbd16eca1d98192741");
const isOptions = typeforce.maybe(
  typeforce.compile({
    compressed: types.maybe(types.Boolean),
    network: types.maybe(types.Network),
  }),
);
class ECPair {
  constructor(__D, __Q, options) {
    this.__D = __D;
    this.__Q = __Q;
    this.lowR = false;
    if (options === undefined) options = {};
    this.compressed =
      options.compressed === undefined ? true : options.compressed;
    this.network = options.network || NETWORKS.bitcoin;
    if (__Q !== undefined) this.__Q = ecc.pointCompress(__Q, this.compressed);
  }
  get privateKey() {
    return this.__D;
  }
  get publicKey() {
    if (!this.__Q) this.__Q = ecc.pointFromScalar(this.__D, this.compressed);
    return this.__Q;
  }
  toWIF() {
    if (!this.__D) throw new Error('Missing private key');
    return wif.encode(this.network.wif, this.__D, this.compressed);
  }
  sign(hash, lowR) {
    if (!this.__D) throw new Error('Missing private key');
    if (lowR === undefined) lowR = this.lowR;
    if (lowR === false) {
      return ecc.sign(hash, this.__D);
    } else {
      let sig = ecc.sign(hash, this.__D);
      const extraData = Buffer.alloc(32, 0);
      let counter = 0;
      // if first try is lowR, skip the loop
      // for second try and on, add extra entropy counting up
      while (sig[0] > 0x7f) {
        counter++;
        extraData.writeUIntLE(counter, 0, 6);
        sig = ecc.signWithEntropy(hash, this.__D, extraData);
      }
      return sig;
    }
  }
  verify(hash, signature) {
    return ecc.verify(hash, this.publicKey, signature);
  }
}
function fromPrivateKey(buffer, options) {
  typeforce(types.Buffer256bit, buffer);
  if (!ecc.isPrivate(buffer))
    throw new TypeError('Private key not in range [1, n)');
  typeforce(isOptions, options);
  return new ECPair(buffer, undefined, options);
}
exports.fromPrivateKey = fromPrivateKey;
function fromPublicKey(buffer, options) {
  typeforce(ecc.isPoint, buffer);
  typeforce(isOptions, options);
  return new ECPair(undefined, buffer, options);
}
exports.fromPublicKey = fromPublicKey;
function fromWIF(wifString, network) {
  const decoded = wif.decode(wifString);
  const version = decoded.version;
  // list of networks?
  if (types.Array(network)) {
    network = network
      .filter(x => {
        return version === x.wif;
      })
      .pop();
    if (!network) throw new Error('Unknown network version');
    // otherwise, assume a network object (or default to bitcoin)
  } else {
    network = network || NETWORKS.bitcoin;
    if (version !== network.wif) throw new Error('Invalid network version');
  }
  return fromPrivateKey(decoded.privateKey, {
    compressed: decoded.compressed,
    network: network,
  });
}
exports.fromWIF = fromWIF;
function makeRandom(options) {
  typeforce(isOptions, options);
  if (options === undefined) options = {};
  const rng = options.rng || randomBytes;
  let d;
  do {
    d = rng(32);
    typeforce(types.Buffer256bit, d);
  } while (!ecc.isPrivate(d));
  return fromPrivateKey(d, options);
}
exports.makeRandom = makeRandom;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "659a4e58bd908ef31801":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("571d362cc5f59a8db748");
exports.input = input;
const output = __webpack_require__("8b0c8f6bc1e2b4530d3c");
exports.output = output;


/***/ }),

/***/ "765e5c44b6dae386e266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// {signature}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const chunks = bscript.decompile(script);
  return chunks.length === 1 && bscript.isCanonicalScriptSignature(chunks[0]);
}
exports.check = check;
check.toJSON = () => {
  return 'pubKey input';
};


/***/ }),

/***/ "79f3a97e0c3a3c140749":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OP_DUP OP_HASH160 {pubKeyHash} OP_EQUALVERIFY OP_CHECKSIG
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const buffer = bscript.compile(script);
  return (
    buffer.length === 25 &&
    buffer[0] === script_1.OPS.OP_DUP &&
    buffer[1] === script_1.OPS.OP_HASH160 &&
    buffer[2] === 0x14 &&
    buffer[23] === script_1.OPS.OP_EQUALVERIFY &&
    buffer[24] === script_1.OPS.OP_CHECKSIG
  );
}
exports.check = check;
check.toJSON = () => {
  return 'pubKeyHash output';
};


/***/ }),

/***/ "8181d1a037f7ee7c0bf5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const embed_1 = __webpack_require__("9bd267f2f681d34bd26d");
exports.embed = embed_1.p2data;
const p2ms_1 = __webpack_require__("9a99dd93893d01caf175");
exports.p2ms = p2ms_1.p2ms;
const p2pk_1 = __webpack_require__("bf66a79114c6132e39fa");
exports.p2pk = p2pk_1.p2pk;
const p2pkh_1 = __webpack_require__("d37f60d760ff0771ffa9");
exports.p2pkh = p2pkh_1.p2pkh;
const p2sh_1 = __webpack_require__("3ea3f4f10c55dd85e691");
exports.p2sh = p2sh_1.p2sh;
const p2wpkh_1 = __webpack_require__("a4fb6f91f8da62fe4bb2");
exports.p2wpkh = p2wpkh_1.p2wpkh;
const p2wsh_1 = __webpack_require__("a85b725d3464918a415c");
exports.p2wsh = p2wsh_1.p2wsh;
// TODO
// witness commitment


/***/ }),

/***/ "86f874783a6e655659bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bip174_1 = __webpack_require__("4894e9093f1fdbf5d4c4");
const varuint = __webpack_require__("5e1481e42138e937e546");
const utils_1 = __webpack_require__("ea044cef055159387d69");
const address_1 = __webpack_require__("247180d06ad5f0d3ae5f");
const bufferutils_1 = __webpack_require__("beaf39890650aa5299f8");
const crypto_1 = __webpack_require__("2d6e5edc7083b0a69b78");
const ecpair_1 = __webpack_require__("64ac9276262faec88968");
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const payments = __webpack_require__("8181d1a037f7ee7c0bf5");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const transaction_1 = __webpack_require__("f49d9113a79536d617f0");
/**
 * These are the default arguments for a Psbt instance.
 */
const DEFAULT_OPTS = {
  /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */
  network: networks_1.bitcoin,
  /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */
  maximumFeeRate: 5000,
};
/**
 * Psbt class can parse and generate a PSBT binary based off of the BIP174.
 * There are 6 roles that this class fulfills. (Explained in BIP174)
 *
 * Creator: This can be done with `new Psbt()`
 * Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
 *   `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
 *   add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
 *   `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
 *   addInput requires hash: Buffer | string; and index: number; as attributes
 *   and can also include any attributes that are used in updateInput method.
 *   addOutput requires script: Buffer; and value: number; and likewise can include
 *   data for updateOutput.
 *   For a list of what attributes should be what types. Check the bip174 library.
 *   Also, check the integration tests for some examples of usage.
 * Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
 *   information for your pubkey or pubkeyhash, and only sign inputs where it finds
 *   your info. Or you can explicitly sign a specific input with signInput and
 *   signInputAsync. For the async methods you can create a SignerAsync object
 *   and use something like a hardware wallet to sign with. (You must implement this)
 * Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
 *   the psbt calling combine will always have precedence when a conflict occurs.
 *   Combine checks if the internal bitcoin transaction is the same, so be sure that
 *   all sequences, version, locktime, etc. are the same before combining.
 * Input Finalizer: This role is fairly important. Not only does it need to construct
 *   the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
 *   Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
 *   Running any finalize method will delete any data in the input(s) that are no longer
 *   needed due to the finalized scripts containing the information.
 * Transaction Extractor: This role will perform some checks before returning a
 *   Transaction object. Such as fee rate not being larger than maximumFeeRate etc.
 */
class Psbt {
  constructor(opts = {}, data = new bip174_1.Psbt(new PsbtTransaction())) {
    this.data = data;
    // set defaults
    this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    this.__CACHE = {
      __NON_WITNESS_UTXO_TX_CACHE: [],
      __NON_WITNESS_UTXO_BUF_CACHE: [],
      __TX_IN_CACHE: {},
      __TX: this.data.globalMap.unsignedTx.tx,
      // Old TransactionBuilder behavior was to not confirm input values
      // before signing. Even though we highly encourage people to get
      // the full parent transaction to verify values, the ability to
      // sign non-segwit inputs without the full transaction was often
      // requested. So the only way to activate is to use @ts-ignore.
      // We will disable exporting the Psbt when unsafe sign is active.
      // because it is not BIP174 compliant.
      __UNSAFE_SIGN_NONSEGWIT: false,
    };
    if (this.data.inputs.length === 0) this.setVersion(2);
    // Make data hidden when enumerating
    const dpew = (obj, attr, enumerable, writable) =>
      Object.defineProperty(obj, attr, {
        enumerable,
        writable,
      });
    dpew(this, '__CACHE', false, true);
    dpew(this, 'opts', false, true);
  }
  static fromBase64(data, opts = {}) {
    const buffer = Buffer.from(data, 'base64');
    return this.fromBuffer(buffer, opts);
  }
  static fromHex(data, opts = {}) {
    const buffer = Buffer.from(data, 'hex');
    return this.fromBuffer(buffer, opts);
  }
  static fromBuffer(buffer, opts = {}) {
    const psbtBase = bip174_1.Psbt.fromBuffer(buffer, transactionFromBuffer);
    const psbt = new Psbt(opts, psbtBase);
    checkTxForDupeIns(psbt.__CACHE.__TX, psbt.__CACHE);
    return psbt;
  }
  get inputCount() {
    return this.data.inputs.length;
  }
  get version() {
    return this.__CACHE.__TX.version;
  }
  set version(version) {
    this.setVersion(version);
  }
  get locktime() {
    return this.__CACHE.__TX.locktime;
  }
  set locktime(locktime) {
    this.setLocktime(locktime);
  }
  get txInputs() {
    return this.__CACHE.__TX.ins.map(input => ({
      hash: bufferutils_1.cloneBuffer(input.hash),
      index: input.index,
      sequence: input.sequence,
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map(output => {
      let address;
      try {
        address = address_1.fromOutputScript(output.script, this.opts.network);
      } catch (_) {}
      return {
        script: bufferutils_1.cloneBuffer(output.script),
        value: output.value,
        address,
      };
    });
  }
  combine(...those) {
    this.data.combine(...those.map(o => o.data));
    return this;
  }
  clone() {
    // TODO: more efficient cloning
    const res = Psbt.fromBuffer(this.data.toBuffer());
    res.opts = JSON.parse(JSON.stringify(this.opts));
    return res;
  }
  setMaximumFeeRate(satoshiPerByte) {
    check32Bit(satoshiPerByte); // 42.9 BTC per byte IS excessive... so throw
    this.opts.maximumFeeRate = satoshiPerByte;
  }
  setVersion(version) {
    check32Bit(version);
    checkInputsForPartialSig(this.data.inputs, 'setVersion');
    const c = this.__CACHE;
    c.__TX.version = version;
    c.__EXTRACTED_TX = undefined;
    return this;
  }
  setLocktime(locktime) {
    check32Bit(locktime);
    checkInputsForPartialSig(this.data.inputs, 'setLocktime');
    const c = this.__CACHE;
    c.__TX.locktime = locktime;
    c.__EXTRACTED_TX = undefined;
    return this;
  }
  setInputSequence(inputIndex, sequence) {
    check32Bit(sequence);
    checkInputsForPartialSig(this.data.inputs, 'setInputSequence');
    const c = this.__CACHE;
    if (c.__TX.ins.length <= inputIndex) {
      throw new Error('Input index too high');
    }
    c.__TX.ins[inputIndex].sequence = sequence;
    c.__EXTRACTED_TX = undefined;
    return this;
  }
  addInputs(inputDatas) {
    inputDatas.forEach(inputData => this.addInput(inputData));
    return this;
  }
  addInput(inputData) {
    if (
      arguments.length > 1 ||
      !inputData ||
      inputData.hash === undefined ||
      inputData.index === undefined
    ) {
      throw new Error(
        `Invalid arguments for Psbt.addInput. ` +
          `Requires single object with at least [hash] and [index]`,
      );
    }
    checkInputsForPartialSig(this.data.inputs, 'addInput');
    if (inputData.witnessScript) checkInvalidP2WSH(inputData.witnessScript);
    const c = this.__CACHE;
    this.data.addInput(inputData);
    const txIn = c.__TX.ins[c.__TX.ins.length - 1];
    checkTxInputCache(c, txIn);
    const inputIndex = this.data.inputs.length - 1;
    const input = this.data.inputs[inputIndex];
    if (input.nonWitnessUtxo) {
      addNonWitnessTxCache(this.__CACHE, input, inputIndex);
    }
    c.__FEE = undefined;
    c.__FEE_RATE = undefined;
    c.__EXTRACTED_TX = undefined;
    return this;
  }
  addOutputs(outputDatas) {
    outputDatas.forEach(outputData => this.addOutput(outputData));
    return this;
  }
  addOutput(outputData) {
    if (
      arguments.length > 1 ||
      !outputData ||
      outputData.value === undefined ||
      (outputData.address === undefined && outputData.script === undefined)
    ) {
      throw new Error(
        `Invalid arguments for Psbt.addOutput. ` +
          `Requires single object with at least [script or address] and [value]`,
      );
    }
    checkInputsForPartialSig(this.data.inputs, 'addOutput');
    const { address } = outputData;
    if (typeof address === 'string') {
      const { network } = this.opts;
      const script = address_1.toOutputScript(address, network);
      outputData = Object.assign(outputData, { script });
    }
    const c = this.__CACHE;
    this.data.addOutput(outputData);
    c.__FEE = undefined;
    c.__FEE_RATE = undefined;
    c.__EXTRACTED_TX = undefined;
    return this;
  }
  extractTransaction(disableFeeCheck) {
    if (!this.data.inputs.every(isFinalized)) throw new Error('Not finalized');
    const c = this.__CACHE;
    if (!disableFeeCheck) {
      checkFees(this, c, this.opts);
    }
    if (c.__EXTRACTED_TX) return c.__EXTRACTED_TX;
    const tx = c.__TX.clone();
    inputFinalizeGetAmts(this.data.inputs, tx, c, true);
    return tx;
  }
  getFeeRate() {
    return getTxCacheValue(
      '__FEE_RATE',
      'fee rate',
      this.data.inputs,
      this.__CACHE,
    );
  }
  getFee() {
    return getTxCacheValue('__FEE', 'fee', this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    utils_1.checkForInput(this.data.inputs, 0); // making sure we have at least one
    range(this.data.inputs.length).forEach(idx => this.finalizeInput(idx));
    return this;
  }
  finalizeInput(inputIndex, finalScriptsFunc = getFinalScripts) {
    const input = utils_1.checkForInput(this.data.inputs, inputIndex);
    const { script, isP2SH, isP2WSH, isSegwit } = getScriptFromInput(
      inputIndex,
      input,
      this.__CACHE,
    );
    if (!script) throw new Error(`No script found for input #${inputIndex}`);
    checkPartialSigSighashes(input);
    const { finalScriptSig, finalScriptWitness } = finalScriptsFunc(
      inputIndex,
      input,
      script,
      isSegwit,
      isP2SH,
      isP2WSH,
    );
    if (finalScriptSig) this.data.updateInput(inputIndex, { finalScriptSig });
    if (finalScriptWitness)
      this.data.updateInput(inputIndex, { finalScriptWitness });
    if (!finalScriptSig && !finalScriptWitness)
      throw new Error(`Unknown error finalizing input #${inputIndex}`);
    this.data.clearFinalizedInput(inputIndex);
    return this;
  }
  getInputType(inputIndex) {
    const input = utils_1.checkForInput(this.data.inputs, inputIndex);
    const script = getScriptFromUtxo(inputIndex, input, this.__CACHE);
    const result = getMeaningfulScript(
      script,
      inputIndex,
      'input',
      input.redeemScript || redeemFromFinalScriptSig(input.finalScriptSig),
      input.witnessScript ||
        redeemFromFinalWitnessScript(input.finalScriptWitness),
    );
    const type = result.type === 'raw' ? '' : result.type + '-';
    const mainType = classifyScript(result.meaningfulScript);
    return type + mainType;
  }
  inputHasPubkey(inputIndex, pubkey) {
    const input = utils_1.checkForInput(this.data.inputs, inputIndex);
    return pubkeyInInput(pubkey, input, inputIndex, this.__CACHE);
  }
  inputHasHDKey(inputIndex, root) {
    const input = utils_1.checkForInput(this.data.inputs, inputIndex);
    const derivationIsMine = bip32DerivationIsMine(root);
    return (
      !!input.bip32Derivation && input.bip32Derivation.some(derivationIsMine)
    );
  }
  outputHasPubkey(outputIndex, pubkey) {
    const output = utils_1.checkForOutput(this.data.outputs, outputIndex);
    return pubkeyInOutput(pubkey, output, outputIndex, this.__CACHE);
  }
  outputHasHDKey(outputIndex, root) {
    const output = utils_1.checkForOutput(this.data.outputs, outputIndex);
    const derivationIsMine = bip32DerivationIsMine(root);
    return (
      !!output.bip32Derivation && output.bip32Derivation.some(derivationIsMine)
    );
  }
  validateSignaturesOfAllInputs() {
    utils_1.checkForInput(this.data.inputs, 0); // making sure we have at least one
    const results = range(this.data.inputs.length).map(idx =>
      this.validateSignaturesOfInput(idx),
    );
    return results.reduce((final, res) => res === true && final, true);
  }
  validateSignaturesOfInput(inputIndex, pubkey) {
    const input = this.data.inputs[inputIndex];
    const partialSig = (input || {}).partialSig;
    if (!input || !partialSig || partialSig.length < 1)
      throw new Error('No signatures to validate');
    const mySigs = pubkey
      ? partialSig.filter(sig => sig.pubkey.equals(pubkey))
      : partialSig;
    if (mySigs.length < 1) throw new Error('No signatures for this pubkey');
    const results = [];
    let hashCache;
    let scriptCache;
    let sighashCache;
    for (const pSig of mySigs) {
      const sig = bscript.signature.decode(pSig.signature);
      const { hash, script } =
        sighashCache !== sig.hashType
          ? getHashForSig(
              inputIndex,
              Object.assign({}, input, { sighashType: sig.hashType }),
              this.__CACHE,
              true,
            )
          : { hash: hashCache, script: scriptCache };
      sighashCache = sig.hashType;
      hashCache = hash;
      scriptCache = script;
      checkScriptForPubkey(pSig.pubkey, script, 'verify');
      const keypair = ecpair_1.fromPublicKey(pSig.pubkey);
      results.push(keypair.verify(hash, sig.signature));
    }
    return results.every(res => res === true);
  }
  signAllInputsHD(
    hdKeyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
      throw new Error('Need HDSigner to sign input');
    }
    const results = [];
    for (const i of range(this.data.inputs.length)) {
      try {
        this.signInputHD(i, hdKeyPair, sighashTypes);
        results.push(true);
      } catch (err) {
        results.push(false);
      }
    }
    if (results.every(v => v === false)) {
      throw new Error('No inputs were signed');
    }
    return this;
  }
  signAllInputsHDAsync(
    hdKeyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    return new Promise((resolve, reject) => {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        return reject(new Error('Need HDSigner to sign input'));
      }
      const results = [];
      const promises = [];
      for (const i of range(this.data.inputs.length)) {
        promises.push(
          this.signInputHDAsync(i, hdKeyPair, sighashTypes).then(
            () => {
              results.push(true);
            },
            () => {
              results.push(false);
            },
          ),
        );
      }
      return Promise.all(promises).then(() => {
        if (results.every(v => v === false)) {
          return reject(new Error('No inputs were signed'));
        }
        resolve();
      });
    });
  }
  signInputHD(
    inputIndex,
    hdKeyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
      throw new Error('Need HDSigner to sign input');
    }
    const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
    signers.forEach(signer => this.signInput(inputIndex, signer, sighashTypes));
    return this;
  }
  signInputHDAsync(
    inputIndex,
    hdKeyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    return new Promise((resolve, reject) => {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        return reject(new Error('Need HDSigner to sign input'));
      }
      const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
      const promises = signers.map(signer =>
        this.signInputAsync(inputIndex, signer, sighashTypes),
      );
      return Promise.all(promises)
        .then(() => {
          resolve();
        })
        .catch(reject);
    });
  }
  signAllInputs(
    keyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    if (!keyPair || !keyPair.publicKey)
      throw new Error('Need Signer to sign input');
    // TODO: Add a pubkey/pubkeyhash cache to each input
    // as input information is added, then eventually
    // optimize this method.
    const results = [];
    for (const i of range(this.data.inputs.length)) {
      try {
        this.signInput(i, keyPair, sighashTypes);
        results.push(true);
      } catch (err) {
        results.push(false);
      }
    }
    if (results.every(v => v === false)) {
      throw new Error('No inputs were signed');
    }
    return this;
  }
  signAllInputsAsync(
    keyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    return new Promise((resolve, reject) => {
      if (!keyPair || !keyPair.publicKey)
        return reject(new Error('Need Signer to sign input'));
      // TODO: Add a pubkey/pubkeyhash cache to each input
      // as input information is added, then eventually
      // optimize this method.
      const results = [];
      const promises = [];
      for (const [i] of this.data.inputs.entries()) {
        promises.push(
          this.signInputAsync(i, keyPair, sighashTypes).then(
            () => {
              results.push(true);
            },
            () => {
              results.push(false);
            },
          ),
        );
      }
      return Promise.all(promises).then(() => {
        if (results.every(v => v === false)) {
          return reject(new Error('No inputs were signed'));
        }
        resolve();
      });
    });
  }
  signInput(
    inputIndex,
    keyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    if (!keyPair || !keyPair.publicKey)
      throw new Error('Need Signer to sign input');
    const { hash, sighashType } = getHashAndSighashType(
      this.data.inputs,
      inputIndex,
      keyPair.publicKey,
      this.__CACHE,
      sighashTypes,
    );
    const partialSig = [
      {
        pubkey: keyPair.publicKey,
        signature: bscript.signature.encode(keyPair.sign(hash), sighashType),
      },
    ];
    this.data.updateInput(inputIndex, { partialSig });
    return this;
  }
  signInputAsync(
    inputIndex,
    keyPair,
    sighashTypes = [transaction_1.Transaction.SIGHASH_ALL],
  ) {
    return Promise.resolve().then(() => {
      if (!keyPair || !keyPair.publicKey)
        throw new Error('Need Signer to sign input');
      const { hash, sighashType } = getHashAndSighashType(
        this.data.inputs,
        inputIndex,
        keyPair.publicKey,
        this.__CACHE,
        sighashTypes,
      );
      return Promise.resolve(keyPair.sign(hash)).then(signature => {
        const partialSig = [
          {
            pubkey: keyPair.publicKey,
            signature: bscript.signature.encode(signature, sighashType),
          },
        ];
        this.data.updateInput(inputIndex, { partialSig });
      });
    });
  }
  toBuffer() {
    checkCache(this.__CACHE);
    return this.data.toBuffer();
  }
  toHex() {
    checkCache(this.__CACHE);
    return this.data.toHex();
  }
  toBase64() {
    checkCache(this.__CACHE);
    return this.data.toBase64();
  }
  updateGlobal(updateData) {
    this.data.updateGlobal(updateData);
    return this;
  }
  updateInput(inputIndex, updateData) {
    if (updateData.witnessScript) checkInvalidP2WSH(updateData.witnessScript);
    this.data.updateInput(inputIndex, updateData);
    if (updateData.nonWitnessUtxo) {
      addNonWitnessTxCache(
        this.__CACHE,
        this.data.inputs[inputIndex],
        inputIndex,
      );
    }
    return this;
  }
  updateOutput(outputIndex, updateData) {
    this.data.updateOutput(outputIndex, updateData);
    return this;
  }
  addUnknownKeyValToGlobal(keyVal) {
    this.data.addUnknownKeyValToGlobal(keyVal);
    return this;
  }
  addUnknownKeyValToInput(inputIndex, keyVal) {
    this.data.addUnknownKeyValToInput(inputIndex, keyVal);
    return this;
  }
  addUnknownKeyValToOutput(outputIndex, keyVal) {
    this.data.addUnknownKeyValToOutput(outputIndex, keyVal);
    return this;
  }
  clearFinalizedInput(inputIndex) {
    this.data.clearFinalizedInput(inputIndex);
    return this;
  }
}
exports.Psbt = Psbt;
/**
 * This function is needed to pass to the bip174 base class's fromBuffer.
 * It takes the "transaction buffer" portion of the psbt buffer and returns a
 * Transaction (From the bip174 library) interface.
 */
const transactionFromBuffer = buffer => new PsbtTransaction(buffer);
/**
 * This class implements the Transaction interface from bip174 library.
 * It contains a bitcoinjs-lib Transaction object.
 */
class PsbtTransaction {
  constructor(buffer = Buffer.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    this.tx = transaction_1.Transaction.fromBuffer(buffer);
    checkTxEmpty(this.tx);
    Object.defineProperty(this, 'tx', {
      enumerable: false,
      writable: true,
    });
  }
  getInputOutputCounts() {
    return {
      inputCount: this.tx.ins.length,
      outputCount: this.tx.outs.length,
    };
  }
  addInput(input) {
    if (
      input.hash === undefined ||
      input.index === undefined ||
      (!Buffer.isBuffer(input.hash) && typeof input.hash !== 'string') ||
      typeof input.index !== 'number'
    ) {
      throw new Error('Error adding input.');
    }
    const hash =
      typeof input.hash === 'string'
        ? bufferutils_1.reverseBuffer(Buffer.from(input.hash, 'hex'))
        : input.hash;
    this.tx.addInput(hash, input.index, input.sequence);
  }
  addOutput(output) {
    if (
      output.script === undefined ||
      output.value === undefined ||
      !Buffer.isBuffer(output.script) ||
      typeof output.value !== 'number'
    ) {
      throw new Error('Error adding output.');
    }
    this.tx.addOutput(output.script, output.value);
  }
  toBuffer() {
    return this.tx.toBuffer();
  }
}
function canFinalize(input, script, scriptType) {
  switch (scriptType) {
    case 'pubkey':
    case 'pubkeyhash':
    case 'witnesspubkeyhash':
      return hasSigs(1, input.partialSig);
    case 'multisig':
      const p2ms = payments.p2ms({ output: script });
      return hasSigs(p2ms.m, input.partialSig, p2ms.pubkeys);
    default:
      return false;
  }
}
function checkCache(cache) {
  if (cache.__UNSAFE_SIGN_NONSEGWIT !== false) {
    throw new Error('Not BIP174 compliant, can not export');
  }
}
function hasSigs(neededSigs, partialSig, pubkeys) {
  if (!partialSig) return false;
  let sigs;
  if (pubkeys) {
    sigs = pubkeys
      .map(pkey => {
        const pubkey = ecpair_1.fromPublicKey(pkey, { compressed: true })
          .publicKey;
        return partialSig.find(pSig => pSig.pubkey.equals(pubkey));
      })
      .filter(v => !!v);
  } else {
    sigs = partialSig;
  }
  if (sigs.length > neededSigs) throw new Error('Too many signatures');
  return sigs.length === neededSigs;
}
function isFinalized(input) {
  return !!input.finalScriptSig || !!input.finalScriptWitness;
}
function isPaymentFactory(payment) {
  return script => {
    try {
      payment({ output: script });
      return true;
    } catch (err) {
      return false;
    }
  };
}
const isP2MS = isPaymentFactory(payments.p2ms);
const isP2PK = isPaymentFactory(payments.p2pk);
const isP2PKH = isPaymentFactory(payments.p2pkh);
const isP2WPKH = isPaymentFactory(payments.p2wpkh);
const isP2WSHScript = isPaymentFactory(payments.p2wsh);
const isP2SHScript = isPaymentFactory(payments.p2sh);
function bip32DerivationIsMine(root) {
  return d => {
    if (!d.masterFingerprint.equals(root.fingerprint)) return false;
    if (!root.derivePath(d.path).publicKey.equals(d.pubkey)) return false;
    return true;
  };
}
function check32Bit(num) {
  if (
    typeof num !== 'number' ||
    num !== Math.floor(num) ||
    num > 0xffffffff ||
    num < 0
  ) {
    throw new Error('Invalid 32 bit integer');
  }
}
function checkFees(psbt, cache, opts) {
  const feeRate = cache.__FEE_RATE || psbt.getFeeRate();
  const vsize = cache.__EXTRACTED_TX.virtualSize();
  const satoshis = feeRate * vsize;
  if (feeRate >= opts.maximumFeeRate) {
    throw new Error(
      `Warning: You are paying around ${(satoshis / 1e8).toFixed(8)} in ` +
        `fees, which is ${feeRate} satoshi per byte for a transaction ` +
        `with a VSize of ${vsize} bytes (segwit counted as 0.25 byte per ` +
        `byte). Use setMaximumFeeRate method to raise your threshold, or ` +
        `pass true to the first arg of extractTransaction.`,
    );
  }
}
function checkInputsForPartialSig(inputs, action) {
  inputs.forEach(input => {
    let throws = false;
    let pSigs = [];
    if ((input.partialSig || []).length === 0) {
      if (!input.finalScriptSig && !input.finalScriptWitness) return;
      pSigs = getPsigsFromInputFinalScripts(input);
    } else {
      pSigs = input.partialSig;
    }
    pSigs.forEach(pSig => {
      const { hashType } = bscript.signature.decode(pSig.signature);
      const whitelist = [];
      const isAnyoneCanPay =
        hashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY;
      if (isAnyoneCanPay) whitelist.push('addInput');
      const hashMod = hashType & 0x1f;
      switch (hashMod) {
        case transaction_1.Transaction.SIGHASH_ALL:
          break;
        case transaction_1.Transaction.SIGHASH_SINGLE:
        case transaction_1.Transaction.SIGHASH_NONE:
          whitelist.push('addOutput');
          whitelist.push('setInputSequence');
          break;
      }
      if (whitelist.indexOf(action) === -1) {
        throws = true;
      }
    });
    if (throws) {
      throw new Error('Can not modify transaction, signatures exist.');
    }
  });
}
function checkPartialSigSighashes(input) {
  if (!input.sighashType || !input.partialSig) return;
  const { partialSig, sighashType } = input;
  partialSig.forEach(pSig => {
    const { hashType } = bscript.signature.decode(pSig.signature);
    if (sighashType !== hashType) {
      throw new Error('Signature sighash does not match input sighash type');
    }
  });
}
function checkScriptForPubkey(pubkey, script, action) {
  if (!pubkeyInScript(pubkey, script)) {
    throw new Error(
      `Can not ${action} for this input with the key ${pubkey.toString('hex')}`,
    );
  }
}
function checkTxEmpty(tx) {
  const isEmpty = tx.ins.every(
    input =>
      input.script &&
      input.script.length === 0 &&
      input.witness &&
      input.witness.length === 0,
  );
  if (!isEmpty) {
    throw new Error('Format Error: Transaction ScriptSigs are not empty');
  }
}
function checkTxForDupeIns(tx, cache) {
  tx.ins.forEach(input => {
    checkTxInputCache(cache, input);
  });
}
function checkTxInputCache(cache, input) {
  const key =
    bufferutils_1.reverseBuffer(Buffer.from(input.hash)).toString('hex') +
    ':' +
    input.index;
  if (cache.__TX_IN_CACHE[key]) throw new Error('Duplicate input detected.');
  cache.__TX_IN_CACHE[key] = 1;
}
function scriptCheckerFactory(payment, paymentScriptName) {
  return (inputIndex, scriptPubKey, redeemScript, ioType) => {
    const redeemScriptOutput = payment({
      redeem: { output: redeemScript },
    }).output;
    if (!scriptPubKey.equals(redeemScriptOutput)) {
      throw new Error(
        `${paymentScriptName} for ${ioType} #${inputIndex} doesn't match the scriptPubKey in the prevout`,
      );
    }
  };
}
const checkRedeemScript = scriptCheckerFactory(payments.p2sh, 'Redeem script');
const checkWitnessScript = scriptCheckerFactory(
  payments.p2wsh,
  'Witness script',
);
function getTxCacheValue(key, name, inputs, c) {
  if (!inputs.every(isFinalized))
    throw new Error(`PSBT must be finalized to calculate ${name}`);
  if (key === '__FEE_RATE' && c.__FEE_RATE) return c.__FEE_RATE;
  if (key === '__FEE' && c.__FEE) return c.__FEE;
  let tx;
  let mustFinalize = true;
  if (c.__EXTRACTED_TX) {
    tx = c.__EXTRACTED_TX;
    mustFinalize = false;
  } else {
    tx = c.__TX.clone();
  }
  inputFinalizeGetAmts(inputs, tx, c, mustFinalize);
  if (key === '__FEE_RATE') return c.__FEE_RATE;
  else if (key === '__FEE') return c.__FEE;
}
function getFinalScripts(inputIndex, input, script, isSegwit, isP2SH, isP2WSH) {
  const scriptType = classifyScript(script);
  if (!canFinalize(input, script, scriptType))
    throw new Error(`Can not finalize input #${inputIndex}`);
  return prepareFinalScripts(
    script,
    scriptType,
    input.partialSig,
    isSegwit,
    isP2SH,
    isP2WSH,
  );
}
function prepareFinalScripts(
  script,
  scriptType,
  partialSig,
  isSegwit,
  isP2SH,
  isP2WSH,
) {
  let finalScriptSig;
  let finalScriptWitness;
  // Wow, the payments API is very handy
  const payment = getPayment(script, scriptType, partialSig);
  const p2wsh = !isP2WSH ? null : payments.p2wsh({ redeem: payment });
  const p2sh = !isP2SH ? null : payments.p2sh({ redeem: p2wsh || payment });
  if (isSegwit) {
    if (p2wsh) {
      finalScriptWitness = witnessStackToScriptWitness(p2wsh.witness);
    } else {
      finalScriptWitness = witnessStackToScriptWitness(payment.witness);
    }
    if (p2sh) {
      finalScriptSig = p2sh.input;
    }
  } else {
    if (p2sh) {
      finalScriptSig = p2sh.input;
    } else {
      finalScriptSig = payment.input;
    }
  }
  return {
    finalScriptSig,
    finalScriptWitness,
  };
}
function getHashAndSighashType(
  inputs,
  inputIndex,
  pubkey,
  cache,
  sighashTypes,
) {
  const input = utils_1.checkForInput(inputs, inputIndex);
  const { hash, sighashType, script } = getHashForSig(
    inputIndex,
    input,
    cache,
    false,
    sighashTypes,
  );
  checkScriptForPubkey(pubkey, script, 'sign');
  return {
    hash,
    sighashType,
  };
}
function getHashForSig(inputIndex, input, cache, forValidate, sighashTypes) {
  const unsignedTx = cache.__TX;
  const sighashType =
    input.sighashType || transaction_1.Transaction.SIGHASH_ALL;
  if (sighashTypes && sighashTypes.indexOf(sighashType) < 0) {
    const str = sighashTypeToString(sighashType);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the ` +
        `sighashTypes array of whitelisted types. Sighash type: ${str}`,
    );
  }
  let hash;
  let prevout;
  if (input.nonWitnessUtxo) {
    const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
      cache,
      input,
      inputIndex,
    );
    const prevoutHash = unsignedTx.ins[inputIndex].hash;
    const utxoHash = nonWitnessUtxoTx.getHash();
    // If a non-witness UTXO is provided, its hash must match the hash specified in the prevout
    if (!prevoutHash.equals(utxoHash)) {
      throw new Error(
        `Non-witness UTXO hash for input #${inputIndex} doesn't match the hash specified in the prevout`,
      );
    }
    const prevoutIndex = unsignedTx.ins[inputIndex].index;
    prevout = nonWitnessUtxoTx.outs[prevoutIndex];
  } else if (input.witnessUtxo) {
    prevout = input.witnessUtxo;
  } else {
    throw new Error('Need a Utxo input item for signing');
  }
  const { meaningfulScript, type } = getMeaningfulScript(
    prevout.script,
    inputIndex,
    'input',
    input.redeemScript,
    input.witnessScript,
  );
  if (['p2sh-p2wsh', 'p2wsh'].indexOf(type) >= 0) {
    hash = unsignedTx.hashForWitnessV0(
      inputIndex,
      meaningfulScript,
      prevout.value,
      sighashType,
    );
  } else if (isP2WPKH(meaningfulScript)) {
    // P2WPKH uses the P2PKH template for prevoutScript when signing
    const signingScript = payments.p2pkh({ hash: meaningfulScript.slice(2) })
      .output;
    hash = unsignedTx.hashForWitnessV0(
      inputIndex,
      signingScript,
      prevout.value,
      sighashType,
    );
  } else {
    // non-segwit
    if (
      input.nonWitnessUtxo === undefined &&
      cache.__UNSAFE_SIGN_NONSEGWIT === false
    )
      throw new Error(
        `Input #${inputIndex} has witnessUtxo but non-segwit script: ` +
          `${meaningfulScript.toString('hex')}`,
      );
    if (!forValidate && cache.__UNSAFE_SIGN_NONSEGWIT !== false)
      console.warn(
        'Warning: Signing non-segwit inputs without the full parent transaction ' +
          'means there is a chance that a miner could feed you incorrect information ' +
          'to trick you into paying large fees. This behavior is the same as the old ' +
          'TransactionBuilder class when signing non-segwit scripts. You are not ' +
          'able to export this Psbt with toBuffer|toBase64|toHex since it is not ' +
          'BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n' +
          '*********************',
      );
    hash = unsignedTx.hashForSignature(
      inputIndex,
      meaningfulScript,
      sighashType,
    );
  }
  return {
    script: meaningfulScript,
    sighashType,
    hash,
  };
}
function getPayment(script, scriptType, partialSig) {
  let payment;
  switch (scriptType) {
    case 'multisig':
      const sigs = getSortedSigs(script, partialSig);
      payment = payments.p2ms({
        output: script,
        signatures: sigs,
      });
      break;
    case 'pubkey':
      payment = payments.p2pk({
        output: script,
        signature: partialSig[0].signature,
      });
      break;
    case 'pubkeyhash':
      payment = payments.p2pkh({
        output: script,
        pubkey: partialSig[0].pubkey,
        signature: partialSig[0].signature,
      });
      break;
    case 'witnesspubkeyhash':
      payment = payments.p2wpkh({
        output: script,
        pubkey: partialSig[0].pubkey,
        signature: partialSig[0].signature,
      });
      break;
  }
  return payment;
}
function getPsigsFromInputFinalScripts(input) {
  const scriptItems = !input.finalScriptSig
    ? []
    : bscript.decompile(input.finalScriptSig) || [];
  const witnessItems = !input.finalScriptWitness
    ? []
    : bscript.decompile(input.finalScriptWitness) || [];
  return scriptItems
    .concat(witnessItems)
    .filter(item => {
      return Buffer.isBuffer(item) && bscript.isCanonicalScriptSignature(item);
    })
    .map(sig => ({ signature: sig }));
}
function getScriptFromInput(inputIndex, input, cache) {
  const unsignedTx = cache.__TX;
  const res = {
    script: null,
    isSegwit: false,
    isP2SH: false,
    isP2WSH: false,
  };
  res.isP2SH = !!input.redeemScript;
  res.isP2WSH = !!input.witnessScript;
  if (input.witnessScript) {
    res.script = input.witnessScript;
  } else if (input.redeemScript) {
    res.script = input.redeemScript;
  } else {
    if (input.nonWitnessUtxo) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
        cache,
        input,
        inputIndex,
      );
      const prevoutIndex = unsignedTx.ins[inputIndex].index;
      res.script = nonWitnessUtxoTx.outs[prevoutIndex].script;
    } else if (input.witnessUtxo) {
      res.script = input.witnessUtxo.script;
    }
  }
  if (input.witnessScript || isP2WPKH(res.script)) {
    res.isSegwit = true;
  }
  return res;
}
function getSignersFromHD(inputIndex, inputs, hdKeyPair) {
  const input = utils_1.checkForInput(inputs, inputIndex);
  if (!input.bip32Derivation || input.bip32Derivation.length === 0) {
    throw new Error('Need bip32Derivation to sign with HD');
  }
  const myDerivations = input.bip32Derivation
    .map(bipDv => {
      if (bipDv.masterFingerprint.equals(hdKeyPair.fingerprint)) {
        return bipDv;
      } else {
        return;
      }
    })
    .filter(v => !!v);
  if (myDerivations.length === 0) {
    throw new Error(
      'Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint',
    );
  }
  const signers = myDerivations.map(bipDv => {
    const node = hdKeyPair.derivePath(bipDv.path);
    if (!bipDv.pubkey.equals(node.publicKey)) {
      throw new Error('pubkey did not match bip32Derivation');
    }
    return node;
  });
  return signers;
}
function getSortedSigs(script, partialSig) {
  const p2ms = payments.p2ms({ output: script });
  // for each pubkey in order of p2ms script
  return p2ms.pubkeys
    .map(pk => {
      // filter partialSig array by pubkey being equal
      return (
        partialSig.filter(ps => {
          return ps.pubkey.equals(pk);
        })[0] || {}
      ).signature;
      // Any pubkey without a match will return undefined
      // this last filter removes all the undefined items in the array.
    })
    .filter(v => !!v);
}
function scriptWitnessToWitnessStack(buffer) {
  let offset = 0;
  function readSlice(n) {
    offset += n;
    return buffer.slice(offset - n, offset);
  }
  function readVarInt() {
    const vi = varuint.decode(buffer, offset);
    offset += varuint.decode.bytes;
    return vi;
  }
  function readVarSlice() {
    return readSlice(readVarInt());
  }
  function readVector() {
    const count = readVarInt();
    const vector = [];
    for (let i = 0; i < count; i++) vector.push(readVarSlice());
    return vector;
  }
  return readVector();
}
function sighashTypeToString(sighashType) {
  let text =
    sighashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY
      ? 'SIGHASH_ANYONECANPAY | '
      : '';
  const sigMod = sighashType & 0x1f;
  switch (sigMod) {
    case transaction_1.Transaction.SIGHASH_ALL:
      text += 'SIGHASH_ALL';
      break;
    case transaction_1.Transaction.SIGHASH_SINGLE:
      text += 'SIGHASH_SINGLE';
      break;
    case transaction_1.Transaction.SIGHASH_NONE:
      text += 'SIGHASH_NONE';
      break;
  }
  return text;
}
function witnessStackToScriptWitness(witness) {
  let buffer = Buffer.allocUnsafe(0);
  function writeSlice(slice) {
    buffer = Buffer.concat([buffer, Buffer.from(slice)]);
  }
  function writeVarInt(i) {
    const currentLen = buffer.length;
    const varintLen = varuint.encodingLength(i);
    buffer = Buffer.concat([buffer, Buffer.allocUnsafe(varintLen)]);
    varuint.encode(i, buffer, currentLen);
  }
  function writeVarSlice(slice) {
    writeVarInt(slice.length);
    writeSlice(slice);
  }
  function writeVector(vector) {
    writeVarInt(vector.length);
    vector.forEach(writeVarSlice);
  }
  writeVector(witness);
  return buffer;
}
function addNonWitnessTxCache(cache, input, inputIndex) {
  cache.__NON_WITNESS_UTXO_BUF_CACHE[inputIndex] = input.nonWitnessUtxo;
  const tx = transaction_1.Transaction.fromBuffer(input.nonWitnessUtxo);
  cache.__NON_WITNESS_UTXO_TX_CACHE[inputIndex] = tx;
  const self = cache;
  const selfIndex = inputIndex;
  delete input.nonWitnessUtxo;
  Object.defineProperty(input, 'nonWitnessUtxo', {
    enumerable: true,
    get() {
      const buf = self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex];
      const txCache = self.__NON_WITNESS_UTXO_TX_CACHE[selfIndex];
      if (buf !== undefined) {
        return buf;
      } else {
        const newBuf = txCache.toBuffer();
        self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = newBuf;
        return newBuf;
      }
    },
    set(data) {
      self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = data;
    },
  });
}
function inputFinalizeGetAmts(inputs, tx, cache, mustFinalize) {
  let inputAmount = 0;
  inputs.forEach((input, idx) => {
    if (mustFinalize && input.finalScriptSig)
      tx.ins[idx].script = input.finalScriptSig;
    if (mustFinalize && input.finalScriptWitness) {
      tx.ins[idx].witness = scriptWitnessToWitnessStack(
        input.finalScriptWitness,
      );
    }
    if (input.witnessUtxo) {
      inputAmount += input.witnessUtxo.value;
    } else if (input.nonWitnessUtxo) {
      const nwTx = nonWitnessUtxoTxFromCache(cache, input, idx);
      const vout = tx.ins[idx].index;
      const out = nwTx.outs[vout];
      inputAmount += out.value;
    }
  });
  const outputAmount = tx.outs.reduce((total, o) => total + o.value, 0);
  const fee = inputAmount - outputAmount;
  if (fee < 0) {
    throw new Error('Outputs are spending more than Inputs');
  }
  const bytes = tx.virtualSize();
  cache.__FEE = fee;
  cache.__EXTRACTED_TX = tx;
  cache.__FEE_RATE = Math.floor(fee / bytes);
}
function nonWitnessUtxoTxFromCache(cache, input, inputIndex) {
  const c = cache.__NON_WITNESS_UTXO_TX_CACHE;
  if (!c[inputIndex]) {
    addNonWitnessTxCache(cache, input, inputIndex);
  }
  return c[inputIndex];
}
function getScriptFromUtxo(inputIndex, input, cache) {
  if (input.witnessUtxo !== undefined) {
    return input.witnessUtxo.script;
  } else if (input.nonWitnessUtxo !== undefined) {
    const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(
      cache,
      input,
      inputIndex,
    );
    return nonWitnessUtxoTx.outs[cache.__TX.ins[inputIndex].index].script;
  } else {
    throw new Error("Can't find pubkey in input without Utxo data");
  }
}
function pubkeyInInput(pubkey, input, inputIndex, cache) {
  const script = getScriptFromUtxo(inputIndex, input, cache);
  const { meaningfulScript } = getMeaningfulScript(
    script,
    inputIndex,
    'input',
    input.redeemScript,
    input.witnessScript,
  );
  return pubkeyInScript(pubkey, meaningfulScript);
}
function pubkeyInOutput(pubkey, output, outputIndex, cache) {
  const script = cache.__TX.outs[outputIndex].script;
  const { meaningfulScript } = getMeaningfulScript(
    script,
    outputIndex,
    'output',
    output.redeemScript,
    output.witnessScript,
  );
  return pubkeyInScript(pubkey, meaningfulScript);
}
function redeemFromFinalScriptSig(finalScript) {
  if (!finalScript) return;
  const decomp = bscript.decompile(finalScript);
  if (!decomp) return;
  const lastItem = decomp[decomp.length - 1];
  if (
    !Buffer.isBuffer(lastItem) ||
    isPubkeyLike(lastItem) ||
    isSigLike(lastItem)
  )
    return;
  const sDecomp = bscript.decompile(lastItem);
  if (!sDecomp) return;
  return lastItem;
}
function redeemFromFinalWitnessScript(finalScript) {
  if (!finalScript) return;
  const decomp = scriptWitnessToWitnessStack(finalScript);
  const lastItem = decomp[decomp.length - 1];
  if (isPubkeyLike(lastItem)) return;
  const sDecomp = bscript.decompile(lastItem);
  if (!sDecomp) return;
  return lastItem;
}
function isPubkeyLike(buf) {
  return buf.length === 33 && bscript.isCanonicalPubKey(buf);
}
function isSigLike(buf) {
  return bscript.isCanonicalScriptSignature(buf);
}
function getMeaningfulScript(
  script,
  index,
  ioType,
  redeemScript,
  witnessScript,
) {
  const isP2SH = isP2SHScript(script);
  const isP2SHP2WSH = isP2SH && redeemScript && isP2WSHScript(redeemScript);
  const isP2WSH = isP2WSHScript(script);
  if (isP2SH && redeemScript === undefined)
    throw new Error('scriptPubkey is P2SH but redeemScript missing');
  if ((isP2WSH || isP2SHP2WSH) && witnessScript === undefined)
    throw new Error(
      'scriptPubkey or redeemScript is P2WSH but witnessScript missing',
    );
  let meaningfulScript;
  if (isP2SHP2WSH) {
    meaningfulScript = witnessScript;
    checkRedeemScript(index, script, redeemScript, ioType);
    checkWitnessScript(index, redeemScript, witnessScript, ioType);
    checkInvalidP2WSH(meaningfulScript);
  } else if (isP2WSH) {
    meaningfulScript = witnessScript;
    checkWitnessScript(index, script, witnessScript, ioType);
    checkInvalidP2WSH(meaningfulScript);
  } else if (isP2SH) {
    meaningfulScript = redeemScript;
    checkRedeemScript(index, script, redeemScript, ioType);
  } else {
    meaningfulScript = script;
  }
  return {
    meaningfulScript,
    type: isP2SHP2WSH
      ? 'p2sh-p2wsh'
      : isP2SH
      ? 'p2sh'
      : isP2WSH
      ? 'p2wsh'
      : 'raw',
  };
}
function checkInvalidP2WSH(script) {
  if (isP2WPKH(script) || isP2SHScript(script)) {
    throw new Error('P2WPKH or P2SH can not be contained within P2WSH');
  }
}
function pubkeyInScript(pubkey, script) {
  const pubkeyHash = crypto_1.hash160(pubkey);
  const decompiled = bscript.decompile(script);
  if (decompiled === null) throw new Error('Unknown script error');
  return decompiled.some(element => {
    if (typeof element === 'number') return false;
    return element.equals(pubkey) || element.equals(pubkeyHash);
  });
}
function classifyScript(script) {
  if (isP2WPKH(script)) return 'witnesspubkeyhash';
  if (isP2PKH(script)) return 'pubkeyhash';
  if (isP2MS(script)) return 'multisig';
  if (isP2PK(script)) return 'pubkey';
  return 'nonstandard';
}
function range(n) {
  return [...Array(n).keys()];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "8a06de8a113371251a5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("765e5c44b6dae386e266");
exports.input = input;
const output = __webpack_require__("a2857f37ec520a46c7f1");
exports.output = output;


/***/ }),

/***/ "8b0c8f6bc1e2b4530d3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OP_0 {pubKeyHash}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const buffer = bscript.compile(script);
  return (
    buffer.length === 22 &&
    buffer[0] === script_1.OPS.OP_0 &&
    buffer[1] === 0x14
  );
}
exports.check = check;
check.toJSON = () => {
  return 'Witness pubKeyHash output';
};


/***/ }),

/***/ "928311dc04c6002b08e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};


/***/ }),

/***/ "989ba8f7d369b0d9568d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("eb70bc5b37c6933481f8");
exports.input = input;
const output = __webpack_require__("a94a7fc6003783a4e6e1");
exports.output = output;


/***/ }),

/***/ "9a99dd93893d01caf175":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const OPS = bscript.OPS;
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const OP_INT_BASE = OPS.OP_RESERVED; // OP_1 - 1
function stacksEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((x, i) => {
    return x.equals(b[i]);
  });
}
// input: OP_0 [signatures ...]
// output: m [pubKeys ...] n OP_CHECKMULTISIG
function p2ms(a, opts) {
  if (
    !a.input &&
    !a.output &&
    !(a.pubkeys && a.m !== undefined) &&
    !a.signatures
  )
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  function isAcceptableSignature(x) {
    return (
      bscript.isCanonicalScriptSignature(x) ||
      (opts.allowIncomplete && x === OPS.OP_0) !== undefined
    );
  }
  typef(
    {
      network: typef.maybe(typef.Object),
      m: typef.maybe(typef.Number),
      n: typef.maybe(typef.Number),
      output: typef.maybe(typef.Buffer),
      pubkeys: typef.maybe(typef.arrayOf(ecc.isPoint)),
      signatures: typef.maybe(typef.arrayOf(isAcceptableSignature)),
      input: typef.maybe(typef.Buffer),
    },
    a,
  );
  const network = a.network || networks_1.bitcoin;
  const o = { network };
  let chunks = [];
  let decoded = false;
  function decode(output) {
    if (decoded) return;
    decoded = true;
    chunks = bscript.decompile(output);
    o.m = chunks[0] - OP_INT_BASE;
    o.n = chunks[chunks.length - 2] - OP_INT_BASE;
    o.pubkeys = chunks.slice(1, -2);
  }
  lazy.prop(o, 'output', () => {
    if (!a.m) return;
    if (!o.n) return;
    if (!a.pubkeys) return;
    return bscript.compile(
      [].concat(
        OP_INT_BASE + a.m,
        a.pubkeys,
        OP_INT_BASE + o.n,
        OPS.OP_CHECKMULTISIG,
      ),
    );
  });
  lazy.prop(o, 'm', () => {
    if (!o.output) return;
    decode(o.output);
    return o.m;
  });
  lazy.prop(o, 'n', () => {
    if (!o.pubkeys) return;
    return o.pubkeys.length;
  });
  lazy.prop(o, 'pubkeys', () => {
    if (!a.output) return;
    decode(a.output);
    return o.pubkeys;
  });
  lazy.prop(o, 'signatures', () => {
    if (!a.input) return;
    return bscript.decompile(a.input).slice(1);
  });
  lazy.prop(o, 'input', () => {
    if (!a.signatures) return;
    return bscript.compile([OPS.OP_0].concat(a.signatures));
  });
  lazy.prop(o, 'witness', () => {
    if (!o.input) return;
    return [];
  });
  lazy.prop(o, 'name', () => {
    if (!o.m || !o.n) return;
    return `p2ms(${o.m} of ${o.n})`;
  });
  // extended validation
  if (opts.validate) {
    if (a.output) {
      decode(a.output);
      if (!typef.Number(chunks[0])) throw new TypeError('Output is invalid');
      if (!typef.Number(chunks[chunks.length - 2]))
        throw new TypeError('Output is invalid');
      if (chunks[chunks.length - 1] !== OPS.OP_CHECKMULTISIG)
        throw new TypeError('Output is invalid');
      if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== chunks.length - 3)
        throw new TypeError('Output is invalid');
      if (!o.pubkeys.every(x => ecc.isPoint(x)))
        throw new TypeError('Output is invalid');
      if (a.m !== undefined && a.m !== o.m) throw new TypeError('m mismatch');
      if (a.n !== undefined && a.n !== o.n) throw new TypeError('n mismatch');
      if (a.pubkeys && !stacksEqual(a.pubkeys, o.pubkeys))
        throw new TypeError('Pubkeys mismatch');
    }
    if (a.pubkeys) {
      if (a.n !== undefined && a.n !== a.pubkeys.length)
        throw new TypeError('Pubkey count mismatch');
      o.n = a.pubkeys.length;
      if (o.n < o.m) throw new TypeError('Pubkey count cannot be less than m');
    }
    if (a.signatures) {
      if (a.signatures.length < o.m)
        throw new TypeError('Not enough signatures provided');
      if (a.signatures.length > o.m)
        throw new TypeError('Too many signatures provided');
    }
    if (a.input) {
      if (a.input[0] !== OPS.OP_0) throw new TypeError('Input is invalid');
      if (
        o.signatures.length === 0 ||
        !o.signatures.every(isAcceptableSignature)
      )
        throw new TypeError('Input has invalid signature(s)');
      if (a.signatures && !stacksEqual(a.signatures, o.signatures))
        throw new TypeError('Signature mismatch');
      if (a.m !== undefined && a.m !== a.signatures.length)
        throw new TypeError('Signature count mismatch');
    }
  }
  return Object.assign(o, a);
}
exports.p2ms = p2ms;


/***/ }),

/***/ "9bd267f2f681d34bd26d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
function stacksEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((x, i) => {
    return x.equals(b[i]);
  });
}
// output: OP_RETURN ...
function p2data(a, opts) {
  if (!a.data && !a.output) throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      network: typef.maybe(typef.Object),
      output: typef.maybe(typef.Buffer),
      data: typef.maybe(typef.arrayOf(typef.Buffer)),
    },
    a,
  );
  const network = a.network || networks_1.bitcoin;
  const o = { name: 'embed', network };
  lazy.prop(o, 'output', () => {
    if (!a.data) return;
    return bscript.compile([OPS.OP_RETURN].concat(a.data));
  });
  lazy.prop(o, 'data', () => {
    if (!a.output) return;
    return bscript.decompile(a.output).slice(1);
  });
  // extended validation
  if (opts.validate) {
    if (a.output) {
      const chunks = bscript.decompile(a.output);
      if (chunks[0] !== OPS.OP_RETURN) throw new TypeError('Output is invalid');
      if (!chunks.slice(1).every(typef.Buffer))
        throw new TypeError('Output is invalid');
      if (a.data && !stacksEqual(a.data, o.data))
        throw new TypeError('Data mismatch');
    }
  }
  return Object.assign(o, a);
}
exports.p2data = p2data;


/***/ }),

/***/ "a125ad20952ba4c10fe4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
function prop(object, name, f) {
  Object.defineProperty(object, name, {
    configurable: true,
    enumerable: true,
    get() {
      const _value = f.call(this);
      this[name] = _value;
      return _value;
    },
    set(_value) {
      Object.defineProperty(this, name, {
        configurable: true,
        enumerable: true,
        value: _value,
        writable: true,
      });
    },
  });
}
exports.prop = prop;
function value(f) {
  let _value;
  return () => {
    if (_value !== undefined) return _value;
    _value = f();
    return _value;
  };
}
exports.value = value;


/***/ }),

/***/ "a2857f37ec520a46c7f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// {pubKey} OP_CHECKSIG
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const chunks = bscript.decompile(script);
  return (
    chunks.length === 2 &&
    bscript.isCanonicalPubKey(chunks[0]) &&
    chunks[1] === script_1.OPS.OP_CHECKSIG
  );
}
exports.check = check;
check.toJSON = () => {
  return 'pubKey output';
};


/***/ }),

/***/ "a4fb6f91f8da62fe4bb2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const bech32 = __webpack_require__("eb43aa378b3d50eaa0db");
const EMPTY_BUFFER = Buffer.alloc(0);
// witness: {signature} {pubKey}
// input: <>
// output: OP_0 {pubKeyHash}
function p2wpkh(a, opts) {
  if (!a.address && !a.hash && !a.output && !a.pubkey && !a.witness)
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      address: typef.maybe(typef.String),
      hash: typef.maybe(typef.BufferN(20)),
      input: typef.maybe(typef.BufferN(0)),
      network: typef.maybe(typef.Object),
      output: typef.maybe(typef.BufferN(22)),
      pubkey: typef.maybe(ecc.isPoint),
      signature: typef.maybe(bscript.isCanonicalScriptSignature),
      witness: typef.maybe(typef.arrayOf(typef.Buffer)),
    },
    a,
  );
  const _address = lazy.value(() => {
    const result = bech32.decode(a.address);
    const version = result.words.shift();
    const data = bech32.fromWords(result.words);
    return {
      version,
      prefix: result.prefix,
      data: Buffer.from(data),
    };
  });
  const network = a.network || networks_1.bitcoin;
  const o = { name: 'p2wpkh', network };
  lazy.prop(o, 'address', () => {
    if (!o.hash) return;
    const words = bech32.toWords(o.hash);
    words.unshift(0x00);
    return bech32.encode(network.bech32, words);
  });
  lazy.prop(o, 'hash', () => {
    if (a.output) return a.output.slice(2, 22);
    if (a.address) return _address().data;
    if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
  });
  lazy.prop(o, 'output', () => {
    if (!o.hash) return;
    return bscript.compile([OPS.OP_0, o.hash]);
  });
  lazy.prop(o, 'pubkey', () => {
    if (a.pubkey) return a.pubkey;
    if (!a.witness) return;
    return a.witness[1];
  });
  lazy.prop(o, 'signature', () => {
    if (!a.witness) return;
    return a.witness[0];
  });
  lazy.prop(o, 'input', () => {
    if (!o.witness) return;
    return EMPTY_BUFFER;
  });
  lazy.prop(o, 'witness', () => {
    if (!a.pubkey) return;
    if (!a.signature) return;
    return [a.signature, a.pubkey];
  });
  // extended validation
  if (opts.validate) {
    let hash = Buffer.from([]);
    if (a.address) {
      if (network && network.bech32 !== _address().prefix)
        throw new TypeError('Invalid prefix or Network mismatch');
      if (_address().version !== 0x00)
        throw new TypeError('Invalid address version');
      if (_address().data.length !== 20)
        throw new TypeError('Invalid address data');
      hash = _address().data;
    }
    if (a.hash) {
      if (hash.length > 0 && !hash.equals(a.hash))
        throw new TypeError('Hash mismatch');
      else hash = a.hash;
    }
    if (a.output) {
      if (
        a.output.length !== 22 ||
        a.output[0] !== OPS.OP_0 ||
        a.output[1] !== 0x14
      )
        throw new TypeError('Output is invalid');
      if (hash.length > 0 && !hash.equals(a.output.slice(2)))
        throw new TypeError('Hash mismatch');
      else hash = a.output.slice(2);
    }
    if (a.pubkey) {
      const pkh = bcrypto.hash160(a.pubkey);
      if (hash.length > 0 && !hash.equals(pkh))
        throw new TypeError('Hash mismatch');
      else hash = pkh;
      if (!ecc.isPoint(a.pubkey) || a.pubkey.length !== 33)
        throw new TypeError('Invalid pubkey for p2wpkh');
    }
    if (a.witness) {
      if (a.witness.length !== 2) throw new TypeError('Witness is invalid');
      if (!bscript.isCanonicalScriptSignature(a.witness[0]))
        throw new TypeError('Witness has invalid signature');
      if (!ecc.isPoint(a.witness[1]) || a.witness[1].length !== 33)
        throw new TypeError('Witness has invalid pubkey');
      if (a.signature && !a.signature.equals(a.witness[0]))
        throw new TypeError('Signature mismatch');
      if (a.pubkey && !a.pubkey.equals(a.witness[1]))
        throw new TypeError('Pubkey mismatch');
      const pkh = bcrypto.hash160(a.witness[1]);
      if (hash.length > 0 && !hash.equals(pkh))
        throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(o, a);
}
exports.p2wpkh = p2wpkh;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "a7f571aaad544c0a1b11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const output = __webpack_require__("5d9e5db4b273f00a777d");
exports.output = output;


/***/ }),

/***/ "a85b725d3464918a415c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const bech32 = __webpack_require__("eb43aa378b3d50eaa0db");
const EMPTY_BUFFER = Buffer.alloc(0);
function stacksEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((x, i) => {
    return x.equals(b[i]);
  });
}
function chunkHasUncompressedPubkey(chunk) {
  if (
    Buffer.isBuffer(chunk) &&
    chunk.length === 65 &&
    chunk[0] === 0x04 &&
    ecc.isPoint(chunk)
  ) {
    return true;
  } else {
    return false;
  }
}
// input: <>
// witness: [redeemScriptSig ...] {redeemScript}
// output: OP_0 {sha256(redeemScript)}
function p2wsh(a, opts) {
  if (!a.address && !a.hash && !a.output && !a.redeem && !a.witness)
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      network: typef.maybe(typef.Object),
      address: typef.maybe(typef.String),
      hash: typef.maybe(typef.BufferN(32)),
      output: typef.maybe(typef.BufferN(34)),
      redeem: typef.maybe({
        input: typef.maybe(typef.Buffer),
        network: typef.maybe(typef.Object),
        output: typef.maybe(typef.Buffer),
        witness: typef.maybe(typef.arrayOf(typef.Buffer)),
      }),
      input: typef.maybe(typef.BufferN(0)),
      witness: typef.maybe(typef.arrayOf(typef.Buffer)),
    },
    a,
  );
  const _address = lazy.value(() => {
    const result = bech32.decode(a.address);
    const version = result.words.shift();
    const data = bech32.fromWords(result.words);
    return {
      version,
      prefix: result.prefix,
      data: Buffer.from(data),
    };
  });
  const _rchunks = lazy.value(() => {
    return bscript.decompile(a.redeem.input);
  });
  let network = a.network;
  if (!network) {
    network = (a.redeem && a.redeem.network) || networks_1.bitcoin;
  }
  const o = { network };
  lazy.prop(o, 'address', () => {
    if (!o.hash) return;
    const words = bech32.toWords(o.hash);
    words.unshift(0x00);
    return bech32.encode(network.bech32, words);
  });
  lazy.prop(o, 'hash', () => {
    if (a.output) return a.output.slice(2);
    if (a.address) return _address().data;
    if (o.redeem && o.redeem.output) return bcrypto.sha256(o.redeem.output);
  });
  lazy.prop(o, 'output', () => {
    if (!o.hash) return;
    return bscript.compile([OPS.OP_0, o.hash]);
  });
  lazy.prop(o, 'redeem', () => {
    if (!a.witness) return;
    return {
      output: a.witness[a.witness.length - 1],
      input: EMPTY_BUFFER,
      witness: a.witness.slice(0, -1),
    };
  });
  lazy.prop(o, 'input', () => {
    if (!o.witness) return;
    return EMPTY_BUFFER;
  });
  lazy.prop(o, 'witness', () => {
    // transform redeem input to witness stack?
    if (
      a.redeem &&
      a.redeem.input &&
      a.redeem.input.length > 0 &&
      a.redeem.output &&
      a.redeem.output.length > 0
    ) {
      const stack = bscript.toStack(_rchunks());
      // assign, and blank the existing input
      o.redeem = Object.assign({ witness: stack }, a.redeem);
      o.redeem.input = EMPTY_BUFFER;
      return [].concat(stack, a.redeem.output);
    }
    if (!a.redeem) return;
    if (!a.redeem.output) return;
    if (!a.redeem.witness) return;
    return [].concat(a.redeem.witness, a.redeem.output);
  });
  lazy.prop(o, 'name', () => {
    const nameParts = ['p2wsh'];
    if (o.redeem !== undefined) nameParts.push(o.redeem.name);
    return nameParts.join('-');
  });
  // extended validation
  if (opts.validate) {
    let hash = Buffer.from([]);
    if (a.address) {
      if (_address().prefix !== network.bech32)
        throw new TypeError('Invalid prefix or Network mismatch');
      if (_address().version !== 0x00)
        throw new TypeError('Invalid address version');
      if (_address().data.length !== 32)
        throw new TypeError('Invalid address data');
      hash = _address().data;
    }
    if (a.hash) {
      if (hash.length > 0 && !hash.equals(a.hash))
        throw new TypeError('Hash mismatch');
      else hash = a.hash;
    }
    if (a.output) {
      if (
        a.output.length !== 34 ||
        a.output[0] !== OPS.OP_0 ||
        a.output[1] !== 0x20
      )
        throw new TypeError('Output is invalid');
      const hash2 = a.output.slice(2);
      if (hash.length > 0 && !hash.equals(hash2))
        throw new TypeError('Hash mismatch');
      else hash = hash2;
    }
    if (a.redeem) {
      if (a.redeem.network && a.redeem.network !== network)
        throw new TypeError('Network mismatch');
      // is there two redeem sources?
      if (
        a.redeem.input &&
        a.redeem.input.length > 0 &&
        a.redeem.witness &&
        a.redeem.witness.length > 0
      )
        throw new TypeError('Ambiguous witness source');
      // is the redeem output non-empty?
      if (a.redeem.output) {
        if (bscript.decompile(a.redeem.output).length === 0)
          throw new TypeError('Redeem.output is invalid');
        // match hash against other sources
        const hash2 = bcrypto.sha256(a.redeem.output);
        if (hash.length > 0 && !hash.equals(hash2))
          throw new TypeError('Hash mismatch');
        else hash = hash2;
      }
      if (a.redeem.input && !bscript.isPushOnly(_rchunks()))
        throw new TypeError('Non push-only scriptSig');
      if (
        a.witness &&
        a.redeem.witness &&
        !stacksEqual(a.witness, a.redeem.witness)
      )
        throw new TypeError('Witness and redeem.witness mismatch');
      if (
        (a.redeem.input && _rchunks().some(chunkHasUncompressedPubkey)) ||
        (a.redeem.output &&
          (bscript.decompile(a.redeem.output) || []).some(
            chunkHasUncompressedPubkey,
          ))
      ) {
        throw new TypeError(
          'redeem.input or redeem.output contains uncompressed pubkey',
        );
      }
    }
    if (a.witness && a.witness.length > 0) {
      const wScript = a.witness[a.witness.length - 1];
      if (a.redeem && a.redeem.output && !a.redeem.output.equals(wScript))
        throw new TypeError('Witness and redeem.output mismatch');
      if (
        a.witness.some(chunkHasUncompressedPubkey) ||
        (bscript.decompile(wScript) || []).some(chunkHasUncompressedPubkey)
      )
        throw new TypeError('Witness contains uncompressed pubkey');
    }
  }
  return Object.assign(o, a);
}
exports.p2wsh = p2wsh;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "a94a7fc6003783a4e6e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// m [pubKeys ...] n OP_CHECKMULTISIG
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const OP_INT_BASE = script_1.OPS.OP_RESERVED; // OP_1 - 1
function check(script, allowIncomplete) {
  const chunks = bscript.decompile(script);
  if (chunks.length < 4) return false;
  if (chunks[chunks.length - 1] !== script_1.OPS.OP_CHECKMULTISIG) return false;
  if (!types.Number(chunks[0])) return false;
  if (!types.Number(chunks[chunks.length - 2])) return false;
  const m = chunks[0] - OP_INT_BASE;
  const n = chunks[chunks.length - 2] - OP_INT_BASE;
  if (m <= 0) return false;
  if (n > 16) return false;
  if (m > n) return false;
  if (n !== chunks.length - 3) return false;
  if (allowIncomplete) return true;
  const keys = chunks.slice(1, -2);
  return keys.every(bscript.isCanonicalPubKey);
}
exports.check = check;
check.toJSON = () => {
  return 'multi-sig output';
};


/***/ }),

/***/ "b6ddff02878d58adaad7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const bip32 = __webpack_require__("6f7d973c27d1f8f71596");
exports.bip32 = bip32;
const address = __webpack_require__("247180d06ad5f0d3ae5f");
exports.address = address;
const crypto = __webpack_require__("2d6e5edc7083b0a69b78");
exports.crypto = crypto;
const ECPair = __webpack_require__("64ac9276262faec88968");
exports.ECPair = ECPair;
const networks = __webpack_require__("928311dc04c6002b08e8");
exports.networks = networks;
const payments = __webpack_require__("8181d1a037f7ee7c0bf5");
exports.payments = payments;
const script = __webpack_require__("c52e0ee7ccfeb64f9cf6");
exports.script = script;
var block_1 = __webpack_require__("5c1198e48f2c6e65e14b");
exports.Block = block_1.Block;
var psbt_1 = __webpack_require__("86f874783a6e655659bf");
exports.Psbt = psbt_1.Psbt;
var script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
exports.opcodes = script_1.OPS;
var transaction_1 = __webpack_require__("f49d9113a79536d617f0");
exports.Transaction = transaction_1.Transaction;
var transaction_builder_1 = __webpack_require__("db1f098a8f9cf34f7a37");
exports.TransactionBuilder = transaction_builder_1.TransactionBuilder;


/***/ }),

/***/ "be8a53eb8cb69afa8539":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const input = __webpack_require__("53a0834872f8472c4ada");
exports.input = input;
const output = __webpack_require__("ee959e333f530563024f");
exports.output = output;


/***/ }),

/***/ "beaf39890650aa5299f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const varuint = __webpack_require__("4a25c0f2b2142de6fa09");
// https://github.com/feross/buffer/blob/master/index.js#L1127
function verifuint(value, max) {
  if (typeof value !== 'number')
    throw new Error('cannot write a non-number as a number');
  if (value < 0)
    throw new Error('specified a negative value for writing an unsigned value');
  if (value > max) throw new Error('RangeError: value out of range');
  if (Math.floor(value) !== value)
    throw new Error('value has a fractional component');
}
function readUInt64LE(buffer, offset) {
  const a = buffer.readUInt32LE(offset);
  let b = buffer.readUInt32LE(offset + 4);
  b *= 0x100000000;
  verifuint(b + a, 0x001fffffffffffff);
  return b + a;
}
exports.readUInt64LE = readUInt64LE;
function writeUInt64LE(buffer, value, offset) {
  verifuint(value, 0x001fffffffffffff);
  buffer.writeInt32LE(value & -1, offset);
  buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
  return offset + 8;
}
exports.writeUInt64LE = writeUInt64LE;
function reverseBuffer(buffer) {
  if (buffer.length < 1) return buffer;
  let j = buffer.length - 1;
  let tmp = 0;
  for (let i = 0; i < buffer.length / 2; i++) {
    tmp = buffer[i];
    buffer[i] = buffer[j];
    buffer[j] = tmp;
    j--;
  }
  return buffer;
}
exports.reverseBuffer = reverseBuffer;
function cloneBuffer(buffer) {
  const clone = Buffer.allocUnsafe(buffer.length);
  buffer.copy(clone);
  return clone;
}
exports.cloneBuffer = cloneBuffer;
/**
 * Helper class for serialization of bitcoin data types into a pre-allocated buffer.
 */
class BufferWriter {
  constructor(buffer, offset = 0) {
    this.buffer = buffer;
    this.offset = offset;
    typeforce(types.tuple(types.Buffer, types.UInt32), [buffer, offset]);
  }
  writeUInt8(i) {
    this.offset = this.buffer.writeUInt8(i, this.offset);
  }
  writeInt32(i) {
    this.offset = this.buffer.writeInt32LE(i, this.offset);
  }
  writeUInt32(i) {
    this.offset = this.buffer.writeUInt32LE(i, this.offset);
  }
  writeUInt64(i) {
    this.offset = writeUInt64LE(this.buffer, i, this.offset);
  }
  writeVarInt(i) {
    varuint.encode(i, this.buffer, this.offset);
    this.offset += varuint.encode.bytes;
  }
  writeSlice(slice) {
    if (this.buffer.length < this.offset + slice.length) {
      throw new Error('Cannot write slice out of bounds');
    }
    this.offset += slice.copy(this.buffer, this.offset);
  }
  writeVarSlice(slice) {
    this.writeVarInt(slice.length);
    this.writeSlice(slice);
  }
  writeVector(vector) {
    this.writeVarInt(vector.length);
    vector.forEach(buf => this.writeVarSlice(buf));
  }
}
exports.BufferWriter = BufferWriter;
/**
 * Helper class for reading of bitcoin data types from a buffer.
 */
class BufferReader {
  constructor(buffer, offset = 0) {
    this.buffer = buffer;
    this.offset = offset;
    typeforce(types.tuple(types.Buffer, types.UInt32), [buffer, offset]);
  }
  readUInt8() {
    const result = this.buffer.readUInt8(this.offset);
    this.offset++;
    return result;
  }
  readInt32() {
    const result = this.buffer.readInt32LE(this.offset);
    this.offset += 4;
    return result;
  }
  readUInt32() {
    const result = this.buffer.readUInt32LE(this.offset);
    this.offset += 4;
    return result;
  }
  readUInt64() {
    const result = readUInt64LE(this.buffer, this.offset);
    this.offset += 8;
    return result;
  }
  readVarInt() {
    const vi = varuint.decode(this.buffer, this.offset);
    this.offset += varuint.decode.bytes;
    return vi;
  }
  readSlice(n) {
    if (this.buffer.length < this.offset + n) {
      throw new Error('Cannot read slice out of bounds');
    }
    const result = this.buffer.slice(this.offset, this.offset + n);
    this.offset += n;
    return result;
  }
  readVarSlice() {
    return this.readSlice(this.readVarInt());
  }
  readVector() {
    const count = this.readVarInt();
    const vector = [];
    for (let i = 0; i < count; i++) vector.push(this.readVarSlice());
    return vector;
  }
}
exports.BufferReader = BufferReader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "bf66a79114c6132e39fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
// input: {signature}
// output: {pubKey} OP_CHECKSIG
function p2pk(a, opts) {
  if (!a.input && !a.output && !a.pubkey && !a.input && !a.signature)
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      network: typef.maybe(typef.Object),
      output: typef.maybe(typef.Buffer),
      pubkey: typef.maybe(ecc.isPoint),
      signature: typef.maybe(bscript.isCanonicalScriptSignature),
      input: typef.maybe(typef.Buffer),
    },
    a,
  );
  const _chunks = lazy.value(() => {
    return bscript.decompile(a.input);
  });
  const network = a.network || networks_1.bitcoin;
  const o = { name: 'p2pk', network };
  lazy.prop(o, 'output', () => {
    if (!a.pubkey) return;
    return bscript.compile([a.pubkey, OPS.OP_CHECKSIG]);
  });
  lazy.prop(o, 'pubkey', () => {
    if (!a.output) return;
    return a.output.slice(1, -1);
  });
  lazy.prop(o, 'signature', () => {
    if (!a.input) return;
    return _chunks()[0];
  });
  lazy.prop(o, 'input', () => {
    if (!a.signature) return;
    return bscript.compile([a.signature]);
  });
  lazy.prop(o, 'witness', () => {
    if (!o.input) return;
    return [];
  });
  // extended validation
  if (opts.validate) {
    if (a.output) {
      if (a.output[a.output.length - 1] !== OPS.OP_CHECKSIG)
        throw new TypeError('Output is invalid');
      if (!ecc.isPoint(o.pubkey))
        throw new TypeError('Output pubkey is invalid');
      if (a.pubkey && !a.pubkey.equals(o.pubkey))
        throw new TypeError('Pubkey mismatch');
    }
    if (a.signature) {
      if (a.input && !a.input.equals(o.input))
        throw new TypeError('Signature mismatch');
    }
    if (a.input) {
      if (_chunks().length !== 1) throw new TypeError('Input is invalid');
      if (!bscript.isCanonicalScriptSignature(o.signature))
        throw new TypeError('Input has invalid signature');
    }
  }
  return Object.assign(o, a);
}
exports.p2pk = p2pk;


/***/ }),

/***/ "c52e0ee7ccfeb64f9cf6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const scriptNumber = __webpack_require__("08030d8a45f1cae3f1b1");
const scriptSignature = __webpack_require__("5da7ca624d4d72bb8522");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const bip66 = __webpack_require__("78631df91a52183a6424");
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const pushdata = __webpack_require__("d436b4f39a04687e33e4");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
exports.OPS = __webpack_require__("9b46ea97ce621f81d37e");
const REVERSE_OPS = __webpack_require__("13c2c4baccacc40e4865");
const OP_INT_BASE = exports.OPS.OP_RESERVED; // OP_1 - 1
function isOPInt(value) {
  return (
    types.Number(value) &&
    (value === exports.OPS.OP_0 ||
      (value >= exports.OPS.OP_1 && value <= exports.OPS.OP_16) ||
      value === exports.OPS.OP_1NEGATE)
  );
}
function isPushOnlyChunk(value) {
  return types.Buffer(value) || isOPInt(value);
}
function isPushOnly(value) {
  return types.Array(value) && value.every(isPushOnlyChunk);
}
exports.isPushOnly = isPushOnly;
function asMinimalOP(buffer) {
  if (buffer.length === 0) return exports.OPS.OP_0;
  if (buffer.length !== 1) return;
  if (buffer[0] >= 1 && buffer[0] <= 16) return OP_INT_BASE + buffer[0];
  if (buffer[0] === 0x81) return exports.OPS.OP_1NEGATE;
}
function chunksIsBuffer(buf) {
  return Buffer.isBuffer(buf);
}
function chunksIsArray(buf) {
  return types.Array(buf);
}
function singleChunkIsBuffer(buf) {
  return Buffer.isBuffer(buf);
}
function compile(chunks) {
  // TODO: remove me
  if (chunksIsBuffer(chunks)) return chunks;
  typeforce(types.Array, chunks);
  const bufferSize = chunks.reduce((accum, chunk) => {
    // data chunk
    if (singleChunkIsBuffer(chunk)) {
      // adhere to BIP62.3, minimal push policy
      if (chunk.length === 1 && asMinimalOP(chunk) !== undefined) {
        return accum + 1;
      }
      return accum + pushdata.encodingLength(chunk.length) + chunk.length;
    }
    // opcode
    return accum + 1;
  }, 0.0);
  const buffer = Buffer.allocUnsafe(bufferSize);
  let offset = 0;
  chunks.forEach(chunk => {
    // data chunk
    if (singleChunkIsBuffer(chunk)) {
      // adhere to BIP62.3, minimal push policy
      const opcode = asMinimalOP(chunk);
      if (opcode !== undefined) {
        buffer.writeUInt8(opcode, offset);
        offset += 1;
        return;
      }
      offset += pushdata.encode(buffer, chunk.length, offset);
      chunk.copy(buffer, offset);
      offset += chunk.length;
      // opcode
    } else {
      buffer.writeUInt8(chunk, offset);
      offset += 1;
    }
  });
  if (offset !== buffer.length) throw new Error('Could not decode chunks');
  return buffer;
}
exports.compile = compile;
function decompile(buffer) {
  // TODO: remove me
  if (chunksIsArray(buffer)) return buffer;
  typeforce(types.Buffer, buffer);
  const chunks = [];
  let i = 0;
  while (i < buffer.length) {
    const opcode = buffer[i];
    // data chunk
    if (opcode > exports.OPS.OP_0 && opcode <= exports.OPS.OP_PUSHDATA4) {
      const d = pushdata.decode(buffer, i);
      // did reading a pushDataInt fail?
      if (d === null) return null;
      i += d.size;
      // attempt to read too much data?
      if (i + d.number > buffer.length) return null;
      const data = buffer.slice(i, i + d.number);
      i += d.number;
      // decompile minimally
      const op = asMinimalOP(data);
      if (op !== undefined) {
        chunks.push(op);
      } else {
        chunks.push(data);
      }
      // opcode
    } else {
      chunks.push(opcode);
      i += 1;
    }
  }
  return chunks;
}
exports.decompile = decompile;
function toASM(chunks) {
  if (chunksIsBuffer(chunks)) {
    chunks = decompile(chunks);
  }
  return chunks
    .map(chunk => {
      // data?
      if (singleChunkIsBuffer(chunk)) {
        const op = asMinimalOP(chunk);
        if (op === undefined) return chunk.toString('hex');
        chunk = op;
      }
      // opcode!
      return REVERSE_OPS[chunk];
    })
    .join(' ');
}
exports.toASM = toASM;
function fromASM(asm) {
  typeforce(types.String, asm);
  return compile(
    asm.split(' ').map(chunkStr => {
      // opcode?
      if (exports.OPS[chunkStr] !== undefined) return exports.OPS[chunkStr];
      typeforce(types.Hex, chunkStr);
      // data!
      return Buffer.from(chunkStr, 'hex');
    }),
  );
}
exports.fromASM = fromASM;
function toStack(chunks) {
  chunks = decompile(chunks);
  typeforce(isPushOnly, chunks);
  return chunks.map(op => {
    if (singleChunkIsBuffer(op)) return op;
    if (op === exports.OPS.OP_0) return Buffer.allocUnsafe(0);
    return scriptNumber.encode(op - OP_INT_BASE);
  });
}
exports.toStack = toStack;
function isCanonicalPubKey(buffer) {
  return ecc.isPoint(buffer);
}
exports.isCanonicalPubKey = isCanonicalPubKey;
function isDefinedHashType(hashType) {
  const hashTypeMod = hashType & ~0x80;
  // return hashTypeMod > SIGHASH_ALL && hashTypeMod < SIGHASH_SINGLE
  return hashTypeMod > 0x00 && hashTypeMod < 0x04;
}
exports.isDefinedHashType = isDefinedHashType;
function isCanonicalScriptSignature(buffer) {
  if (!Buffer.isBuffer(buffer)) return false;
  if (!isDefinedHashType(buffer[buffer.length - 1])) return false;
  return bip66.check(buffer.slice(0, -1));
}
exports.isCanonicalScriptSignature = isCanonicalScriptSignature;
// tslint:disable-next-line variable-name
exports.number = scriptNumber;
exports.signature = scriptSignature;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "d37f60d760ff0771ffa9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const networks_1 = __webpack_require__("928311dc04c6002b08e8");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const lazy = __webpack_require__("a125ad20952ba4c10fe4");
const typef = __webpack_require__("4982e4a9d5d9cc0006c5");
const OPS = bscript.OPS;
const ecc = __webpack_require__("8b82fb7b88c11c89712a");
const bs58check = __webpack_require__("53ead306b62e35ae6518");
// input: {signature} {pubkey}
// output: OP_DUP OP_HASH160 {hash160(pubkey)} OP_EQUALVERIFY OP_CHECKSIG
function p2pkh(a, opts) {
  if (!a.address && !a.hash && !a.output && !a.pubkey && !a.input)
    throw new TypeError('Not enough data');
  opts = Object.assign({ validate: true }, opts || {});
  typef(
    {
      network: typef.maybe(typef.Object),
      address: typef.maybe(typef.String),
      hash: typef.maybe(typef.BufferN(20)),
      output: typef.maybe(typef.BufferN(25)),
      pubkey: typef.maybe(ecc.isPoint),
      signature: typef.maybe(bscript.isCanonicalScriptSignature),
      input: typef.maybe(typef.Buffer),
    },
    a,
  );
  const _address = lazy.value(() => {
    const payload = bs58check.decode(a.address);
    const version = payload.readUInt8(0);
    const hash = payload.slice(1);
    return { version, hash };
  });
  const _chunks = lazy.value(() => {
    return bscript.decompile(a.input);
  });
  const network = a.network || networks_1.bitcoin;
  const o = { name: 'p2pkh', network };
  lazy.prop(o, 'address', () => {
    if (!o.hash) return;
    const payload = Buffer.allocUnsafe(21);
    payload.writeUInt8(network.pubKeyHash, 0);
    o.hash.copy(payload, 1);
    return bs58check.encode(payload);
  });
  lazy.prop(o, 'hash', () => {
    if (a.output) return a.output.slice(3, 23);
    if (a.address) return _address().hash;
    if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
  });
  lazy.prop(o, 'output', () => {
    if (!o.hash) return;
    return bscript.compile([
      OPS.OP_DUP,
      OPS.OP_HASH160,
      o.hash,
      OPS.OP_EQUALVERIFY,
      OPS.OP_CHECKSIG,
    ]);
  });
  lazy.prop(o, 'pubkey', () => {
    if (!a.input) return;
    return _chunks()[1];
  });
  lazy.prop(o, 'signature', () => {
    if (!a.input) return;
    return _chunks()[0];
  });
  lazy.prop(o, 'input', () => {
    if (!a.pubkey) return;
    if (!a.signature) return;
    return bscript.compile([a.signature, a.pubkey]);
  });
  lazy.prop(o, 'witness', () => {
    if (!o.input) return;
    return [];
  });
  // extended validation
  if (opts.validate) {
    let hash = Buffer.from([]);
    if (a.address) {
      if (_address().version !== network.pubKeyHash)
        throw new TypeError('Invalid version or Network mismatch');
      if (_address().hash.length !== 20) throw new TypeError('Invalid address');
      hash = _address().hash;
    }
    if (a.hash) {
      if (hash.length > 0 && !hash.equals(a.hash))
        throw new TypeError('Hash mismatch');
      else hash = a.hash;
    }
    if (a.output) {
      if (
        a.output.length !== 25 ||
        a.output[0] !== OPS.OP_DUP ||
        a.output[1] !== OPS.OP_HASH160 ||
        a.output[2] !== 0x14 ||
        a.output[23] !== OPS.OP_EQUALVERIFY ||
        a.output[24] !== OPS.OP_CHECKSIG
      )
        throw new TypeError('Output is invalid');
      const hash2 = a.output.slice(3, 23);
      if (hash.length > 0 && !hash.equals(hash2))
        throw new TypeError('Hash mismatch');
      else hash = hash2;
    }
    if (a.pubkey) {
      const pkh = bcrypto.hash160(a.pubkey);
      if (hash.length > 0 && !hash.equals(pkh))
        throw new TypeError('Hash mismatch');
      else hash = pkh;
    }
    if (a.input) {
      const chunks = _chunks();
      if (chunks.length !== 2) throw new TypeError('Input is invalid');
      if (!bscript.isCanonicalScriptSignature(chunks[0]))
        throw new TypeError('Input has invalid signature');
      if (!ecc.isPoint(chunks[1]))
        throw new TypeError('Input has invalid pubkey');
      if (a.signature && !a.signature.equals(chunks[0]))
        throw new TypeError('Signature mismatch');
      if (a.pubkey && !a.pubkey.equals(chunks[1]))
        throw new TypeError('Pubkey mismatch');
      const pkh = bcrypto.hash160(chunks[1]);
      if (hash.length > 0 && !hash.equals(pkh))
        throw new TypeError('Hash mismatch');
    }
  }
  return Object.assign(o, a);
}
exports.p2pkh = p2pkh;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "db1f098a8f9cf34f7a37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const baddress = __webpack_require__("247180d06ad5f0d3ae5f");
const bufferutils_1 = __webpack_require__("beaf39890650aa5299f8");
const classify = __webpack_require__("20a0049eaa138cdc1fa2");
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const ECPair = __webpack_require__("64ac9276262faec88968");
const networks = __webpack_require__("928311dc04c6002b08e8");
const payments = __webpack_require__("8181d1a037f7ee7c0bf5");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const transaction_1 = __webpack_require__("f49d9113a79536d617f0");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const SCRIPT_TYPES = classify.types;
const PREVOUT_TYPES = new Set([
  // Raw
  'p2pkh',
  'p2pk',
  'p2wpkh',
  'p2ms',
  // P2SH wrapped
  'p2sh-p2pkh',
  'p2sh-p2pk',
  'p2sh-p2wpkh',
  'p2sh-p2ms',
  // P2WSH wrapped
  'p2wsh-p2pkh',
  'p2wsh-p2pk',
  'p2wsh-p2ms',
  // P2SH-P2WSH wrapper
  'p2sh-p2wsh-p2pkh',
  'p2sh-p2wsh-p2pk',
  'p2sh-p2wsh-p2ms',
]);
function tfMessage(type, value, message) {
  try {
    typeforce(type, value);
  } catch (err) {
    throw new Error(message);
  }
}
function txIsString(tx) {
  return typeof tx === 'string' || tx instanceof String;
}
function txIsTransaction(tx) {
  return tx instanceof transaction_1.Transaction;
}
class TransactionBuilder {
  // WARNING: maximumFeeRate is __NOT__ to be relied on,
  //          it's just another potential safety mechanism (safety in-depth)
  constructor(network = networks.bitcoin, maximumFeeRate = 2500) {
    this.network = network;
    this.maximumFeeRate = maximumFeeRate;
    this.__PREV_TX_SET = {};
    this.__INPUTS = [];
    this.__TX = new transaction_1.Transaction();
    this.__TX.version = 2;
    this.__USE_LOW_R = false;
    console.warn(
      'Deprecation Warning: TransactionBuilder will be removed in the future. ' +
        '(v6.x.x or later) Please use the Psbt class instead. Examples of usage ' +
        'are available in the transactions-psbt.js integration test file on our ' +
        'Github. A high level explanation is available in the psbt.ts and psbt.js ' +
        'files as well.',
    );
  }
  static fromTransaction(transaction, network) {
    const txb = new TransactionBuilder(network);
    // Copy transaction fields
    txb.setVersion(transaction.version);
    txb.setLockTime(transaction.locktime);
    // Copy outputs (done first to avoid signature invalidation)
    transaction.outs.forEach(txOut => {
      txb.addOutput(txOut.script, txOut.value);
    });
    // Copy inputs
    transaction.ins.forEach(txIn => {
      txb.__addInputUnsafe(txIn.hash, txIn.index, {
        sequence: txIn.sequence,
        script: txIn.script,
        witness: txIn.witness,
      });
    });
    // fix some things not possible through the public API
    txb.__INPUTS.forEach((input, i) => {
      fixMultisigOrder(input, transaction, i);
    });
    return txb;
  }
  setLowR(setting) {
    typeforce(typeforce.maybe(typeforce.Boolean), setting);
    if (setting === undefined) {
      setting = true;
    }
    this.__USE_LOW_R = setting;
    return setting;
  }
  setLockTime(locktime) {
    typeforce(types.UInt32, locktime);
    // if any signatures exist, throw
    if (
      this.__INPUTS.some(input => {
        if (!input.signatures) return false;
        return input.signatures.some(s => s !== undefined);
      })
    ) {
      throw new Error('No, this would invalidate signatures');
    }
    this.__TX.locktime = locktime;
  }
  setVersion(version) {
    typeforce(types.UInt32, version);
    // XXX: this might eventually become more complex depending on what the versions represent
    this.__TX.version = version;
  }
  addInput(txHash, vout, sequence, prevOutScript) {
    if (!this.__canModifyInputs()) {
      throw new Error('No, this would invalidate signatures');
    }
    let value;
    // is it a hex string?
    if (txIsString(txHash)) {
      // transaction hashs's are displayed in reverse order, un-reverse it
      txHash = bufferutils_1.reverseBuffer(Buffer.from(txHash, 'hex'));
      // is it a Transaction object?
    } else if (txIsTransaction(txHash)) {
      const txOut = txHash.outs[vout];
      prevOutScript = txOut.script;
      value = txOut.value;
      txHash = txHash.getHash(false);
    }
    return this.__addInputUnsafe(txHash, vout, {
      sequence,
      prevOutScript,
      value,
    });
  }
  addOutput(scriptPubKey, value) {
    if (!this.__canModifyOutputs()) {
      throw new Error('No, this would invalidate signatures');
    }
    // Attempt to get a script if it's a base58 or bech32 address string
    if (typeof scriptPubKey === 'string') {
      scriptPubKey = baddress.toOutputScript(scriptPubKey, this.network);
    }
    return this.__TX.addOutput(scriptPubKey, value);
  }
  build() {
    return this.__build(false);
  }
  buildIncomplete() {
    return this.__build(true);
  }
  sign(
    signParams,
    keyPair,
    redeemScript,
    hashType,
    witnessValue,
    witnessScript,
  ) {
    trySign(
      getSigningData(
        this.network,
        this.__INPUTS,
        this.__needsOutputs.bind(this),
        this.__TX,
        signParams,
        keyPair,
        redeemScript,
        hashType,
        witnessValue,
        witnessScript,
        this.__USE_LOW_R,
      ),
    );
  }
  __addInputUnsafe(txHash, vout, options) {
    if (transaction_1.Transaction.isCoinbaseHash(txHash)) {
      throw new Error('coinbase inputs not supported');
    }
    const prevTxOut = txHash.toString('hex') + ':' + vout;
    if (this.__PREV_TX_SET[prevTxOut] !== undefined)
      throw new Error('Duplicate TxOut: ' + prevTxOut);
    let input = {};
    // derive what we can from the scriptSig
    if (options.script !== undefined) {
      input = expandInput(options.script, options.witness || []);
    }
    // if an input value was given, retain it
    if (options.value !== undefined) {
      input.value = options.value;
    }
    // derive what we can from the previous transactions output script
    if (!input.prevOutScript && options.prevOutScript) {
      let prevOutType;
      if (!input.pubkeys && !input.signatures) {
        const expanded = expandOutput(options.prevOutScript);
        if (expanded.pubkeys) {
          input.pubkeys = expanded.pubkeys;
          input.signatures = expanded.signatures;
        }
        prevOutType = expanded.type;
      }
      input.prevOutScript = options.prevOutScript;
      input.prevOutType = prevOutType || classify.output(options.prevOutScript);
    }
    const vin = this.__TX.addInput(
      txHash,
      vout,
      options.sequence,
      options.scriptSig,
    );
    this.__INPUTS[vin] = input;
    this.__PREV_TX_SET[prevTxOut] = true;
    return vin;
  }
  __build(allowIncomplete) {
    if (!allowIncomplete) {
      if (!this.__TX.ins.length) throw new Error('Transaction has no inputs');
      if (!this.__TX.outs.length) throw new Error('Transaction has no outputs');
    }
    const tx = this.__TX.clone();
    // create script signatures from inputs
    this.__INPUTS.forEach((input, i) => {
      if (!input.prevOutType && !allowIncomplete)
        throw new Error('Transaction is not complete');
      const result = build(input.prevOutType, input, allowIncomplete);
      if (!result) {
        if (!allowIncomplete && input.prevOutType === SCRIPT_TYPES.NONSTANDARD)
          throw new Error('Unknown input type');
        if (!allowIncomplete) throw new Error('Not enough information');
        return;
      }
      tx.setInputScript(i, result.input);
      tx.setWitness(i, result.witness);
    });
    if (!allowIncomplete) {
      // do not rely on this, its merely a last resort
      if (this.__overMaximumFees(tx.virtualSize())) {
        throw new Error('Transaction has absurd fees');
      }
    }
    return tx;
  }
  __canModifyInputs() {
    return this.__INPUTS.every(input => {
      if (!input.signatures) return true;
      return input.signatures.every(signature => {
        if (!signature) return true;
        const hashType = signatureHashType(signature);
        // if SIGHASH_ANYONECANPAY is set, signatures would not
        // be invalidated by more inputs
        return (
          (hashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY) !== 0
        );
      });
    });
  }
  __needsOutputs(signingHashType) {
    if (signingHashType === transaction_1.Transaction.SIGHASH_ALL) {
      return this.__TX.outs.length === 0;
    }
    // if inputs are being signed with SIGHASH_NONE, we don't strictly need outputs
    // .build() will fail, but .buildIncomplete() is OK
    return (
      this.__TX.outs.length === 0 &&
      this.__INPUTS.some(input => {
        if (!input.signatures) return false;
        return input.signatures.some(signature => {
          if (!signature) return false; // no signature, no issue
          const hashType = signatureHashType(signature);
          if (hashType & transaction_1.Transaction.SIGHASH_NONE) return false; // SIGHASH_NONE doesn't care about outputs
          return true; // SIGHASH_* does care
        });
      })
    );
  }
  __canModifyOutputs() {
    const nInputs = this.__TX.ins.length;
    const nOutputs = this.__TX.outs.length;
    return this.__INPUTS.every(input => {
      if (input.signatures === undefined) return true;
      return input.signatures.every(signature => {
        if (!signature) return true;
        const hashType = signatureHashType(signature);
        const hashTypeMod = hashType & 0x1f;
        if (hashTypeMod === transaction_1.Transaction.SIGHASH_NONE) return true;
        if (hashTypeMod === transaction_1.Transaction.SIGHASH_SINGLE) {
          // if SIGHASH_SINGLE is set, and nInputs > nOutputs
          // some signatures would be invalidated by the addition
          // of more outputs
          return nInputs <= nOutputs;
        }
        return false;
      });
    });
  }
  __overMaximumFees(bytes) {
    // not all inputs will have .value defined
    const incoming = this.__INPUTS.reduce((a, x) => a + (x.value >>> 0), 0);
    // but all outputs do, and if we have any input value
    // we can immediately determine if the outputs are too small
    const outgoing = this.__TX.outs.reduce((a, x) => a + x.value, 0);
    const fee = incoming - outgoing;
    const feeRate = fee / bytes;
    return feeRate > this.maximumFeeRate;
  }
}
exports.TransactionBuilder = TransactionBuilder;
function expandInput(scriptSig, witnessStack, type, scriptPubKey) {
  if (scriptSig.length === 0 && witnessStack.length === 0) return {};
  if (!type) {
    let ssType = classify.input(scriptSig, true);
    let wsType = classify.witness(witnessStack, true);
    if (ssType === SCRIPT_TYPES.NONSTANDARD) ssType = undefined;
    if (wsType === SCRIPT_TYPES.NONSTANDARD) wsType = undefined;
    type = ssType || wsType;
  }
  switch (type) {
    case SCRIPT_TYPES.P2WPKH: {
      const { output, pubkey, signature } = payments.p2wpkh({
        witness: witnessStack,
      });
      return {
        prevOutScript: output,
        prevOutType: SCRIPT_TYPES.P2WPKH,
        pubkeys: [pubkey],
        signatures: [signature],
      };
    }
    case SCRIPT_TYPES.P2PKH: {
      const { output, pubkey, signature } = payments.p2pkh({
        input: scriptSig,
      });
      return {
        prevOutScript: output,
        prevOutType: SCRIPT_TYPES.P2PKH,
        pubkeys: [pubkey],
        signatures: [signature],
      };
    }
    case SCRIPT_TYPES.P2PK: {
      const { signature } = payments.p2pk({ input: scriptSig });
      return {
        prevOutType: SCRIPT_TYPES.P2PK,
        pubkeys: [undefined],
        signatures: [signature],
      };
    }
    case SCRIPT_TYPES.P2MS: {
      const { m, pubkeys, signatures } = payments.p2ms(
        {
          input: scriptSig,
          output: scriptPubKey,
        },
        { allowIncomplete: true },
      );
      return {
        prevOutType: SCRIPT_TYPES.P2MS,
        pubkeys,
        signatures,
        maxSignatures: m,
      };
    }
  }
  if (type === SCRIPT_TYPES.P2SH) {
    const { output, redeem } = payments.p2sh({
      input: scriptSig,
      witness: witnessStack,
    });
    const outputType = classify.output(redeem.output);
    const expanded = expandInput(
      redeem.input,
      redeem.witness,
      outputType,
      redeem.output,
    );
    if (!expanded.prevOutType) return {};
    return {
      prevOutScript: output,
      prevOutType: SCRIPT_TYPES.P2SH,
      redeemScript: redeem.output,
      redeemScriptType: expanded.prevOutType,
      witnessScript: expanded.witnessScript,
      witnessScriptType: expanded.witnessScriptType,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
    };
  }
  if (type === SCRIPT_TYPES.P2WSH) {
    const { output, redeem } = payments.p2wsh({
      input: scriptSig,
      witness: witnessStack,
    });
    const outputType = classify.output(redeem.output);
    let expanded;
    if (outputType === SCRIPT_TYPES.P2WPKH) {
      expanded = expandInput(redeem.input, redeem.witness, outputType);
    } else {
      expanded = expandInput(
        bscript.compile(redeem.witness),
        [],
        outputType,
        redeem.output,
      );
    }
    if (!expanded.prevOutType) return {};
    return {
      prevOutScript: output,
      prevOutType: SCRIPT_TYPES.P2WSH,
      witnessScript: redeem.output,
      witnessScriptType: expanded.prevOutType,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
    };
  }
  return {
    prevOutType: SCRIPT_TYPES.NONSTANDARD,
    prevOutScript: scriptSig,
  };
}
// could be done in expandInput, but requires the original Transaction for hashForSignature
function fixMultisigOrder(input, transaction, vin) {
  if (input.redeemScriptType !== SCRIPT_TYPES.P2MS || !input.redeemScript)
    return;
  if (input.pubkeys.length === input.signatures.length) return;
  const unmatched = input.signatures.concat();
  input.signatures = input.pubkeys.map(pubKey => {
    const keyPair = ECPair.fromPublicKey(pubKey);
    let match;
    // check for a signature
    unmatched.some((signature, i) => {
      // skip if undefined || OP_0
      if (!signature) return false;
      // TODO: avoid O(n) hashForSignature
      const parsed = bscript.signature.decode(signature);
      const hash = transaction.hashForSignature(
        vin,
        input.redeemScript,
        parsed.hashType,
      );
      // skip if signature does not match pubKey
      if (!keyPair.verify(hash, parsed.signature)) return false;
      // remove matched signature from unmatched
      unmatched[i] = undefined;
      match = signature;
      return true;
    });
    return match;
  });
}
function expandOutput(script, ourPubKey) {
  typeforce(types.Buffer, script);
  const type = classify.output(script);
  switch (type) {
    case SCRIPT_TYPES.P2PKH: {
      if (!ourPubKey) return { type };
      // does our hash160(pubKey) match the output scripts?
      const pkh1 = payments.p2pkh({ output: script }).hash;
      const pkh2 = bcrypto.hash160(ourPubKey);
      if (!pkh1.equals(pkh2)) return { type };
      return {
        type,
        pubkeys: [ourPubKey],
        signatures: [undefined],
      };
    }
    case SCRIPT_TYPES.P2WPKH: {
      if (!ourPubKey) return { type };
      // does our hash160(pubKey) match the output scripts?
      const wpkh1 = payments.p2wpkh({ output: script }).hash;
      const wpkh2 = bcrypto.hash160(ourPubKey);
      if (!wpkh1.equals(wpkh2)) return { type };
      return {
        type,
        pubkeys: [ourPubKey],
        signatures: [undefined],
      };
    }
    case SCRIPT_TYPES.P2PK: {
      const p2pk = payments.p2pk({ output: script });
      return {
        type,
        pubkeys: [p2pk.pubkey],
        signatures: [undefined],
      };
    }
    case SCRIPT_TYPES.P2MS: {
      const p2ms = payments.p2ms({ output: script });
      return {
        type,
        pubkeys: p2ms.pubkeys,
        signatures: p2ms.pubkeys.map(() => undefined),
        maxSignatures: p2ms.m,
      };
    }
  }
  return { type };
}
function prepareInput(input, ourPubKey, redeemScript, witnessScript) {
  if (redeemScript && witnessScript) {
    const p2wsh = payments.p2wsh({
      redeem: { output: witnessScript },
    });
    const p2wshAlt = payments.p2wsh({ output: redeemScript });
    const p2sh = payments.p2sh({ redeem: { output: redeemScript } });
    const p2shAlt = payments.p2sh({ redeem: p2wsh });
    // enforces P2SH(P2WSH(...))
    if (!p2wsh.hash.equals(p2wshAlt.hash))
      throw new Error('Witness script inconsistent with prevOutScript');
    if (!p2sh.hash.equals(p2shAlt.hash))
      throw new Error('Redeem script inconsistent with prevOutScript');
    const expanded = expandOutput(p2wsh.redeem.output, ourPubKey);
    if (!expanded.pubkeys)
      throw new Error(
        expanded.type +
          ' not supported as witnessScript (' +
          bscript.toASM(witnessScript) +
          ')',
      );
    if (input.signatures && input.signatures.some(x => x !== undefined)) {
      expanded.signatures = input.signatures;
    }
    const signScript = witnessScript;
    if (expanded.type === SCRIPT_TYPES.P2WPKH)
      throw new Error('P2SH(P2WSH(P2WPKH)) is a consensus failure');
    return {
      redeemScript,
      redeemScriptType: SCRIPT_TYPES.P2WSH,
      witnessScript,
      witnessScriptType: expanded.type,
      prevOutType: SCRIPT_TYPES.P2SH,
      prevOutScript: p2sh.output,
      hasWitness: true,
      signScript,
      signType: expanded.type,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
      maxSignatures: expanded.maxSignatures,
    };
  }
  if (redeemScript) {
    const p2sh = payments.p2sh({ redeem: { output: redeemScript } });
    if (input.prevOutScript) {
      let p2shAlt;
      try {
        p2shAlt = payments.p2sh({ output: input.prevOutScript });
      } catch (e) {
        throw new Error('PrevOutScript must be P2SH');
      }
      if (!p2sh.hash.equals(p2shAlt.hash))
        throw new Error('Redeem script inconsistent with prevOutScript');
    }
    const expanded = expandOutput(p2sh.redeem.output, ourPubKey);
    if (!expanded.pubkeys)
      throw new Error(
        expanded.type +
          ' not supported as redeemScript (' +
          bscript.toASM(redeemScript) +
          ')',
      );
    if (input.signatures && input.signatures.some(x => x !== undefined)) {
      expanded.signatures = input.signatures;
    }
    let signScript = redeemScript;
    if (expanded.type === SCRIPT_TYPES.P2WPKH) {
      signScript = payments.p2pkh({ pubkey: expanded.pubkeys[0] }).output;
    }
    return {
      redeemScript,
      redeemScriptType: expanded.type,
      prevOutType: SCRIPT_TYPES.P2SH,
      prevOutScript: p2sh.output,
      hasWitness: expanded.type === SCRIPT_TYPES.P2WPKH,
      signScript,
      signType: expanded.type,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
      maxSignatures: expanded.maxSignatures,
    };
  }
  if (witnessScript) {
    const p2wsh = payments.p2wsh({ redeem: { output: witnessScript } });
    if (input.prevOutScript) {
      const p2wshAlt = payments.p2wsh({ output: input.prevOutScript });
      if (!p2wsh.hash.equals(p2wshAlt.hash))
        throw new Error('Witness script inconsistent with prevOutScript');
    }
    const expanded = expandOutput(p2wsh.redeem.output, ourPubKey);
    if (!expanded.pubkeys)
      throw new Error(
        expanded.type +
          ' not supported as witnessScript (' +
          bscript.toASM(witnessScript) +
          ')',
      );
    if (input.signatures && input.signatures.some(x => x !== undefined)) {
      expanded.signatures = input.signatures;
    }
    const signScript = witnessScript;
    if (expanded.type === SCRIPT_TYPES.P2WPKH)
      throw new Error('P2WSH(P2WPKH) is a consensus failure');
    return {
      witnessScript,
      witnessScriptType: expanded.type,
      prevOutType: SCRIPT_TYPES.P2WSH,
      prevOutScript: p2wsh.output,
      hasWitness: true,
      signScript,
      signType: expanded.type,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
      maxSignatures: expanded.maxSignatures,
    };
  }
  if (input.prevOutType && input.prevOutScript) {
    // embedded scripts are not possible without extra information
    if (input.prevOutType === SCRIPT_TYPES.P2SH)
      throw new Error(
        'PrevOutScript is ' + input.prevOutType + ', requires redeemScript',
      );
    if (input.prevOutType === SCRIPT_TYPES.P2WSH)
      throw new Error(
        'PrevOutScript is ' + input.prevOutType + ', requires witnessScript',
      );
    if (!input.prevOutScript) throw new Error('PrevOutScript is missing');
    const expanded = expandOutput(input.prevOutScript, ourPubKey);
    if (!expanded.pubkeys)
      throw new Error(
        expanded.type +
          ' not supported (' +
          bscript.toASM(input.prevOutScript) +
          ')',
      );
    if (input.signatures && input.signatures.some(x => x !== undefined)) {
      expanded.signatures = input.signatures;
    }
    let signScript = input.prevOutScript;
    if (expanded.type === SCRIPT_TYPES.P2WPKH) {
      signScript = payments.p2pkh({ pubkey: expanded.pubkeys[0] }).output;
    }
    return {
      prevOutType: expanded.type,
      prevOutScript: input.prevOutScript,
      hasWitness: expanded.type === SCRIPT_TYPES.P2WPKH,
      signScript,
      signType: expanded.type,
      pubkeys: expanded.pubkeys,
      signatures: expanded.signatures,
      maxSignatures: expanded.maxSignatures,
    };
  }
  const prevOutScript = payments.p2pkh({ pubkey: ourPubKey }).output;
  return {
    prevOutType: SCRIPT_TYPES.P2PKH,
    prevOutScript,
    hasWitness: false,
    signScript: prevOutScript,
    signType: SCRIPT_TYPES.P2PKH,
    pubkeys: [ourPubKey],
    signatures: [undefined],
  };
}
function build(type, input, allowIncomplete) {
  const pubkeys = input.pubkeys || [];
  let signatures = input.signatures || [];
  switch (type) {
    case SCRIPT_TYPES.P2PKH: {
      if (pubkeys.length === 0) break;
      if (signatures.length === 0) break;
      return payments.p2pkh({ pubkey: pubkeys[0], signature: signatures[0] });
    }
    case SCRIPT_TYPES.P2WPKH: {
      if (pubkeys.length === 0) break;
      if (signatures.length === 0) break;
      return payments.p2wpkh({ pubkey: pubkeys[0], signature: signatures[0] });
    }
    case SCRIPT_TYPES.P2PK: {
      if (pubkeys.length === 0) break;
      if (signatures.length === 0) break;
      return payments.p2pk({ signature: signatures[0] });
    }
    case SCRIPT_TYPES.P2MS: {
      const m = input.maxSignatures;
      if (allowIncomplete) {
        signatures = signatures.map(x => x || script_1.OPS.OP_0);
      } else {
        signatures = signatures.filter(x => x);
      }
      // if the transaction is not not complete (complete), or if signatures.length === m, validate
      // otherwise, the number of OP_0's may be >= m, so don't validate (boo)
      const validate = !allowIncomplete || m === signatures.length;
      return payments.p2ms(
        { m, pubkeys, signatures },
        { allowIncomplete, validate },
      );
    }
    case SCRIPT_TYPES.P2SH: {
      const redeem = build(input.redeemScriptType, input, allowIncomplete);
      if (!redeem) return;
      return payments.p2sh({
        redeem: {
          output: redeem.output || input.redeemScript,
          input: redeem.input,
          witness: redeem.witness,
        },
      });
    }
    case SCRIPT_TYPES.P2WSH: {
      const redeem = build(input.witnessScriptType, input, allowIncomplete);
      if (!redeem) return;
      return payments.p2wsh({
        redeem: {
          output: input.witnessScript,
          input: redeem.input,
          witness: redeem.witness,
        },
      });
    }
  }
}
function canSign(input) {
  return (
    input.signScript !== undefined &&
    input.signType !== undefined &&
    input.pubkeys !== undefined &&
    input.signatures !== undefined &&
    input.signatures.length === input.pubkeys.length &&
    input.pubkeys.length > 0 &&
    (input.hasWitness === false || input.value !== undefined)
  );
}
function signatureHashType(buffer) {
  return buffer.readUInt8(buffer.length - 1);
}
function checkSignArgs(inputs, signParams) {
  if (!PREVOUT_TYPES.has(signParams.prevOutScriptType)) {
    throw new TypeError(
      `Unknown prevOutScriptType "${signParams.prevOutScriptType}"`,
    );
  }
  tfMessage(
    typeforce.Number,
    signParams.vin,
    `sign must include vin parameter as Number (input index)`,
  );
  tfMessage(
    types.Signer,
    signParams.keyPair,
    `sign must include keyPair parameter as Signer interface`,
  );
  tfMessage(
    typeforce.maybe(typeforce.Number),
    signParams.hashType,
    `sign hashType parameter must be a number`,
  );
  const prevOutType = (inputs[signParams.vin] || []).prevOutType;
  const posType = signParams.prevOutScriptType;
  switch (posType) {
    case 'p2pkh':
      if (prevOutType && prevOutType !== 'pubkeyhash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type p2pkh: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.redeemScript,
        `${posType} requires NO redeemScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessValue,
        `${posType} requires NO witnessValue`,
      );
      break;
    case 'p2pk':
      if (prevOutType && prevOutType !== 'pubkey') {
        throw new TypeError(
          `input #${signParams.vin} is not of type p2pk: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.redeemScript,
        `${posType} requires NO redeemScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessValue,
        `${posType} requires NO witnessValue`,
      );
      break;
    case 'p2wpkh':
      if (prevOutType && prevOutType !== 'witnesspubkeyhash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type p2wpkh: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.redeemScript,
        `${posType} requires NO redeemScript`,
      );
      tfMessage(
        types.Satoshi,
        signParams.witnessValue,
        `${posType} requires witnessValue`,
      );
      break;
    case 'p2ms':
      if (prevOutType && prevOutType !== 'multisig') {
        throw new TypeError(
          `input #${signParams.vin} is not of type p2ms: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.redeemScript,
        `${posType} requires NO redeemScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessValue,
        `${posType} requires NO witnessValue`,
      );
      break;
    case 'p2sh-p2wpkh':
      if (prevOutType && prevOutType !== 'scripthash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type p2sh-p2wpkh: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.Buffer,
        signParams.redeemScript,
        `${posType} requires redeemScript`,
      );
      tfMessage(
        types.Satoshi,
        signParams.witnessValue,
        `${posType} requires witnessValue`,
      );
      break;
    case 'p2sh-p2ms':
    case 'p2sh-p2pk':
    case 'p2sh-p2pkh':
      if (prevOutType && prevOutType !== 'scripthash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type ${posType}: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessScript,
        `${posType} requires NO witnessScript`,
      );
      tfMessage(
        typeforce.Buffer,
        signParams.redeemScript,
        `${posType} requires redeemScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.witnessValue,
        `${posType} requires NO witnessValue`,
      );
      break;
    case 'p2wsh-p2ms':
    case 'p2wsh-p2pk':
    case 'p2wsh-p2pkh':
      if (prevOutType && prevOutType !== 'witnessscripthash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type ${posType}: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.Buffer,
        signParams.witnessScript,
        `${posType} requires witnessScript`,
      );
      tfMessage(
        typeforce.value(undefined),
        signParams.redeemScript,
        `${posType} requires NO redeemScript`,
      );
      tfMessage(
        types.Satoshi,
        signParams.witnessValue,
        `${posType} requires witnessValue`,
      );
      break;
    case 'p2sh-p2wsh-p2ms':
    case 'p2sh-p2wsh-p2pk':
    case 'p2sh-p2wsh-p2pkh':
      if (prevOutType && prevOutType !== 'scripthash') {
        throw new TypeError(
          `input #${signParams.vin} is not of type ${posType}: ${prevOutType}`,
        );
      }
      tfMessage(
        typeforce.Buffer,
        signParams.witnessScript,
        `${posType} requires witnessScript`,
      );
      tfMessage(
        typeforce.Buffer,
        signParams.redeemScript,
        `${posType} requires witnessScript`,
      );
      tfMessage(
        types.Satoshi,
        signParams.witnessValue,
        `${posType} requires witnessScript`,
      );
      break;
  }
}
function trySign({
  input,
  ourPubKey,
  keyPair,
  signatureHash,
  hashType,
  useLowR,
}) {
  // enforce in order signing of public keys
  let signed = false;
  for (const [i, pubKey] of input.pubkeys.entries()) {
    if (!ourPubKey.equals(pubKey)) continue;
    if (input.signatures[i]) throw new Error('Signature already exists');
    // TODO: add tests
    if (ourPubKey.length !== 33 && input.hasWitness) {
      throw new Error(
        'BIP143 rejects uncompressed public keys in P2WPKH or P2WSH',
      );
    }
    const signature = keyPair.sign(signatureHash, useLowR);
    input.signatures[i] = bscript.signature.encode(signature, hashType);
    signed = true;
  }
  if (!signed) throw new Error('Key pair cannot sign for this input');
}
function getSigningData(
  network,
  inputs,
  needsOutputs,
  tx,
  signParams,
  keyPair,
  redeemScript,
  hashType,
  witnessValue,
  witnessScript,
  useLowR,
) {
  let vin;
  if (typeof signParams === 'number') {
    console.warn(
      'DEPRECATED: TransactionBuilder sign method arguments ' +
        'will change in v6, please use the TxbSignArg interface',
    );
    vin = signParams;
  } else if (typeof signParams === 'object') {
    checkSignArgs(inputs, signParams);
    ({
      vin,
      keyPair,
      redeemScript,
      hashType,
      witnessValue,
      witnessScript,
    } = signParams);
  } else {
    throw new TypeError(
      'TransactionBuilder sign first arg must be TxbSignArg or number',
    );
  }
  if (keyPair === undefined) {
    throw new Error('sign requires keypair');
  }
  // TODO: remove keyPair.network matching in 4.0.0
  if (keyPair.network && keyPair.network !== network)
    throw new TypeError('Inconsistent network');
  if (!inputs[vin]) throw new Error('No input at index: ' + vin);
  hashType = hashType || transaction_1.Transaction.SIGHASH_ALL;
  if (needsOutputs(hashType)) throw new Error('Transaction needs outputs');
  const input = inputs[vin];
  // if redeemScript was previously provided, enforce consistency
  if (
    input.redeemScript !== undefined &&
    redeemScript &&
    !input.redeemScript.equals(redeemScript)
  ) {
    throw new Error('Inconsistent redeemScript');
  }
  const ourPubKey =
    keyPair.publicKey || (keyPair.getPublicKey && keyPair.getPublicKey());
  if (!canSign(input)) {
    if (witnessValue !== undefined) {
      if (input.value !== undefined && input.value !== witnessValue)
        throw new Error('Input did not match witnessValue');
      typeforce(types.Satoshi, witnessValue);
      input.value = witnessValue;
    }
    if (!canSign(input)) {
      const prepared = prepareInput(
        input,
        ourPubKey,
        redeemScript,
        witnessScript,
      );
      // updates inline
      Object.assign(input, prepared);
    }
    if (!canSign(input)) throw Error(input.prevOutType + ' not supported');
  }
  // ready to sign
  let signatureHash;
  if (input.hasWitness) {
    signatureHash = tx.hashForWitnessV0(
      vin,
      input.signScript,
      input.value,
      hashType,
    );
  } else {
    signatureHash = tx.hashForSignature(vin, input.signScript, hashType);
  }
  return {
    input,
    ourPubKey,
    keyPair,
    signatureHash,
    hashType,
    useLowR: !!useLowR,
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "eb70bc5b37c6933481f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OP_0 [signatures ...]
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function partialSignature(value) {
  return (
    value === script_1.OPS.OP_0 || bscript.isCanonicalScriptSignature(value)
  );
}
function check(script, allowIncomplete) {
  const chunks = bscript.decompile(script);
  if (chunks.length < 2) return false;
  if (chunks[0] !== script_1.OPS.OP_0) return false;
  if (allowIncomplete) {
    return chunks.slice(1).every(partialSignature);
  }
  return chunks.slice(1).every(bscript.isCanonicalScriptSignature);
}
exports.check = check;
check.toJSON = () => {
  return 'multisig input';
};


/***/ }),

/***/ "ebf61b4027142c40c33c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OP_0 {scriptHash}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const buffer = bscript.compile(script);
  return (
    buffer.length === 34 &&
    buffer[0] === script_1.OPS.OP_0 &&
    buffer[1] === 0x20
  );
}
exports.check = check;
check.toJSON = () => {
  return 'Witness scriptHash output';
};


/***/ }),

/***/ "ee959e333f530563024f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OP_HASH160 {scriptHash} OP_EQUAL
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
function check(script) {
  const buffer = bscript.compile(script);
  return (
    buffer.length === 23 &&
    buffer[0] === script_1.OPS.OP_HASH160 &&
    buffer[1] === 0x14 &&
    buffer[22] === script_1.OPS.OP_EQUAL
  );
}
exports.check = check;
check.toJSON = () => {
  return 'scriptHash output';
};


/***/ }),

/***/ "f21d93edd510689eb2ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// <scriptSig> {serialized scriptPubKey script}
Object.defineProperty(exports, '__esModule', { value: true });
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const p2ms = __webpack_require__("989ba8f7d369b0d9568d");
const p2pk = __webpack_require__("8a06de8a113371251a5d");
const p2pkh = __webpack_require__("12fc7dc108ee22ef249d");
function check(chunks, allowIncomplete) {
  typeforce(typeforce.Array, chunks);
  if (chunks.length < 1) return false;
  const witnessScript = chunks[chunks.length - 1];
  if (!Buffer.isBuffer(witnessScript)) return false;
  const witnessScriptChunks = bscript.decompile(witnessScript);
  // is witnessScript a valid script?
  if (!witnessScriptChunks || witnessScriptChunks.length === 0) return false;
  const witnessRawScriptSig = bscript.compile(chunks.slice(0, -1));
  // match types
  if (
    p2pkh.input.check(witnessRawScriptSig) &&
    p2pkh.output.check(witnessScriptChunks)
  )
    return true;
  if (
    p2ms.input.check(witnessRawScriptSig, allowIncomplete) &&
    p2ms.output.check(witnessScriptChunks)
  )
    return true;
  if (
    p2pk.input.check(witnessRawScriptSig) &&
    p2pk.output.check(witnessScriptChunks)
  )
    return true;
  return false;
}
exports.check = check;
check.toJSON = () => {
  return 'witnessScriptHash input';
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ }),

/***/ "f49d9113a79536d617f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, '__esModule', { value: true });
const bufferutils_1 = __webpack_require__("beaf39890650aa5299f8");
const bcrypto = __webpack_require__("2d6e5edc7083b0a69b78");
const bscript = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const script_1 = __webpack_require__("c52e0ee7ccfeb64f9cf6");
const types = __webpack_require__("3b58bc5d4fd32db48dd3");
const typeforce = __webpack_require__("4982e4a9d5d9cc0006c5");
const varuint = __webpack_require__("4a25c0f2b2142de6fa09");
function varSliceSize(someScript) {
  const length = someScript.length;
  return varuint.encodingLength(length) + length;
}
function vectorSize(someVector) {
  const length = someVector.length;
  return (
    varuint.encodingLength(length) +
    someVector.reduce((sum, witness) => {
      return sum + varSliceSize(witness);
    }, 0)
  );
}
const EMPTY_SCRIPT = Buffer.allocUnsafe(0);
const EMPTY_WITNESS = [];
const ZERO = Buffer.from(
  '0000000000000000000000000000000000000000000000000000000000000000',
  'hex',
);
const ONE = Buffer.from(
  '0000000000000000000000000000000000000000000000000000000000000001',
  'hex',
);
const VALUE_UINT64_MAX = Buffer.from('ffffffffffffffff', 'hex');
const BLANK_OUTPUT = {
  script: EMPTY_SCRIPT,
  valueBuffer: VALUE_UINT64_MAX,
};
function isOutput(out) {
  return out.value !== undefined;
}
class Transaction {
  constructor() {
    this.version = 1;
    this.locktime = 0;
    this.ins = [];
    this.outs = [];
  }
  static fromBuffer(buffer, _NO_STRICT) {
    const bufferReader = new bufferutils_1.BufferReader(buffer);
    const tx = new Transaction();
    tx.version = bufferReader.readInt32();
    const marker = bufferReader.readUInt8();
    const flag = bufferReader.readUInt8();
    let hasWitnesses = false;
    if (
      marker === Transaction.ADVANCED_TRANSACTION_MARKER &&
      flag === Transaction.ADVANCED_TRANSACTION_FLAG
    ) {
      hasWitnesses = true;
    } else {
      bufferReader.offset -= 2;
    }
    const vinLen = bufferReader.readVarInt();
    for (let i = 0; i < vinLen; ++i) {
      tx.ins.push({
        hash: bufferReader.readSlice(32),
        index: bufferReader.readUInt32(),
        script: bufferReader.readVarSlice(),
        sequence: bufferReader.readUInt32(),
        witness: EMPTY_WITNESS,
      });
    }
    const voutLen = bufferReader.readVarInt();
    for (let i = 0; i < voutLen; ++i) {
      tx.outs.push({
        value: bufferReader.readUInt64(),
        script: bufferReader.readVarSlice(),
      });
    }
    if (hasWitnesses) {
      for (let i = 0; i < vinLen; ++i) {
        tx.ins[i].witness = bufferReader.readVector();
      }
      // was this pointless?
      if (!tx.hasWitnesses())
        throw new Error('Transaction has superfluous witness data');
    }
    tx.locktime = bufferReader.readUInt32();
    if (_NO_STRICT) return tx;
    if (bufferReader.offset !== buffer.length)
      throw new Error('Transaction has unexpected data');
    return tx;
  }
  static fromHex(hex) {
    return Transaction.fromBuffer(Buffer.from(hex, 'hex'), false);
  }
  static isCoinbaseHash(buffer) {
    typeforce(types.Hash256bit, buffer);
    for (let i = 0; i < 32; ++i) {
      if (buffer[i] !== 0) return false;
    }
    return true;
  }
  isCoinbase() {
    return (
      this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash)
    );
  }
  addInput(hash, index, sequence, scriptSig) {
    typeforce(
      types.tuple(
        types.Hash256bit,
        types.UInt32,
        types.maybe(types.UInt32),
        types.maybe(types.Buffer),
      ),
      arguments,
    );
    if (types.Null(sequence)) {
      sequence = Transaction.DEFAULT_SEQUENCE;
    }
    // Add the input and return the input's index
    return (
      this.ins.push({
        hash,
        index,
        script: scriptSig || EMPTY_SCRIPT,
        sequence: sequence,
        witness: EMPTY_WITNESS,
      }) - 1
    );
  }
  addOutput(scriptPubKey, value) {
    typeforce(types.tuple(types.Buffer, types.Satoshi), arguments);
    // Add the output and return the output's index
    return (
      this.outs.push({
        script: scriptPubKey,
        value,
      }) - 1
    );
  }
  hasWitnesses() {
    return this.ins.some(x => {
      return x.witness.length !== 0;
    });
  }
  weight() {
    const base = this.byteLength(false);
    const total = this.byteLength(true);
    return base * 3 + total;
  }
  virtualSize() {
    return Math.ceil(this.weight() / 4);
  }
  byteLength(_ALLOW_WITNESS = true) {
    const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
    return (
      (hasWitnesses ? 10 : 8) +
      varuint.encodingLength(this.ins.length) +
      varuint.encodingLength(this.outs.length) +
      this.ins.reduce((sum, input) => {
        return sum + 40 + varSliceSize(input.script);
      }, 0) +
      this.outs.reduce((sum, output) => {
        return sum + 8 + varSliceSize(output.script);
      }, 0) +
      (hasWitnesses
        ? this.ins.reduce((sum, input) => {
            return sum + vectorSize(input.witness);
          }, 0)
        : 0)
    );
  }
  clone() {
    const newTx = new Transaction();
    newTx.version = this.version;
    newTx.locktime = this.locktime;
    newTx.ins = this.ins.map(txIn => {
      return {
        hash: txIn.hash,
        index: txIn.index,
        script: txIn.script,
        sequence: txIn.sequence,
        witness: txIn.witness,
      };
    });
    newTx.outs = this.outs.map(txOut => {
      return {
        script: txOut.script,
        value: txOut.value,
      };
    });
    return newTx;
  }
  /**
   * Hash transaction for signing a specific input.
   *
   * Bitcoin uses a different hash for each signed transaction input.
   * This method copies the transaction, makes the necessary changes based on the
   * hashType, and then hashes the result.
   * This hash can then be used to sign the provided transaction input.
   */
  hashForSignature(inIndex, prevOutScript, hashType) {
    typeforce(
      types.tuple(types.UInt32, types.Buffer, /* types.UInt8 */ types.Number),
      arguments,
    );
    // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L29
    if (inIndex >= this.ins.length) return ONE;
    // ignore OP_CODESEPARATOR
    const ourScript = bscript.compile(
      bscript.decompile(prevOutScript).filter(x => {
        return x !== script_1.OPS.OP_CODESEPARATOR;
      }),
    );
    const txTmp = this.clone();
    // SIGHASH_NONE: ignore all outputs? (wildcard payee)
    if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
      txTmp.outs = [];
      // ignore sequence numbers (except at inIndex)
      txTmp.ins.forEach((input, i) => {
        if (i === inIndex) return;
        input.sequence = 0;
      });
      // SIGHASH_SINGLE: ignore all outputs, except at the same index?
    } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
      // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L60
      if (inIndex >= this.outs.length) return ONE;
      // truncate outputs after
      txTmp.outs.length = inIndex + 1;
      // "blank" outputs before
      for (let i = 0; i < inIndex; i++) {
        txTmp.outs[i] = BLANK_OUTPUT;
      }
      // ignore sequence numbers (except at inIndex)
      txTmp.ins.forEach((input, y) => {
        if (y === inIndex) return;
        input.sequence = 0;
      });
    }
    // SIGHASH_ANYONECANPAY: ignore inputs entirely?
    if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
      txTmp.ins = [txTmp.ins[inIndex]];
      txTmp.ins[0].script = ourScript;
      // SIGHASH_ALL: only ignore input scripts
    } else {
      // "blank" others input scripts
      txTmp.ins.forEach(input => {
        input.script = EMPTY_SCRIPT;
      });
      txTmp.ins[inIndex].script = ourScript;
    }
    // serialize and hash
    const buffer = Buffer.allocUnsafe(txTmp.byteLength(false) + 4);
    buffer.writeInt32LE(hashType, buffer.length - 4);
    txTmp.__toBuffer(buffer, 0, false);
    return bcrypto.hash256(buffer);
  }
  hashForWitnessV0(inIndex, prevOutScript, value, hashType) {
    typeforce(
      types.tuple(types.UInt32, types.Buffer, types.Satoshi, types.UInt32),
      arguments,
    );
    let tbuffer = Buffer.from([]);
    let bufferWriter;
    let hashOutputs = ZERO;
    let hashPrevouts = ZERO;
    let hashSequence = ZERO;
    if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
      tbuffer = Buffer.allocUnsafe(36 * this.ins.length);
      bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
      this.ins.forEach(txIn => {
        bufferWriter.writeSlice(txIn.hash);
        bufferWriter.writeUInt32(txIn.index);
      });
      hashPrevouts = bcrypto.hash256(tbuffer);
    }
    if (
      !(hashType & Transaction.SIGHASH_ANYONECANPAY) &&
      (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE &&
      (hashType & 0x1f) !== Transaction.SIGHASH_NONE
    ) {
      tbuffer = Buffer.allocUnsafe(4 * this.ins.length);
      bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
      this.ins.forEach(txIn => {
        bufferWriter.writeUInt32(txIn.sequence);
      });
      hashSequence = bcrypto.hash256(tbuffer);
    }
    if (
      (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE &&
      (hashType & 0x1f) !== Transaction.SIGHASH_NONE
    ) {
      const txOutsSize = this.outs.reduce((sum, output) => {
        return sum + 8 + varSliceSize(output.script);
      }, 0);
      tbuffer = Buffer.allocUnsafe(txOutsSize);
      bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
      this.outs.forEach(out => {
        bufferWriter.writeUInt64(out.value);
        bufferWriter.writeVarSlice(out.script);
      });
      hashOutputs = bcrypto.hash256(tbuffer);
    } else if (
      (hashType & 0x1f) === Transaction.SIGHASH_SINGLE &&
      inIndex < this.outs.length
    ) {
      const output = this.outs[inIndex];
      tbuffer = Buffer.allocUnsafe(8 + varSliceSize(output.script));
      bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
      bufferWriter.writeUInt64(output.value);
      bufferWriter.writeVarSlice(output.script);
      hashOutputs = bcrypto.hash256(tbuffer);
    }
    tbuffer = Buffer.allocUnsafe(156 + varSliceSize(prevOutScript));
    bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
    const input = this.ins[inIndex];
    bufferWriter.writeUInt32(this.version);
    bufferWriter.writeSlice(hashPrevouts);
    bufferWriter.writeSlice(hashSequence);
    bufferWriter.writeSlice(input.hash);
    bufferWriter.writeUInt32(input.index);
    bufferWriter.writeVarSlice(prevOutScript);
    bufferWriter.writeUInt64(value);
    bufferWriter.writeUInt32(input.sequence);
    bufferWriter.writeSlice(hashOutputs);
    bufferWriter.writeUInt32(this.locktime);
    bufferWriter.writeUInt32(hashType);
    return bcrypto.hash256(tbuffer);
  }
  getHash(forWitness) {
    // wtxid for coinbase is always 32 bytes of 0x00
    if (forWitness && this.isCoinbase()) return Buffer.alloc(32, 0);
    return bcrypto.hash256(this.__toBuffer(undefined, undefined, forWitness));
  }
  getId() {
    // transaction hash's are displayed in reverse order
    return bufferutils_1.reverseBuffer(this.getHash(false)).toString('hex');
  }
  toBuffer(buffer, initialOffset) {
    return this.__toBuffer(buffer, initialOffset, true);
  }
  toHex() {
    return this.toBuffer(undefined, undefined).toString('hex');
  }
  setInputScript(index, scriptSig) {
    typeforce(types.tuple(types.Number, types.Buffer), arguments);
    this.ins[index].script = scriptSig;
  }
  setWitness(index, witness) {
    typeforce(types.tuple(types.Number, [types.Buffer]), arguments);
    this.ins[index].witness = witness;
  }
  __toBuffer(buffer, initialOffset, _ALLOW_WITNESS = false) {
    if (!buffer) buffer = Buffer.allocUnsafe(this.byteLength(_ALLOW_WITNESS));
    const bufferWriter = new bufferutils_1.BufferWriter(
      buffer,
      initialOffset || 0,
    );
    bufferWriter.writeInt32(this.version);
    const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
    if (hasWitnesses) {
      bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
      bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
    }
    bufferWriter.writeVarInt(this.ins.length);
    this.ins.forEach(txIn => {
      bufferWriter.writeSlice(txIn.hash);
      bufferWriter.writeUInt32(txIn.index);
      bufferWriter.writeVarSlice(txIn.script);
      bufferWriter.writeUInt32(txIn.sequence);
    });
    bufferWriter.writeVarInt(this.outs.length);
    this.outs.forEach(txOut => {
      if (isOutput(txOut)) {
        bufferWriter.writeUInt64(txOut.value);
      } else {
        bufferWriter.writeSlice(txOut.valueBuffer);
      }
      bufferWriter.writeVarSlice(txOut.script);
    });
    if (hasWitnesses) {
      this.ins.forEach(input => {
        bufferWriter.writeVector(input.witness);
      });
    }
    bufferWriter.writeUInt32(this.locktime);
    // avoid slicing unless necessary
    if (initialOffset !== undefined)
      return buffer.slice(initialOffset, bufferWriter.offset);
    return buffer;
  }
}
Transaction.DEFAULT_SEQUENCE = 0xffffffff;
Transaction.SIGHASH_ALL = 0x01;
Transaction.SIGHASH_NONE = 0x02;
Transaction.SIGHASH_SINGLE = 0x03;
Transaction.SIGHASH_ANYONECANPAY = 0x80;
Transaction.ADVANCED_TRANSACTION_MARKER = 0x00;
Transaction.ADVANCED_TRANSACTION_FLAG = 0x01;
exports.Transaction = Transaction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4de17b50d35d24f9c74a").Buffer))

/***/ })

}]); 