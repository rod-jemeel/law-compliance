import React from "react";

export function ComplianceLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="5"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 11.5L14 17L12.5 15.5L11 17L14 20L21 13L19.5 11.5Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="4"
          y1="4"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-primary)" />
          <stop offset="1" stopColor="var(--color-secondary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
