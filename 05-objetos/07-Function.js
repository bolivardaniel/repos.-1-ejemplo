function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando....');}
}
let punto = { z: 7 };
//Punto.call(punto, 1, 2);//se pasan los argumentos uno por uno
Punto.apply(punto, [1, 2]);//se pasan los argumento se pasan como un array 

console.log(punto); 

//olvidar este metodo y nunca usarlo
// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {console.log('Dibujando....');}
// `);

// const p = new Point(1, 2);
// console.log(p);

//olvidar este metodo y nunca usarlo