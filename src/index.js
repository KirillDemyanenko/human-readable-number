module.exports = function toReadable(number) {
    const getString = (n) => {
        let words = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        };
        if (n < 20) {
            return words[n];
        } else if (n < 100 && n % 10 === 0) {
            return words[n];
        } else if (n < 100) {
            return words[n - (n % 10)].concat(" ", words[n % 10]);
        }
    }
    if (number < 100) {
        return getString(number);
    } else if (number < 1000 && number > 99) {
        if (number % 100 === 0) {
            return getString(number / 100).concat(" hundred");
        } else {
            return getString(Math.floor(number / 100)).concat(" hundred ", getString(number % 100));
        }
    }
};
