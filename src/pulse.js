import React from "react";

const Pulse = ({color}) => {
  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.625 17.5H6.125L9.625 3.5L13.125 24.5L16.625 12.25L18.375 17.5H21.875"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.625 19.25C24.5915 19.25 25.375 18.4665 25.375 17.5C25.375 16.5335 24.5915 15.75 23.625 15.75C22.6585 15.75 21.875 16.5335 21.875 17.5C21.875 18.4665 22.6585 19.25 23.625 19.25Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Pulse;
