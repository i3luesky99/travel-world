import React, { useState } from "react";
import BaseTable from "../../../Components/BaseTable";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { destinationSouthern } from "../../../../../theme/data";
import useModel from "../../../../../hook/useModel";
import Loading from "../../../../../components/Loading/Loading";

export default function TourAdmin() {
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const [tours, setTours] = useState(destinationSouthern);
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);

  const onPageChange = (e, value) => {
    setPage(value);
  };

  const onFindTour = () => {
    if (searchItem) {
      const tourById = destinationSouthern.filter((tour) => {
        return (
          tour.location.toLowerCase().includes(searchItem.toLowerCase()) ||
          tour.id.toString() === searchItem
        );
      });
      fetchTour(tourById);
    } else {
      fetchTour();
    }
  };

  const fetchTour = (newTour) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchItem("");
      setTours(newTour || destinationSouthern);
    }, 2000);
  };

  const props = {
    tours: tours,
    setTours: setTours,
  };

  return (
    <div className="tour-admin">
      <div className="title-admin">Danh sách Tour</div>
      <div className="search">
        <div>Địa điểm / Mã Tour</div>
        <div className="search-bar">
          <input
            type="text"
            value={searchItem}
            className="form-control"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <div className="button" onClick={onFindTour}>
            Tìm kiếm
          </div>
          <div className="reload-button" onClick={() => fetchTour()}>
            <img
              src={require("../../../../../assets/picture/icon/reload.png")}
              alt=""
              className="icon"
            />
          </div>
        </div>
      </div>
      {tours.length > 0 ? (
        <>
          <BaseTable {...props} />
          <Stack className="stack">
            <Pagination
              count={10}
              page={page}
              variant="outlined"
              color="primary"
              onChange={onPageChange}
            />
          </Stack>
        </>
      ) : (
        <div className="empty-text">Không có tour nào</div>
      )}

      {isLoading && <Loading />}
    </div>
  );
}
