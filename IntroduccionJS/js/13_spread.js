// juntos objetos

const producto_1 = {
    nombre : "PC Gamer",
    precio : 1200,
    disponible : true,
}

const accesorios = {
    regalo_1 : "Teclador Razer",
    regalo_2 : "kit de limpieza",
    delivery : true,
}

const pedido = {...producto_1, ...accesorios};

console.log(producto_1);
console.log(pedido);