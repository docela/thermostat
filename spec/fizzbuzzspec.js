describe("Fizzbuzz", function() {
    var fizzbuzz

    beforeEach(function() {
        fizbuzz = new Fizbuzz();
    });

    describe("multiples of 3", function() {
        it("says Fizz if divisible by 3", function() {
            expect(fizzbuzz.play(3)).toEqual("Fizz");
        });
    });

    describe("multiples of 5", function() {
        it("says Buzz if divisible by 5", function() {
            expect(fizzbuzz.play(5)).toEqual("Buzz");
        });
    });

    describe("multiples of both 3 and 5", function() {
        it("says Fizzbuzz if divisible by both 3 & 5", function() {
            expect(fizzbuzz.play(15)).toEqual("Fizzbuzz");
        });
    });
});