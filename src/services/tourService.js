import axios from "../axios";
const handleGetTourByRegion = (region) => {
  return axios.get("/api/get-tour-region", {
    params: {
      region: region,
    },
  });
};
const handleGetTourByContinent = (continent) => {
  return axios.get("/api/get-tour-continent", {
    params: {
      continent: continent,
    },
  });
};
const handleGetTourById = (id) => {
  return axios.get("/api/get-all-tour", {
    params: {
      id: id,
    },
  });
};

const handleCreateTour = (data) => {
  return axios.post("/api/create-new-tour", { ...data });
};

const handleGetAllTour = () => {
  return axios.get("/api/get-all-tour?id=ALL");
};

const handleDeleteTourById = (id) => {
  return axios.delete("/api/delete-tour", {
    data: {
      id: id,
    },
  });
};

const handleCreateTourDetail = (data) => {
  return axios.post("/api/day-detail/create", { ...data });
};
export {
  handleGetTourByRegion,
  handleGetTourById,
  handleGetTourByContinent,
  handleGetAllTour,
  handleDeleteTourById,
  handleCreateTour,
  handleCreateTourDetail,
};
