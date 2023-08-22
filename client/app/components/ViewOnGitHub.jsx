import React from "react";

const ViewOnGitHub = () => {
  return (
    <>
      <div
        className="flex items-center mt-4"
        onMouseOver={(e) => {
          e.target.style.cursor = "pointer";
        }}
        onClick={() => {
          window.open("https://github.com/infiniteoo/pallet_plaques");
        }}
      >
        <div className="w-8 h-8">
          {/* display svg image GitHubIcon */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m0 0h24v24h-24z"
              fill="#fff"
              opacity="0"
              transform="matrix(-1 0 0 -1 24 24)"
            />
            <path
              d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"
              fill="#231f20"
            />
          </svg>
        </div>

        <label className="ml-2">View on GitHub</label>
      </div>
    </>
  );
};

export default ViewOnGitHub;
