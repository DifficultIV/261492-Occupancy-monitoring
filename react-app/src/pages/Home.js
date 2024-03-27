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
                    <div className='border-4 rounded-md flex-col justify-between w-fit h-fit bg-slate-200 m-8'>
                        สาย 3
                    </div>
                    {data.map((item, i) => (
                        <div key={i} className='grid grid-cols-3'>
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>หมายเลขรถ</div>
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>สถานีปัจจุบัน</div>
                            <div className='flex justify-center w-auto h-fit m-8 font-bold'>จำนวนคนบนรถ</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-slate-200 m-8 text-center'>{item.busid}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-slate-200 m-8 text-center'>{item.station}</div>
                            <div className='border-4 rounded-md flex-col justify-between w-auto h-8 bg-slate-200 m-8 text-center'>{item.current}/16</div>
                        </div>
                    )
                    )}

                    <div>
                        <div className='justify-between w-auto h-fit mt-8 ml-8 font-bold'>การใช้งานแต่ละสถานี</div>
                        <div className='justify-between w-auto h-fit text-xs ml-8'>ตัวเลขแสดงถึงจำนวนคนบนรถในแต่ละสถานี โดยยิ่งจำนวนเยอะขนาดของวงกลมจะใหญ่ขึ้น</div>
                        <div className='justify-between w-auto h-fit text-xs ml-8 mb-8'>สีของวงกลมแสดงถึงการขึ้นลงของแต่ละสถานี หากจำนวนคนขึ้นมากกว่าคนลงจะแสดงเป็นสีเขียว แต่ถ้าจำนวนคนลงมากกว่าคนขึ้นจะแสดงเป็นสีแดง</div>
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