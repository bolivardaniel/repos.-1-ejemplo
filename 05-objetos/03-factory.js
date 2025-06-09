//funcion para no crear usuarios de uno en uno

function crearUsuario(name, email){//para nombrar este tipo de funciones se usa camelCase
    return{
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando Clave...');
        },
        
    }
}

let user1 =  crearUsuario('daniel', 'daniel@gmail.com');
let user2 =  crearUsuario('andres', 'andres@gmail.com');

console.log(user1, user2);