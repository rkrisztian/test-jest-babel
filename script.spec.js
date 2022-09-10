import { randomInRange } from "./script";
describe('Script', () => {
	test('random number is in range', () => {
		// given
		const min = 7;
		const max = 23;
		// when
		const result = randomInRange(min, max);
		// then
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThan(max);
	});
});
