import moment from "moment";
import { Buffer } from "buffer";
const formatCurrency = (price) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return VND.format(price);
};

const convertToBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(xhr.response);
      } else {
        reject(new Error("Request failed. Status: " + xhr.status));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Request failed"));
    };

    xhr.send();
  });
};

const convertToBlob = (base64String) => {
  const byteCharacters = atob(
    base64String.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
  );
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: "image/jpeg" }); // Thay đổi kiểu MIME tùy thuộc vào loại ảnh

  return blob;
};

const calculateDateDifference = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // Số milliseconds trong một ngày

  // Chuyển đổi ngày thành đối tượng Date
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Tính toán số ngày giữa hai ngày
  const diffInDays = Math.round(Math.abs((end - start) / oneDay));

  return diffInDays;
};
const handleScheduleDay = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // Số milliseconds trong một ngày
  const dayStart = moment(startDate, "DD/MM/YYYY").toDate();
  const dayEnd = moment(endDate, "DD/MM/YYYY").toDate();
  const timeDiff = Math.abs(dayEnd.getTime() - dayStart.getTime());
  const daysDiff = Math.ceil(timeDiff / oneDay);

  return daysDiff;
};
const handleLoadDataImageFromData = (data) => {
  const base64 = Buffer.from(data, "base64").toString("binary");
  return base64;
};

export {
  formatCurrency,
  convertToBase64,
  convertToBlob,
  calculateDateDifference,
  handleScheduleDay,
  handleLoadDataImageFromData,
};
