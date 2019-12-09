describe("A Thermostat", function () {
    var thermostat

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it("default temperature setting is 20 degrees", function () {
        expect(thermostat.temperature).toEqual(20);
    });

    it("increases the temperature", function () {
        thermostat.temp_up(5);
        expect(thermostat.temperature).toEqual(25);
    });

    it("decreases the temperature", function () {
        thermostat.temp_down(5);
        expect(thermostat.temperature).toEqual(15);
    });
});