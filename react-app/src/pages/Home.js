import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import Heatmap from '../components/Heatmap';
function Home() {
    const [data, setData] = useState([])
    const [recdata, setRecdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/currentdb", { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setData(result)
            })
    }, [])
    useEffect(() => {
        fetch("http://localhost:3000/db", { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setRecdata(result)
            })
    }, [])
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div>
                    <div className='border-4 rounded-md flex-col justify-between w-fit h-fit bg-gray-200 m-8'>
                        สาย 3
                    </div>
                    {data.map((item, i) => (
                        <div key={i} className='grid grid-cols-3'>
                            <div className='flex-col justify-between w-auto h-fit m-8'>รถ</div>
                            <div className='flex-col justify-between w-auto h-fit m-8'>สถานี</div>
                            <div className='flex-col justify-between w-auto h-fit m-8'>จำนวนคนบนรถ</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8 text-center'>{item.busid}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8 text-center'>{item.station}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8 text-center'>{item.current}/12</div>
                        </div>
                    )
                    )}

                    <div className='grid grid-cols-3'>
                        <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>คันที่ 2</div>
                        <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>สถานีที่ 2</div>
                        <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>8/12</div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        recdata.map((item, i) => (
                            <div key={i}>
                                <Heatmap data={item} />
                                <p className='text-center text-wrap'>{item.station}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>

    )
}

export default Home