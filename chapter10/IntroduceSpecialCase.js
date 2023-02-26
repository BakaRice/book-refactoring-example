/**
 * 引入特例
 * introduce special case
 */
if (aCustomer === "unknown") customerName = "occupant";


class UnknownCustomer {
    get name() { return "occupant"; }
}

class Site {
    get customer() { return this._customer; }
}