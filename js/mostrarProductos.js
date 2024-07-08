import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-products]")

export default function createCard(img, name, price, description, category, id) {
    const item = document.createElement("div");
    item.className = "div__cards";
    item.innerHTML = `<div class="card">
            <img src="${img}" alt="${name}">

            <div class="card__info">
                <p>${description}</p>

                <div class="card__price">
                    <p>${price}</p>
                    <img src="./img/trash-can.png" class="trash__button" data-id="${id}"></img>
                </div>
            </div>
        </div>`;


    const deleteButton = item.querySelector(".trash__button");
    deleteButton.addEventListener("click", async () => {
        try {
            await conexionAPI.deleteProduct(id);
            item.remove();
        } catch (error) {
            console.log(error);
        }
    })

    return item;

}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(item => lista.appendChild(createCard(item.img, item.name, item.price, item.description, item.category, item.id)));
}

listarProductos()