import PizzasController from "./Controllers/PizzasController.js";
import ItemsController from "./Controllers/ItemsController.js";

class App {
  itemsController = new ItemsController()
  pizzasController = new PizzasController()
}

window["app"] = new App();
