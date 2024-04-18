export function countDown(n) {
	if (n <= 100 && n > 0) {
		let result = "";
		for (let i = n; i > 0; i--) {
			result += i;
			if (i > 1) {
				result += ", ";
			}
		}
		return result;
	} else {
		return "число больше 100 или меньше 1";
	}
}
