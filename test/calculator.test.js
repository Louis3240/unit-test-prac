class Calculator {
    sum(first, second) {
        return first - second;
    }
}

describe('calculator add', function () {
    it('positive add positive', () => {
        let calculator = new  Calculator();
        let sum = calculator.sum(1,2);
        expect(sum).toBe(3);
    });
});

class StringCombine {
    combine(a,b){
        return a+b
    }
}

describe('string add', function () {
    it('string combine', function () {
        let stringCombine = new StringCombine();
        let combine = stringCombine.combine("1","2");
        expect(combine).toBe("12");
    });
});