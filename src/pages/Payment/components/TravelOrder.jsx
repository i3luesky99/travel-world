import React, { useEffect, useRef, useState } from "react";
import { formatCurrency } from "../../../theme/functions";
import { useReactToPrint } from "react-to-print";
import Print from "../../../assets/svg/print";
import { useParams } from "react-router-dom";
import moment from 'moment';
import { handleGetBookTourByTourId } from "../../../services/bookTourService";
import { handleGetUserById } from "../../../services/userService";
import { handleScheduleDay } from "../../../theme/functions";
import { handleGetTourById } from "../../../services/tourService";
function TravelOrder() {
    const [bookTour, setBookTour] = useState();
    const [customer, setCustomer] = useState();
    const [tour, setTour] = useState();
    const [kid, setKid] = useState(0);
    const [adult, setAdult] = useState(0);
    const [baby, setBaby] = useState(0);
    const [totalBookTour, setTotalBookTour] = useState(0);
    const componentPDF = useRef();
    const [open, setOpen] = useState(true);
    const { bookTourId } = useParams();
    const currentDate = moment(tour?.dateGo, 'DD/MM/YYYY');
    const previousDate = currentDate.subtract(3, 'days');
    const handelToPDF = useReactToPrint({
        content: () => componentPDF.current,
        onAfterPrint: () => {
            setOpen(true);
        },
        onBeforeGetContent: async () => {
            setOpen(false);
        },
    });

    const headerTable = {
        tourName: "Độ tuổi",
        dateGo: "",
        dateBack: "",
        slot: "Số lượng",
        price: "Đơn giá",
    };

    const headerArr = Object.values(headerTable);
    const fetchBookTour = async () => {
        let dataBookTourApi = await handleGetBookTourByTourId(bookTourId);
        setBookTour(dataBookTourApi.bookTour);
        let dataCustomerApi = await handleGetUserById(dataBookTourApi.bookTour.customerId);
        setCustomer(dataCustomerApi.user);

        let dataTourApi = await handleGetTourById(dataBookTourApi.bookTour.tourId);
        setTour(dataTourApi.tour);

        //setTotalBookTour(bookTour.adultSlot * tour.adultPrice + bookTour.childrenSlot * tour.childPrice + bookTour.babySlot * tour.babyPrice);
        //console.log(totalBookTour);
    }
    useEffect(() => {
        fetchBookTour()
    }, []);
    return (
        <div className="invoice-main" ref={componentPDF} onFocus={() => {

        }}>
            <div className="invoice-container" style={{ border: !open && "none" }}>
                <div className="invoice-header">ĐẶT TOUR THÀNH CÔNG</div>
                <div className="invoice-content">
                    <div className="logo">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="title-invoice">Công ty</div>
                            <div>Địa chỉ: 96 đường số 2 phường 13, quận Gò Vấp</div>
                            Thành phố: Hồ Chí Minh
                            <div style={{ color: "#a1a19f" }}>Quốc gia: Việt Nam</div>
                        </div>
                        <div className="company-name">LEVART</div>
                    </div>
                    <div className="customer">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="customer-title">
                                Đơn đặt của: {customer?.fullName}
                            </div>
                            <div>Email: {customer?.email}</div>
                            <div>Số điện thoại: {customer?.phoneNumber}</div>
                            <div>*Lưu ý quý khách phải đến quầy thanh toán trước ngày {previousDate.format('DD/MM/YYYY')}.</div>
                            <div>*Lưu ý quý khách nên chụp lại hoặc in đơn đặt để tiện lợi cho việc thanh toán sau này.</div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                color: "#43474a",
                                fontSize: "15px",
                            }}
                        >
                            <div>Mã đơn: {bookTour?.id}</div>
                        </div>
                    </div>
                    <div className="customer">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="customer-title">Thông tin của tour:</div>
                            <div>Tên tour: {tour?.nameTour}</div>
                            <div>Thời gian: {handleScheduleDay(tour?.dateGo, tour?.dateBack)} ngày {handleScheduleDay(tour?.dateGo, tour?.dateBack) - 1} đêm   </div>
                            {/* 3 ngày 2 đêm */}
                            <div>Nơi khởi hành: {tour?.placeGo}  |        Nơi đến: {tour?.placeDest}</div>
                            <div>Ngày đi: {tour?.dateGo}      |    Ngày về: {tour?.dateBack}</div>

                        </div>
                    </div>
                    <div className="invoice-tour">
                        <table className="base-table">
                            <thead style={{ backgroundColor: "#666666" }}>
                                <tr>
                                    {headerArr.map((headerValue, index) => (
                                        <th style={{ color: "white" }} key={`${index}-header`}>
                                            {headerValue}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Người lớn (trên 11 tuổi)</td>
                                    <td></td>
                                    <td></td>
                                    <td>{bookTour?.adultSlot ? bookTour?.adultSlot : 0}</td>
                                    <td>{formatCurrency(tour?.adultPrice ? tour?.adultPrice : 0)}</td>
                                </tr>
                                <tr>
                                    <td>Trẻ em (2 - 11 tuổi)</td>
                                    <td></td>
                                    <td></td>
                                    <td>{bookTour?.childrenSlot ? bookTour?.childrenSlot : 0}</td>
                                    <td>{formatCurrency(tour?.childPrice ? tour?.childPrice : 0)}</td>
                                </tr>
                                <tr>
                                    <td>{`Sơ sinh (< 2 tuổi)`}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{bookTour?.babySlot ? bookTour?.babySlot : 0}</td>
                                    <td>{formatCurrency(tour?.babyPrice ? tour?.babyPrice : 0)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total">
                        <div className="total-prices">
                            <div>TỔNG CỘNG:</div>
                            <div>{formatCurrency(bookTour?.adultSlot * tour?.adultPrice + bookTour?.childrenSlot * tour?.childPrice + bookTour?.babySlot * tour?.babyPrice)}</div>
                        </div>
                    </div>
                    {open && (
                        <div className="icon" onClick={handelToPDF}>
                            <Print
                                style={{ width: "35px", height: "35px", cursor: "pointer" }}
                                fill={"#43474a"}
                            />
                            <div>In đơn đặt</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TravelOrder;
