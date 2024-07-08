async function listarProductos() {
    const conexion = await fetch("https://fake-api-theta-indol.vercel.app/product", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Permissions-Policy": "geolocation=(self `https://fake-api-theta-indol.vercel.app/product`)"
        }
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida
};

async function createProduct(img, name, price, description, category, id) {
    const conexion = await fetch("https://fake-api-theta-indol.vercel.app/product", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            img: img,
            name: name,
            price: `$${price}`,
            description: description,
            category: category,
            id: id
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

const deleteProduct = (id) => {
    return fetch(`https://fake-api-theta-indol.vercel.app/product/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}


export const conexionAPI = {
    listarProductos, createProduct, deleteProduct
}