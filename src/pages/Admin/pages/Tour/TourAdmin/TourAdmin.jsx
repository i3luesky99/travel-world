import React, { useState } from "react";
import BaseTable from "../../../Components/BaseTable";
import Pagination from "@mui/material/Pagination";
import useModel from "../../../../../hook/useModel";
import Loading from "../../../../../components/Loading/Loading";
import { handleGetAllTour } from "../../../../../services/tourService";
import { useEffect } from "react";

export default function TourAdmin() {
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const [tours, setTours] = useState();
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);

  const onPageChange = (e, value) => {
    setPage(value);
  };

  const onFindTour = async () => {
    const data = await handleGetAllTour();
    if (searchItem) {
      const newTour = data.tour.filter((tour) => {
        return (
          tour.placeDest.toLowerCase().includes(searchItem.toLowerCase()) ||
          tour.id.toString() === searchItem
        );
      });
      fetchTour(newTour);
    } else {
      fetchTour();
    }
  };

  const fetchTour = async (newTour) => {
    const data = await handleGetAllTour();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchItem("");
      setTours(newTour || data.tour);
    }, 1000);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const props = {
    tours: tours,
    setTours: setTours,
    fetchTour: fetchTour,
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
      {tours?.length > 0 ? (
        <>
          <BaseTable {...props} />
          {/* <Stack className="stack">
            <Pagination
              count={10}
              page={page}
              variant="outlined"
              color="primary"
              onChange={onPageChange}
            />
          </Stack> */}
        </>
      ) : (
        <div className="empty-text">Không có tour nào</div>
      )}

      {isLoading && <Loading />}
    </div>
  );
}
