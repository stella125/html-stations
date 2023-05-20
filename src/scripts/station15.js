async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  //console.log("B");
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  //console.log("C");
  const result = await test(userList);
  //console.log("F");
  return await result
}

async function test(testList) {
  //console.log("D");
  return new Promise(function(resolve){
    setTimeout(() => {
      testList.map(
        (user) => {
          user.full_name = user.family_name + " " + user.first_name;
        }
      )
      console.log("E");
      resolve(testList);
    },3000)
  })
}

