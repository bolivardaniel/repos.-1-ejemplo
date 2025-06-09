const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('dibujando');
    }
};
//delete punto.dibujar;
if ('dibujar' in punto){//in tambien sirve para saber tiene alguna propieda o metodo
    punto.dibujar();
}

//console.log(Object.keys(punto));//devuelve un array con las propiedades del objeto

for (let llave of Object.keys(punto)){//con of se itera un array
    console.log(llave, punto[llave]);//lista la propiedad seguido de su valor
}


for (let entry of Object.entries(punto)){
    console.log(entry);//devuelve la propieda en array 
}

for (let llave in punto){//hace lo mismo pero que el metopdo anterio pero este es mas moderno
    console.log(llave, punto[llave]);
}