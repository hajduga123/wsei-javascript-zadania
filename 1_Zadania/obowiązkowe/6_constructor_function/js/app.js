function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function (productName, productPrice) {
    this.products.push({
        productName, productPrice
    });
    this.sum += productPrice;
}

Basket.prototype.showBasket = function () {
    for (let i = 0; i < this.products.length; i++) {
        console.log(this.products[i].productName + ' - ' + this.products[i].productPrice);
    }
    console.log('Do zap³aty: ' + this.sum);
}




basket = new Basket();
basket.addProduct('Chleb', 2.20);
basket.addProduct('Mars', 1.75);
basket.addProduct('Pepsi', 2.30);
basket.showBasket();