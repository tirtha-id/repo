let user = new person("Sutirtha", "Astono", "Male", 55);
user.hobby = "Badminton";
person.nationality = "Indonesian";

for (let prop in user) {
    console.log(prop + ' : ' + user[prop]);
}

console.log('\nCreate Object...');

customer = Object.create(person);
customer.firstName = "Diah";
customer.lastName = "Trimurti";
customer.gender = "Female";
customer.age = 53;

for (let prop in customer) {
    console.log(prop + ': ' + customer[prop]);
}

console.log('\nObject Entries...');

for (let [prop, value] of Object.entries(customer)) {
    //let text = '';
    text = prop + ': ' + value;
    console.log(text)
}

function person(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
}

