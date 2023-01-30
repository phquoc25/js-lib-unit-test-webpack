export function calculatePrice(products, promotionService) {
    return products.map((product) => getProductPrice(promotionService, product)).sum();
}

function getProductPrice(promotionService, product) {
    return promotionService.getDiscount(product.code) * product.price;
}
