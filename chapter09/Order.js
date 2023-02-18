import { registerCustomer } from "./env";

class Order {

    constructor(data) {
        this._number = data.number;
        // this._customer = new Customer(data.customer);
        this._customer = registerCustomer(data.customer);
        // load other data
    }

    get customer() {
        return this._customer;
    }
}