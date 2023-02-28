import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropList(props) {
  const { tour, params } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <Link
        to={tour.link}
        className={params === tour.link ? "selectDropdown" : "dropdown-toggle"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {tour.text}
      </Link>

      <div onMouseLeave={() => setIsOpen(false)}>
        {isOpen && (
          <ul className="dropdown-list flex">
            {tour.regions.map((region, index) => (
              <Link
                className={params === region.link ? "activeLink" : "link"}
                onMouseEnter={() => setIsOpen(true)}
                key={`region-${index}`}
                to={region.link}
              >
                {region.name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropList;
