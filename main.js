let user = {
    name : "John",
    age : 30,
}

for (let prop in user) {
    console.log(prop + ' : ' + user[prop]);
}
