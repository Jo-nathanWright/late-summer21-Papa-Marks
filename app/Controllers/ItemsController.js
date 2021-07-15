import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { itemsService } from "../Services/ItemsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    let template = ''
    ProxyState.items.forEach(item => {
        template += item.Template
    })
    document.getElementById("items").innerHTML = template
}

function _drawModal() { //modify to _addCart(id)
    debugger
    let modal = ''
    ProxyState.items.forEach(item => {
        //ProxyState.items.filter looking for the ID
        //If it has the same ID, print to Modal, else do nothing
        modal += item.ModalTemplate
    })
    document.getElementById("modal").innerHTML = modal
}

//function _totalPrice()
//let totalPrice = 0
//ProxyState.items.filter looking for the ID
//If it has the same ID, find the total, else do nothing
// ProxyState.items.forEach(item => {
//     totalPrice += item.price
// })
//NOTE will need to make a Money.js

export default class ItemsController {
    constructor() {
        saveState()
        _draw()
        _drawModal()
        loadState()
    }


    //addItem(id) - This tracks the item id 
}