//input: なし
//output: 1から100までの数字を出力する
//・3の倍数の時「 3 Fizz 」
//・5の倍数の時「 5 Buzz 」
//・3かつ5の倍数の時「 15 FizzBuzz 」を表示させる

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
