class Thermostat {
    constructor(){
        this.temperature = 20;
    }
    temp_up(temp) {
        this.temperature += temp;
    }
}