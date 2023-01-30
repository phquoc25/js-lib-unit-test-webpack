import { calculatePrice } from "./price-calculator";

describe('my first test', () => {
    it('should fail the test', () => {
        calculatePrice();
        fail('hehe');
    });
});