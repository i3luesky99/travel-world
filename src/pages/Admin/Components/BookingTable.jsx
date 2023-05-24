import React, { useEffect, useState } from "react";
import { handleGetBookTourById } from "../../../services/bookTourService";

export default function BookingTable(props) {
  const { tourId, idCus, payment, adult, children, state, baby } = props;
  const [tours, setTours] = useState();
  const fetchTourBook = async () => {
    const data = await handleGetBookTourById(tourId);
    setTours(data?.bookTour);
  };
  useEffect(() => {
    fetchTourBook();
  }, [tourId]);

  return (
    <div>
      {tours?.map((tour, index) => (
        <>
          <div> {idCus && <>{tour?.customerId}</>}</div>
          <div>
            {payment && (
              <div>
                {tour?.paymentId === "P3" && <div>Tiền mặt</div>}
                {tour?.paymentId === "P6" && <div>VnPay</div>}
                {tour?.paymentId === "P7" && <div>Visa</div>}
              </div>
            )}
          </div>
          <div>
            {state && (
              <div>
                {tour?.state === "S3" && <div>Đã thanh toán</div>}
                {tour?.state === "S1" && <div>Mới tạo</div>}
                {tour?.state === "S4" && <div>Hủy thanh toán</div>}
              </div>
            )}
          </div>
          <div>{adult && <div>{tour?.adultSlot}</div>}</div>
          <div>{children && <div>{tour?.childrenSlot}</div>}</div>
          <div>{baby && <div>{tour?.babySlot}</div>}</div>
        </>
      ))}
    </div>
  );
}
