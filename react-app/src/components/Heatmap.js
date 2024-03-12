import React, { useState } from "react";
import '../App.css';
let size = 0
let bgcolor = "bg-green-700"
let bordercolor = "green"
function Heatmap({ data }) {
    if (data.current >= 10) size = 80
    else if (data.current >= 7) size = 64
    else if (data.current >= 4) size = 56
    else size = 48
    if (data.in >= data.out) {
        bgcolor = "bg-green-500"
        bordercolor = "green"
    }
    else {
        bgcolor = "bg-red-500"
        bordercolor = "red"
    }

    return (
        <div className={`rounded-full border-2 border-${bordercolor} ${bgcolor} m-auto text-center  `}
        style={{height: `${size}px`, width: `${size}px`}}>
            {data.current}
        </div>
            //     <div className={`rounded-full border-2 w-20 h-20 border-${bordercolor} ${bgcolor} m-auto text-center `}>
            //     {data.current}
            // </div>
    )
}

export default Heatmap