import { generateId } from "../Utils/GenerateId.js"

export default class Item {
    constructor({ name, price, description, quantity, imgUrl, id = generateId() }) {
        this.name = name
        this.price = price
        this.description = description
        this.quantity = quantity
        this.imgUrl = imgUrl
        this.id = id
    }

    get Template() {
        return `
        <div class="col-md-3 mt-2 ">
                <div class="item bg-light shadow">
                    <img src="${this.imgUrl}"
                        class="w-100" alt="${this.name}">
                    <div class="p-3">
                        <div class="text-center">
                            <p><b>${this.name}</b></p>
                        </div>
                        <p><em>$${this.price}</em></p>
                        <p>${this.description}</p>
                        <p>${this.MyQuantity}</p>
                        <p>ID: ${this.id}</p>
                    </div>
                </div>
            </div>
    `
    }
    get MyQuantity() {
        let template = ''
        if (this.quantity == 0) {
            template += "<em>OUT OF STOCK</em>"
        } else {
            template += `In Stock: ${this.quantity} <button class="btn-warning" onsumbit="addItem(${this.id})">Add to cart</button>`
        }
        return template
    }

    get ModalTemplate() {
        return `
            <div class="col-4">
                <img src="${this.imgUrl}"
                    class="w-100" alt="${this.name}">
            </div>
            <div class="col-8 d-flex flex-row">
                ${this.name}
                $${this.price}
                ${this.quantity}
            </div>
        `
    }
}