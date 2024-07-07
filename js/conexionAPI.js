async function listarProductos() {
    const conexion = await fetch ("https://fake-api-theta-indol.vercel.app/product");

    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida);

    return conexionConvertida
};

async function enviarProducto(img,name,price,description,category,id) {
    const conexion = await fetch ("https://fake-api-theta-indol.vercel.app/product", {
        method: "POST",
        headers: {"Content-type": "aplication/json"},
        body:JSON.stringify ({
            img:img,
            name:name,
            price:price,
            description:description,
            category:category,
            id:id
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


export const conexionAPI = {
    listarProductos,enviarProducto
}