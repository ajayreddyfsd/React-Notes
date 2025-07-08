// ✅ Local Storage:
// - Stores more data (5-10MB)
// - Stays until you clear it manually
// - Only available on browser (not sent to server)

// ✅ Cookies:
// - Stores less data (~4KB)
// - Can expire at a set time
// - Sent to server with every request

// local storage or cookies or whatever,
// are stored in browser and not on that webpage

// The browser stores data (like cookies, localStorage, sessionStorage) in files
// It creates separate storage areas (like boxes) for each website (based on domain)
// One website can’t see or access another website's data
// So every site gets its own private storage space inside the browser

// Save (expires in 7 days)
document.cookie = "user=Ajay; max-age=" + 7 * 24 * 60 * 60;

// Get (manual parsing)
console.log(document.cookie); // returns all cookies in one string

// Remove (set to expired)
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
