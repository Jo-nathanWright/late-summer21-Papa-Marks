
import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

export function saveState() {
  localStorage.setItem('Item', JSON.stringify({
    items: ProxyState.items
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Item'))
  console.log(data)
  if (data != null) {
    ProxyState.items = data.items.map(i => new Item(i))
  }

}