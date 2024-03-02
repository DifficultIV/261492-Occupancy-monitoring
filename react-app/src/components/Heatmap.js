import React, { useState } from "react";
import '../App.css';
let size = 0
let bgcolor = "bg-green-700"
let bordercolor = "green"
function Heatmap({ data }) {
    if (data.current >= 10) size = 20
    else if (data.current >= 7) size = 16
    else if (data.current >= 4) size = 14
    else size = 12
    if (data.in >= data.out) {
        bgcolor = "bg-green-700"
        bordercolor = "green"
    }
    else {
        bgcolor = "bg-red-600"
        bordercolor = "red"
    }

    return (
        <div className={`rounded-full border-2 w-${size} h-${size} border-${bordercolor} ${bgcolor} m-auto text-center `}>
            {data.current}
        </div>
    )
}

export default Heatmap