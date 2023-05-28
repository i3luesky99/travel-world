import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading/Loading";
import BaseTable from "../../Components/BaseTable";
// import { handleGetAllUser } from "../../../../services/tourService";
// import { handleGetAllBookUser } from "../../../../services/bookUserService";
import useModel from "../../../../hook/useModel";
import TableUser from "./components/TableUser";
import { handleAllGetUser } from "../../../../services/userService";

export default function UserAdmin() {
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const [users, setUser] = useState();
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);
  const [selection, setSelection] = useState("list");

  const onPageChange = (e, value) => {
    setPage(value);
  };
  const onFindUser = async () => {
    // const data = await handleGetAllUser();
    // if (searchItem) {
    //   const newUser = data.tour.filter((tour) => {
    //     return (
    //       tour.placeDest.toLowerCase().includes(searchItem.toLowerCase()) ||
    //       tour.id.toString() === searchItem
    //     );
    //   });
    //   fetchUser(newUser);
    // } else {
    //   fetchUser();
    // }
  };

  const fetchUser = async (newUser) => {
    const data = await handleAllGetUser();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchItem("");
      setUser(newUser || data.user);
    }, 1000);
  };

  useEffect(() => {
    fetchUser();
  }, [selection]);

  const props = {
    users: users,
    setUser: setUser,
    fetchUser: fetchUser,
    selection: selection,
  };

  return (
    <div className="tour-admin">
      <div className="title-admin">Danh sách Khách hàng</div>
      <div className="search">
        <div>Tên / Mã Khách Hàng</div>
        <div className="search-bar">
          <select
            value={selection}
            className="form-control"
            onChange={(e) => setSelection(e.target.value)}
          >
            <option value="list">Danh sách khách hàng</option>
            <option value="booking">Danh sách đã đặt tour</option>
          </select>
          <input
            type="text"
            value={searchItem}
            className="form-control"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <div className="button" onClick={onFindUser}>
            Tìm kiếm
          </div>
          <div className="reload-button" onClick={() => fetchUser()}>
            <img
              src={require("../../../../assets/picture/icon/reload.png")}
              alt=""
              className="icon"
            />
          </div>
        </div>
      </div>
      {users?.length > 0 ? (
        <>
          <TableUser {...props} />
        </>
      ) : (
        <div className="empty-text">Không có tour nào</div>
      )}

      {isLoading && <Loading />}
    </div>
  );
}
