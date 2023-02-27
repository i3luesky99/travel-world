import React, { useState } from "react";

function DropList(props) {
  const { tour } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {tour.text}
      </div>
      <div onMouseLeave={() => setIsOpen(false)}>
        {isOpen && (
          <ul className="dropdown-list">
            {tour.regions.map((region, index) => (
              <li onMouseEnter={() => setIsOpen(true)} key={`region-${index}`}>
                {region.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropList;
