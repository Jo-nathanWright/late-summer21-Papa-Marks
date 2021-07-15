export default class Item {
    constructor({ name, price, description, quantity, imgUrl, id }) {
        this.name = name
        this.price = price
        this.description = description
        this.quantity = quantity
        this.imgUrl = imgUrl
        this.id = id
    }

    get Template() {
        return `
        <div class="col-md-3 mt-2">
                <div class="item bg-light shadow">
                    <img src="${this.imgUrl}"
                        class="w-100" alt="${this.name}">
                    <div class="p-3">
                        <div class="text-center">
                            <p><b>${this.name}</b></p>
                        </div>
                        <p><em>$${this.price}</em></p>
                        <p>${this.description}</p>
                        <p>In Stock: ${this.quantity}<button class="btn-warning">Add to cart</button>
                        </p>
                    </div>
                </div>
            </div>
    `
    }
}