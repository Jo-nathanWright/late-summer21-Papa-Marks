import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  pizzas = []
  toppings = []
  /** @type {Item[]} */
  items = [new Item({ name: "Fishing Rod", price: 12.75, description: "This caught the fish!", quantity: 100, imgUrl: "https://pyxis.nymag.com/v1/imgs/1d9/b3b/524f93f27c86c53fc37747b38a77e4e9fa-fishing-6.2x.rsquare.w600.jpg" }),
  new Item({ name: "Fish", price: 4, description: "It's the fish", quantity: 0, imgUrl: '//placehold.it/300x300' })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
