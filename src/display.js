class Display {
    constructor(displayType, width, height) {
        this.displayType = displayType;
        this.width = width;
        this.height = height;
    }

    renderStreak(streakData) {
        // Implement the logic to render the streak data on the display
        // This is a placeholder for actual display rendering logic
        console.log(`Displaying streak data on ${this.displayType} with resolution ${this.width}x${this.height}`);
    }
}

module.exports = Display;
