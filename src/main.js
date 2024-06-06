const { GITHUB_USERNAME, DISPLAY_TYPE, DISPLAY_WIDTH, DISPLAY_HEIGHT } = require('./config');
const Display = require('./display.js');
const GitHubStreak = require('../src/githubstreak.js');

async function main() {
    try {
        const githubStreak = new GitHubStreak(GITHUB_USERNAME);
        const streakData = await githubStreak.fetchStreakData();

        const display = new Display(DISPLAY_TYPE, DISPLAY_WIDTH, DISPLAY_HEIGHT);
        display.renderStreak(streakData);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
