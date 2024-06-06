const fetch = require('node-fetch');

class GitHubStreak {
    constructor(username) {
        this.username = username;
    }

    async fetchStreakData() {
        // Implement logic to fetch GitHub streak data
        // This is a placeholder for actual API calls and data processing
        const response = await fetch(`https://github.com/${this.username}`);
        if (response.ok) {
            return "Sample streak data";
        } else {
            throw new Error("Error fetching data");
        }
    }
}

module.exports = GitHubStreak;
