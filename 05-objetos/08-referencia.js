// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);

let a = {prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);

//primitivos - se copian
// referencia- se referencia ( objeto, array, funciones)