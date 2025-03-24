import React, { useState } from "react";

export default function GitHubSearch() {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    getUserDetails(data);
  }

  (error) => setError(error.message);

  function getUserDetails(userInput) {
    setError("");
    setUser(null);

    fetch(`https://api.github.com/users/${userInput.username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          return;
        }
        setUser(data);
      });
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        action=""
        id="username-form"
        class="flex items-center w-full"
      >
        <input
          type="text"
          name="username"
          id=""
          class="border border-blue-800 rounded-l p-2 flex-grow"
          placeholder="Enter your Github username"
          required
        />
        <button class="bg-blue-500 text-white px-4 py-2.5 rounded-r">
          Search
        </button>
      </form>

      {user ? (
        <>
          <div id="userInfo">
            <h3 id="username">{user.login}</h3>
            <img
              alt="user-image"
              src={user.avatar_url}
              id="userimage"
              class="w-16 h-16 rounded-full object-cover object-center"
            />
          </div>
          <div>
            <span>Public repos:</span>
            <span id="public_repos">{user.public_repos}</span>
          </div>
          <div>
            <span>followers:</span>
            <span id="followers">{user.followers}</span>
          </div>
        </>
      ) : (
        <p id="error" class="text-red-500 font-bold hidden">
          {error}
        </p>
      )}
    </>
  );
}
