import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Popup } from "../../../components";
import Loading from "../../../components/Loading/Loading";
import { destinationSouthern } from "../../../theme/data";
import { formatCurrency } from "../../../theme/functions";
import "../../../assets/scss/components/loading.scss";
export default function BaseTable() {
  const headerTable = {
    delete: "",
    id: "Mã tour",
    title: "Tên tour",
    img: "Bộ sưu tập",
    dateGo: "Ngày đi",
    dateBack: "Ngày về",
    price: "Giá gốc",
  };
  const [open, setOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const headerArr = Object.values(headerTable);
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState(destinationSouthern);
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
      setTours(deleteTour);
      setIsAccept(false);
    }
  }, [selectedId, tours, isAccept]);

  useEffect(() => {
    handleDeleteTour();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [handleDeleteTour]);

  const props = {
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
            <tr key={`${index}-destination`}>
              <td>
                <img
                  src={require("../../../assets/picture/icon/delete.png")}
                  alt=""
                  className="icon"
                  onClick={() => handleOpenDialog(destination?.id)}
                />
              </td>
              <td>{destination?.id}</td>
              <td>{destination?.title}</td>
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
      <Popup {...props} />
      {isLoading && <Loading />}
    </div>
  );
}
