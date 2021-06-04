'use strict';

function User (name, surname, age,  isMale, email, isSubscribed) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isSubscribed = isSubscribed;
};

// Прописать метод getFullName() (возвращает строку с полным именем) для юзера

const userProto = new User ();

userProto.getFullName = function () {
    return `${this.name} ${this.surname}`
}

User.prototype = userProto;

let users = [];

for (let i = 0; i < 100; i++) {
   const user = new User(`name${i}`,
       `surmane${i}`,
       Math.ceil(Math.random() * 90),
       Math.random() > 0.5,
       `email${i}@.com`,
       Math.random() > 0.5,
       )
    users.push(user)
}

// find girls age

const youngGirlsAge = users.filter(getYoungGirlsAge).map(getOnlyNames)
// girls age function
function getYoungGirlsAge (user) {
    return user.age >=  6 && user.age <= 18 && !user.isMale
}

// get Only Names

function getOnlyNames (user) {
    return user.getFullName()
}

//check Email

const findEmail = youngGirlsAge.every(checkEmail)
console.log(findEmail)

function checkEmail (user) {
    return user.email === 'email99@.com'
}

const subscribedUsers = youngGirlsAge.every(areTheySubscribed)

function areTheySubscribed (user) {
    return user.isSubscribed
}

console.log(subscribedUsers)


