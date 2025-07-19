// This function wraps Firebase's onAuthStateChanged
// It takes a callback and runs it whenever the user's auth state changes (login, logout, etc.)
// we use this function in the context code
// so whenever the auth state changes, the callback gets executed
// the below method and the useEffect in context work hand in hand to track auth state and maintain it globally
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);