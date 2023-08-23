import React, { useEffect, useRef } from "react";
import "../function/chart";

import "./css/nisba.scss";

function Nisba({ labels, datasets, type }) {
    const ctx = useRef(null);

    const config_pie = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
                text: "Chart.js Pie Chart",
            },
            legend: {
                labels: {
                    usePointStyle: false,
                    padding: 30,
                    boxWidth: 0,
                    boxHeight: 0,

                    font: {
                        size: 0,
                        family: "'Inter', sans-serif",
                    },
                },
            },
        },
    };
    const config = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                    display: false,
                    drawBorder: false,
                },
                ticks: { color: "#0000", beginAtZero: true },
            },
            x: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                },
            }
        },
        plugins: {
            title: {
                display: false,
                text: "Cubic interpolation mode",
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 10,
                    boxHeight: 10,
                    font: {
                        size: 14,
                        family: "'Inter', sans-serif",
                    },
                },
            },
        },
        animations: {
            radius: {
                duration: 400,
                easing: "linear",
                loop: (context) => context.active,
            },
        },
        hoverRadius: 12,
    };

    useEffect(() => {
        return () => {
            getx(ctx.current, type);
        };
    }, []);

    const getx = (id, typ) => {
        if (id) {
            
            let x = typ === "pie" ? config_pie : config;


            new Chart(id, {
                type: type,
                data: {
                    labels: labels,
                    datasets: datasets,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
                options: x,
            });
        }
    };

    return (
        <div className={type === "pie" ? "nisba_pie" : "nisba"}>
            <canvas id="nisbax" ref={ctx}></canvas>
        </div>
    );
}

export default Nisba;
