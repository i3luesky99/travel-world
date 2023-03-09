import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuDialog(props) {
  const { banks, params } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {banks.name}
      </div>

      <div onMouseLeave={() => setIsOpen(false)}>
        {isOpen && (
          <ul className="dropdown-list flex">
            {banks.map((banks, index) => (
              <Link
                className={params ? "activeLink" : "link"}
                onMouseEnter={() => setIsOpen(true)}
                key={`banks-${index}`}
              >
                {banks.name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MenuDialog;
