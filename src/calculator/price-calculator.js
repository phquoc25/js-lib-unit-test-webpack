export function calculatePrice(products, promotionService) {
    return products.map((product) => getProductPrice(promotionService, product))
    .reduce((sum, price) => {
        return sum + price;
    }, 0);
}

function getProductPrice(promotionService, product) {
    const discountOnProduct = promotionService.getDiscount(product.code) * product.price;
    return product.price - discountOnProduct;
}
