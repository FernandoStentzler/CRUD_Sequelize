// const check = new Promise((resolve, reject)=>{
//     let error = true;

//     if(!error){
//         resolve ('a promise foi resolvida')
//     }else{
//        reject ('a promise foi rejeitada')
//     }
// });

// console.log(check)

// check
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

const users = require('./data')

const getUsers = new Promise((resolve , reject)=>{

    setTimeout(()=>{   

    let fetchedUsers = users;

    if(fetchedUsers.length > 0){
        resolve(fetchedUsers)
    }else{
        reject('A base de dados esta vazia')
    }
    
    },2000);
});

const getMaleUsers = (users) => {
    return new Promise((resolve, reject)=>{
        let maleUsers = users.filter((user)=>{
            if(user.sex === 'male'){
                return user
            }
        });

        if(maleUsers.length > 0){
            resolve(maleUsers)
        }else{
            reject('Nao existe Usuarios Masculinos Nesta Base de Dados')
        }
    })
}

const checkAge = (users) => {
    return new Promise((resolve, reject) =>{
        let adults = users.filter( user => {
            if(user.age >= 18){
                return user
            }
            });

            if(adults.length > 0) {
                resolve (adults)
            }else{
                reject ('Nao tem adultos nesse banco de dados')
            }            
        })
}

getUsers
    .then(users => getMaleUsers(users))
    .then(maleUsers => checkAge(maleUsers))
    .then(maleAdults => console.log(maleAdults))
    .catch(error => console.log(error))