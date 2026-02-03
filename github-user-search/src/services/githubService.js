import axios from "axios";

/**
 * Fetches GitHub users based on advanced search criteria
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username
 * @param {string} params.location - User location
 * @param {number} params.minRepos - Minimum public repositories
 * @returns {Array} Array of user objects with full details
 */
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    // Build search query
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // Search API call
    const searchResponse = await axios.get(`https://api.github.com/search/users?q=${query}`);
    const users = searchResponse.data.items || [];

    // Fetch full user details (location, repos, etc.)
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
        return userDetails.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Failed to fetch users");
  }
};
