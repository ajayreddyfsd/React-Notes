import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);
  const [page, setPage] = useState(1);

  // ========================
  // 1. Empty Dependency Array
  // ========================
  // Runs once when component mounts (like componentDidMount)
  useEffect(() => {
    console.log("1. Mounting - fetching initial data");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []); // <-- Empty array = runs once when component mounts

  // ========================
  // 2. No Dependency Array
  // ========================
  // Runs AFTER EVERY RENDER (DANGEROUS for fetch!)
  useEffect(() => {
    console.log("2. Running after every render - be careful!");
    // This would cause infinite loops with fetch + setState
  }); // <-- No array = runs always or runs after every render

  // ========================
  // 3. With Dependencies
  // ========================
  // Runs WHENEVER dependencies CHANGE
  useEffect(() => {
    console.log(`3. Fetching user ${userId}'s data`);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((userData) => console.log("User data:", userData))
      .catch((err) => console.error("User fetch error:", err));
  }, [userId]); // <-- Runs when dependencies CHANGE, here userId is the dependency

  return <div></div>;
}

export default DataFetcher;
