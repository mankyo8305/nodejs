console.log("welcome nodejs")
var age = 20
console.log('나이 : %d', age)
var name = '소녀시대'
console.log('나이 : %d', age)
var Person = {}
Person['age'] = 20
Person['name'] = '소녀시대'
Person.mobile = '010-9148-0054'
console.log('전화 %s', Person['mobile']);
function add(a, b) {
    return a + b
};
var result = add(10, 20);
console.log('더하기 : %d', result);

var Users = [{ name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }];
console.log('사용자수 %d', Users.length);
console.log('첫번째 사용자 %s', Users[0].name);
Users.push({ name: '핑클', age: 40 });
console.dir(Users);
console.log(Users);

Users.push(add);
console.log(Users);
console.log(Users[3](10, 30));
for (var i = 0; i < Users.length; i++) {
    console.log(`${i} : ${Users[i].name}`);
}
for (var i = 0; i < Users.length; i++) {
    if (Users[i].name == 'add')
        console.log(`${i} : ${Users[i].name}`);
}
for (var i in Users) {
    console.log(`${i} : ${Users[i].name}`);
}
Users.forEach(function (item, index) {
    console.log(`${index} : ${item.name}`);
})
console.log(Object.keys(Users));
console.log(Users.pop());
console.log(Users);
Users.unshift({ name: '티아라', age: 55 })
console.log((Users));
Users.shift()
console.log(Users);

Users.splice(1, 0, { name: '애프터스쿨', age: 25 })
console.log(Users)
var Users2 = Users.slice(1, 3)
console.log(Users2);