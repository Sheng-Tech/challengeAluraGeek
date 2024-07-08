import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]");

async function createProduct(evento) {
    evento.preventDefault();

    const img = document.querySelector("[data-url]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    const category = "";
    const id = "";

    await conexionAPI.createProduct(img, name, price, description, category, id);

}

formulario.addEventListener("submit", evento => createProduct(evento));