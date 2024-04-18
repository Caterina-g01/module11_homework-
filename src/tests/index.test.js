import { countDown } from '../index.js';

describe('Tests for countDown function', () => {

	const optionOne = 5; //  корректные данные
	const optionTwo = 8; // корректные данные
	const optionThree = 100; // корректные данные
	const optionFour = 101; // некоректные данные
	const optionFive = -1; // корнер кейс (убеждаемся, что ф-я корректно отрабатывает отрицательные числа)

	it("should count down from n number to 1 or show the fail message", () => {
		expect(countDown(optionOne)).toBe("5, 4, 3, 2, 1");
		expect(countDown(optionTwo)).toBe("8, 7, 6, 5, 4, 3, 2, 1");
		expect(countDown(optionThree)).toMatch(/^100, 99, /);
		expect(countDown(optionFour)).toBe("число больше 100 или меньше 1");
		expect(countDown(optionFive)).toBe("число больше 100 или меньше 1");
	})
});

