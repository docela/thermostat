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

    it("Power saving mode is on by default", function () {
        expect(thermostat.power_saving_mode).toBe(true);
    });

    it("If power saving mode is on, the maximum temperature to be 25", function () {
        expect(thermostat.max_temp).toEqual(25);
    });

    it("If power saving mode is off, the maximum temperature to be 32", function () {
        thermostat.power_saving_off();
        expect(thermostat.max_temp).toEqual(32);
    });

    it("Resets the temperature to 20", function(){
        thermostat.reset();
        expect(thermostat.temperature).toEqual(20);
    });

    it("Turns power saving mode on", function(){
        thermostat.power_saving_off();
        thermostat.temp_up(12);
        thermostat.power_saving_on();
        expect(thermostat.temperature).toEqual(25);
    });
});