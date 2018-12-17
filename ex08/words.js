const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate"];

const alphabetical = words.reduce((a, x) => { // aはアキュムレータ（配列の最終的な変換先）、xは現在の配列要素
    if(!a[x[0]])
        a[x[0]] = [];
    a[x[0]].push(x);
    return a;}, {}); // {}はアキュムレータの初期値

console.log(alphabetical);