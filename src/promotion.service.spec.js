import { PromotionService } from "./promotion.service";

describe('PromotionService', () => {
    let service;
    beforeEach(() => {
        service = new PromotionService();
    });

    describe('getDiscount', () => {
        it('should return 1 when there is no promotion', () => {
            // GIVEN
            const productCode = 123;
            // WHEN
            const result = service.getDiscount(productCode);
            // THEN
            expect(result).toEqual(1);
        });

        it('should return product discount when there is promotion for the given product', () => {
            // GIVEN
            const productCode = 1;
            // WHEN
            const result = service.getDiscount(productCode);
            // THEN
            expect(result).toEqual(0.1);
        });
    });
});