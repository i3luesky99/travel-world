import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Popup } from "../../../components";
import Loading from "../../../components/Loading/Loading";
import { formatCurrency } from "../../../theme/functions";
import "../../../assets/scss/components/loading.scss";
import useModel from "../../../hook/useModel";
export default function BaseTable(props) {
  const headerTable = {
    delete: "",
    id: "Mã tour",
    location: "Địa điểm",
    img: "Bộ sưu tập",
    dateGo: "Ngày đi",
    dateBack: "Ngày về",
    price: "Giá gốc",
    // person: "Số lượng người lớn",
    // children: "Số lượng người trẻ em",
  };
  const [open, setOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const headerArr = Object.values(headerTable);
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);
  const { tours, setTours } = props;
  const handleOpenDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleDeleteTour = useCallback(() => {
    if (isAccept) {
      setIsLoading(true);
      const deleteTour = tours.filter((tour) => {
        return tour.id !== selectedId;
      });
      setTimeout(() => {
        setIsLoading(false);
        setTours(deleteTour);
        setIsAccept(false);
      }, 2000);
    }
  }, [selectedId, tours, setTours, isAccept, setIsLoading]);

  const handleToTouDetail = (id) => {
    window.location.replace(`/admin/tour-detail/${id}`);
  };

  useEffect(() => {
    handleDeleteTour();
  }, [handleDeleteTour, setIsLoading]);

  const propsPopup = {
    open: open,
    setOpen: setOpen,
    isDelete: isAccept,
    setIsAccept: setIsAccept,
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
          {tours?.map((destination, index) => (
            <tr
              key={`${index}-destination`}
              onClick={() => handleToTouDetail(destination?.id)}
            >
              <td>
                <img
                  src={require("../../../assets/picture/icon/delete.png")}
                  alt=""
                  className="icon"
                  onClick={() => handleOpenDialog(destination?.id)}
                />
              </td>
              <td>{destination?.id}</td>
              <td>{destination?.location}</td>
              <td>
                <img className="collection" src={destination?.img[0]} alt="" />
              </td>
              <td>{destination?.dateGo}</td>
              <td>{destination?.dateBack || "22/04/2022"}</td>
              <td>{formatCurrency(destination?.prices)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup {...propsPopup} />
      {isLoading && <Loading />}
    </div>
  );
}
