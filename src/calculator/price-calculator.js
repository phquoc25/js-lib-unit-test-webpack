export class PriceCalculator {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }

    getProductPrice(product) {
        const discountOnProduct = this.promotionService.getDiscount(product.code) * product.price;
        return product.price - discountOnProduct;
    }

    calculatePrice(products) {
        return products.map((product) => this.getProductPrice(product))
        .reduce((sum, price) => {
            return sum + price;
        }, 0);
    }
}
