"use client";
import React from "react";

const GithubLink = () => {
  const handleClick = () => {
    window.open("https://github.com/abdullahanzar/lu-crawler/", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.799 8.207 11.387.6.11.793-.261.793-.577v-2.163c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.494.998.108-.774.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.123-.302-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.048.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.823 1.103.823 2.223v3.293c0 .32.192.694.801.577C20.565 21.795 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
      </svg>
      <span>Open GitHub Repository</span>
    </button>
  );
};

export default GithubLink;
