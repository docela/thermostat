"use strict";

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.min_temp = 10
    }
    temp_up(temp) {
        this.temperature += temp;
    }
    temp_down(temp) {
        this.temperature -= temp;

        if (this.temperature < this.min_temp) {
            this.temperature = this.min_temp
            return "The temperature cannot be lower than 10 degrees! The temperature will now be at the lowest temperature of 10 degrees.";
        }

        return `The temperature is now ${this.temperature} degrees.`;
    }
}