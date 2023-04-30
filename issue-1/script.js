/**
 * 誕生日を入力したら、年齢を返します」
 * @param {string} birthdate `2000-10-10
 */
function getAge(year, month, day) {
  // do something...
  //今日の日付データを取得
  const today = new Date();

  //生年月日の日付データを取得
  const birthdate = new Date(year, month - 1, day); //−１：Dateオブジェクトではカウントが０から始まるため。

  //今年の誕生日の日付データを取得
  const currentYearBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );

  //生まれた年と今年の差を計算
  let age = today.getFullYear() - birthdate.getFullYear();

  //今日の日付と今年の誕生日を比較
  if (today < currentYearBirthday) {
    //今年誕生日を迎えていない場合、１を引く
    age--;
  }

  //年齢の値を返す
  return age;
}

console.log(getAge(1998, 11, 13));

console.log(getAge(2000, 04, 29));
console.log(getAge(2000, 04, 30));
console.log(getAge(2000, 05, 01));
