import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";

function MenuDialog(props) {
  const { banks } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("");
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const selectBank = (bank) => {
    setIsSelect(bank);
  };
  return (
    <ClickAwayListener onClickAway={handleCloseMenu}>
      <div className="menu">
        <div onClick={handleOpenMenu} className="bankDiv">
          <p>{isSelect}</p>
        </div>
        {isOpen && (
          <ul className="menu-list flex" id="menuListID">
            {banks.map((bank, index) => (
              <div className="bank flex" key={`${index} - bank`}>
                <img src={bank.icon} alt="" className="icon" />
                <li
                  className="bankName"
                  onMouseEnter={() => setIsOpen(true)}
                  key={`bank-${index}`}
                  onClick={() => selectBank(bank.name)}
                >
                  {bank.name}
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default MenuDialog;
