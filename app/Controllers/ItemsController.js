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

function _drawModal() {
    debugger
    let modal = ''
    ProxyState.items.forEach(item => {
        modal += item.ModalTemplate
    })
    document.getElementById("modal").innerHTML = modal
}
export default class ItemsController {
    constructor() {
        saveState()
        _draw()
        _drawModal()
        loadState()
    }


    //addItem(id) - This tracks the item id 
}