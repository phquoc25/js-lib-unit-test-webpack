import promotion from './promotion-data.json'

export class PromotionService {
    getDiscount(productCode) {
        const promotionFound = promotion.find((prom) => prom.productCode === productCode);
        return promotionFound ? promotionFound.discount : 1;
    }
}