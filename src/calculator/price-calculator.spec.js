import { PriceCalculator } from "./price-calculator";
import { Product } from "../product";

describe('PriceCalculator', () => {
    let promotionService;
    let priceCalculator;
    beforeEach(() => {
        promotionService = jasmine.createSpyObj('PromotionService', ['getDiscount']);
        priceCalculator = new PriceCalculator(promotionService);
    });

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

            promotionService.getDiscount
            .withArgs(bananaCode).and.returnValue(bananaDiscount)
            .withArgs(potatoCode).and.returnValue(potatoDiscount);
            
            // WHEN
            const price = priceCalculator.calculatePrice(products);
            // THEN
            expect(promotionService.getDiscount).toHaveBeenCalledWith(bananaCode);
            expect(promotionService.getDiscount).toHaveBeenCalledWith(potatoCode);
            expect(price).toEqual(expectedPrice);
        });
    });
});