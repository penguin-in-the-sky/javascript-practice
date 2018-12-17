// m以上n以下のランダムな整数を返す
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

// サイコロの目
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)] // 上の配列の要素数をランダムに
}

let funds = 50;
let rounds = 0;

while (funds > 0 && funds < 100) {
    rounds++;
    console.log(`第${rounds}ラウンド：`)
    console.log(`   手持ち資金： ${funds}`)

    // 賭ける
    let bets = {crown: 0, anchor: 0, heart:0, spade:0, club:0, diamond:0};
    let bet = rand(1, funds);
    funds = funds - bet; // 掛け金もランダム
    let face = [randFace()];
    bets[face] = bet;
    console.log(`   掛け金${bet}を${face}に賭ける`);

    // サイコロをふる(2回)
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`   出目：${hand.join(',')}`);

    // 払戻金をもらう
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0)
            winnings = winnings + bets[face];
    }
    funds +=  winnings;
    console.log(`   払戻金：${winnings}`);
}
console.log(`   残金：${funds}`);
if(100 < funds)
    console.log("意気揚々と船に戻る¥n")
else console.log("トボトボと船に戻る¥n")