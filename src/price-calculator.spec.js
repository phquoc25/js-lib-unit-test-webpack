import { calculatePrice } from "./price-calculator";
import { Product } from "./product";

describe('price-calculator', () => {
    describe('#calculatePrice', () => {
        it('should return sum of the product price after the discount', () => {
            // GIVEN
            const bananaCode = 1;
            const bananaDiscount = 0.5;
            const potatoCode = 2;
            const potatoDiscount = 0.9;
            const banana = new Product(bananaCode, 'banana', 50000);
            const potato = new Product(potatoCode, 'potato', 100000);
            const products = [banana, potato];
            const expectedPrice = 35000;

            const promotionService = jasmine.createSpyObj('PromotionService', ['getDiscount']);
            promotionService.getDiscount
            .withArgs(bananaCode).and.returnValue(bananaDiscount)
            .withArgs(potatoCode).and.returnValue(potatoDiscount);
            
            // WHEN
            const price = calculatePrice(products, promotionService);
            // THEN
            expect(promotionService.getDiscount).toHaveBeenCalledWith(bananaCode);
            expect(promotionService.getDiscount).toHaveBeenCalledWith(potatoCode);
            expect(price).toEqual(expectedPrice);
        });
    });
});