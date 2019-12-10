describe("A Thermostat", function () {
    var thermostat

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it("Default temperature setting is 20 degrees", function () {
        expect(thermostat.temperature).toEqual(20);
    });

    it("Increases the temperature", function () {
        thermostat.temp_up(5);
        expect(thermostat.temperature).toEqual(25);
    });

    it("Decreases the temperature", function () {
        thermostat.temp_down(5);
        expect(thermostat.temperature).toEqual(15);
    });

    it("Minimum temperature is 10", function () {
        thermostat.temp_down(11);
        expect(thermostat.temperature).toEqual(10);
    });
});