// Set a cookie
document.cookie = "username=John Doe; expires=Thu, 1 Jan 2025 00:00:00 UTC; path=/";
// Retrieve a cookie
const cookies = document.cookie;
console.log(cookies); // Output: "username=John Doe; otherCookie=value"
// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
