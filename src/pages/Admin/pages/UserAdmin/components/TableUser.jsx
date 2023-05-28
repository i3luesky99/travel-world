import React, { useState } from "react";
import { useEffect } from "react";
import { Popup } from "../../../../../components";
import { handleDeleteUserById } from "../../../../../services/userService";
export default function TableUser(props) {
  const headerTable = {
    delete: "",
    id: "Mã khách hàng",
    email: "Email",
    name: "Tên khách hàng",
    phone: "Số điện thoại",
  };

  const [open, setOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const headerArr = Object.values(headerTable);
  const { users, fetchUser } = props;

  const handleOpenDialog = async (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const deleteUser = async () => {
    await handleDeleteUserById(selectedId);
    fetchUser();
  };

  useEffect(() => {
    if (isAccept) {
      deleteUser();
      setIsAccept(false);
    }
  }, [isAccept]);
  const propsPopup = {
    open: open,
    setOpen: setOpen,
    isDelete: isAccept,
    setIsAccept: setIsAccept,
    title: "Bạn có chắc muốn xóa người dùng này không ?",
  };
  return (
    <div className="table-container">
      <table className="base-table">
        <thead>
          <tr>
            {headerArr.map((headerValue, index) => (
              <th key={`${index}-header`}>{headerValue}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map((destination, index) => (
            <tr key={`${index}-destination`}>
              <td>
                <img
                  src={require("../../../../../assets/picture/icon/delete.png")}
                  alt=""
                  className="icon"
                  onClick={() => handleOpenDialog(destination?.id)}
                />
              </td>
              <td>{destination?.id}</td>
              <td>{destination?.email}</td>
              <td>{destination?.fullName}</td>
              <td>{destination?.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup {...propsPopup} />
    </div>
  );
}
