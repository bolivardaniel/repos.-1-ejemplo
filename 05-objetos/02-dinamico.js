const user = {id: 1};

user.name ='nicolas';
user.guardar = function () {
    console.log('guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id:1 });//con ese freeze, no permite que se le cambie ningun valor 

const user1 = Object.seal({ id: 1 });//y seal es para que las propiedades sean fijas pero que sus valores si se puedan cambiar
user1.name = 'nico';
user1.id = 2;
console.log(user1);