import React from "react";
import "./index.css";

const Footer = props => {
  return (
    <footer>
      <div className="submit-wrapper">
        <h3 className="submit-link">Got jokes? Get paid for submitting</h3>
        <h4>
          Submit Joke{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="14"
            viewBox="0 0 21 14"
          >
            <path
              fill="#D0BA93"
              fillRule="nonzero"
              d="M13.392.268a.952.952 0 0 0-.007 1.342l4.435 4.44H.94A.945.945 0 0 0 0 6.998c0 .525.423.948.941.948h16.871l-4.434 4.44a.96.96 0 0 0 .007 1.341.945.945 0 0 0 1.335-.007l6.01-6.051c.08-.088.146-.183.197-.3a.95.95 0 0 0-.197-1.028L14.72.29a.93.93 0 0 0-1.328-.022z"
            />
          </svg>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
