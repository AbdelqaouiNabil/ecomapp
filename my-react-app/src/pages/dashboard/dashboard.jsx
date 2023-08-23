import React, { useEffect } from "react";
import "./dashboard.scss";
import Nisba from "../../component/Nisba";
import { colors } from "../../data/style";

function dashboard() {
    const data_a = {
        type: "line",
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Mehdi"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 2.5,
                borderColor: "#525fe1",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#525fe140",
            },
            {
                label: "# of Votes",
                data: [10, 12, 6, 8, 10, 12],
                borderWidth: 2.5,
                borderColor: "#6ad3ff",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#6ad3ff2b",
            },
        ],
    };
    const data_b = {
        type: "bar",
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Mehdi"],
        datasets: [
            {
                label: "# of Votes",
                data: [10, 1, 6, 5, 2, 8],
                borderWidth: 0,
                borderColor: "#0000",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#525fe1",
                barPercentage:0.4,
            },
            {
                label: "# of Votes",
                data: [5, 8, 2, 1, 6, 5],
                borderWidth: 0,
                borderColor: "#0000",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#6ad3ff",
                barPercentage:0.4,
            },
        ],
    };
    const data_c = {
        type: "pie",
        labels: ["Red", "Orange"],
        datasets: [
            {
                label: "Dataset 1",
                data: ["80", "150"],
                backgroundColor: [colors.main_color, colors.main_color_2],
                //backgroundColor: ["#525fe1", "#6ad3ff"],
                borderWidth: 0,
            },
        ],
    };
    const data_d = {
        type: "bar",
        labels: ["01", "02", "03", "04", "05", "06"],
        datasets: [
            {
                label: "# of Votes",
                data: [10, 1, 6, 5, 2, 8],
                borderWidth: 0,
                borderColor: "#0000",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#6ad3ff",
                barPercentage:0.3,
                borderRadius:10,
            },
        ],
    };

    return (
        <>
            <div className="container">
                <div className="box a a1">
                    <span className="ico_trending">
                        <i className="material-symbols-outlined">trending_up</i>
                    </span>
                    <span className="icon">
                        <i className="material-symbols-outlined">
                            currency_exchange
                        </i>
                    </span>
                    <div className="text">
                        <h6>total sales</h6>
                        <span className="n">595</span>
                    </div>
                </div>
                <div className="box a a2">
                    <span className="ico_trending">
                        <i className="material-symbols-outlined">trending_up</i>
                    </span>
                    <span className="icon">
                        <i className="material-symbols-outlined">
                            order_approve
                        </i>
                    </span>
                    <div className="text">
                        <h6>total orders</h6>
                        <span className="n">808</span>
                    </div>
                </div>
                <div className="box a a3">
                    <span className="ico_trending">
                        <i className="material-symbols-outlined">trending_up</i>
                    </span>
                    <span className="icon">
                        <i className="material-symbols-outlined">
                            shopping_cart_checkout
                        </i>
                    </span>
                    <div className="text">
                        <h6>Lorem, ipsum </h6>
                        <span className="n">5000</span>
                    </div>
                </div>
                <div className="box a a4">
                    <span className="ico_trending">
                        <i className="material-symbols-outlined">trending_up</i>
                    </span>
                    <span className="icon">
                        <i className="material-symbols-outlined">call</i>
                    </span>
                    <div className="text">
                        <h6>Lorem, ipsum </h6>
                        <span className="n">5000</span>
                    </div>
                </div>
                <div className="box b1">
                    <span className="tit">
                        <i className="material-symbols-outlined">
                            candlestick_chart
                        </i>
                        Lorem, ipsum dolor.
                    </span>
                    <Nisba
                        labels={data_a.labels}
                        datasets={data_a.datasets}
                        type={data_a.type}
                    ></Nisba>
                </div>
                <div className="box b2">
                    <span className="tit">
                        <i className="material-symbols-outlined">ssid_chart</i>
                        Lorem, ipsum dolor.
                    </span>
                    <Nisba
                        labels={data_b.labels}
                        datasets={data_b.datasets}
                        type={data_b.type}
                    ></Nisba>
                </div>
                <div className="box c1">
                    <span className="tit">
                        <i className="material-symbols-outlined">
                            candlestick_chart
                        </i>
                        Lorem, ipsum dolor.
                    </span>
                    <Nisba
                        labels={data_c.labels}
                        datasets={data_c.datasets}
                        type={data_c.type}
                    ></Nisba>
                    <div className="box_pie">
                        <div className="rate">
                            <span className="rate_tit">
                                <i style={{ backgroundColor: "#525fe1" }}></i>
                                Lorem, ipsum.
                            </span>
                            <h6>150</h6>
                        </div>
                        <div className="rate">
                            <span className="rate_tit">
                                <i style={{ backgroundColor: "#6ad3ff" }}></i>
                                Lorem, ipsum.
                            </span>
                            <h6>80</h6>
                        </div>
                    </div>
                </div>
                <div className="box c2">
                    <Nisba
                        labels={data_d.labels}
                        datasets={data_d.datasets}
                        type={data_d.type}
                    ></Nisba>
                </div>
                <div className="box c3"></div>
            </div>
        </>
    );
}

export default dashboard;
