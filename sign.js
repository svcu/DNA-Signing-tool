var EC = require('elliptic').ec;
var ec = new EC('secp256k1');

function sign(tx, privateKey){ //tx=transaction JSON object
    let key = ec.keyFromPrivate(privateKey.toUpperCase())

        
/*
    console.log(privateKey.toUpperCase())
    console.log(tx.from.toUpperCase())*/

    if(key.getPublic("hex").toUpperCase() !== tx.from.toUpperCase()){
        return "Invalid Address"
    }



    const sig = key.sign(this.calculateHash(tx), "base64").toDER("hex");

    return sig
}

module.exports = sign;
