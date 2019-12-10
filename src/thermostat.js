"use strict";

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.min_temp = 10;
        this.power_saving_mode = true;
        this.max_temp = 25;
    }

    temp_up(temp) {
        this.temperature += temp;

        if (this.power_saving_mode === true && this.temperature > this.max_temp) {
            this.temperature = this.max_temp;
            return "Power saving mode is on. The maximum temperature is 25 degrees.";
        }
        else if (this.power_saving_mode === false && this.temperature > this.max_temp) {
            this.temperature = this.max_temp;
            return "Power saving mode is off. The maximum temperature is 32 degrees.";
        } else {
            return `The temperature is now ${this.temperature} degrees.`;
        }
    }

    temp_down(temp) {
        this.temperature -= temp;

        if (this.temperature < this.min_temp) {
            this.temperature = this.min_temp
            return "The temperature cannot be lower than 10 degrees, which it will now be set to.";
        }

        return `The temperature is now ${this.temperature} degrees.`;
    }

    power_saving_off() {
        this.power_saving_mode = false;
        this.max_temp = 32;
        return "Power saving mode is off."
    }

    power_saving_on() {
        this.power_saving_mode = true;
        this.max_temp = 25;

        if (this.power_saving_mode === true && this.temperature > this.max_temp) {
            this.temperature = this.max_temp;
            return "Power saving mode is on. The maximum temperature is 25 degrees.";
        }
    }

    energyUsage() {
        if (this.temperature < 18) {
            return "low-usage";
        }
        else if (this.temperature >= 18 && this.temperature < 25) {
            return "medium-usage";
        }
        else {
            return "high-usage";
        }
    }

    reset() {
        this.temperature = 20;
        return "The thermostat has been reset to the default temperature of 20 degrees."
    }
}