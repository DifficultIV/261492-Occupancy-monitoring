import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import Heatmap from '../components/Heatmap';
function Home() {
    const [data, setData] = useState([])
    const [recdata, setRecdata] = useState([])
    useEffect(() => {
        console.log(process.env.REACT_APP_URL)
        fetch(`${process.env.REACT_APP_URL}/currentdb`, { mode: "cors" })
            .then(res =>
                res.json()
            )
            .then((result) => {
                setData(result)
            })

    }, [])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/db`, { mode: "cors" })
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
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>รถ</div>
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>สถานี</div>
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>จำนวนคนบนรถ</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-gray-200 m-8 text-center'>{item.busid}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-gray-200 m-8 text-center'>{item.station}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-gray-200 m-8 text-center'>{item.current}/16</div>
                        </div>
                    )
                    )}

                    <div>
                        <div className='flex-col justify-between w-auto h-fit m-8'>การใช้งานแต่ละสถานี</div>
                        <div className='grid grid-cols-4 gap-y-12 ml-8'>
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
                </div>



            </div>
        </>

    )
}

export default Home