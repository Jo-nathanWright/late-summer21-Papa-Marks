import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    let template = ''
    ProxyState.items.forEach(item => {
        template += item.Template
    })
    document.getElementById("items").innerHTML = template
}
export default class ItemsController {
    constructor() {
        saveState()
        _draw()
        loadState()
    }

    //createCart()
    //addItem(id) - This tracks the item id 
}