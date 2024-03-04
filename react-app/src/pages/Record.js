import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import DropdownLine from '../components/DropdownLine';
import DropdownBus from '../components/DropdownBus';
import Heatmap from '../components/Heatmap';

let time = "0"
let page = 0
const fetchButton = async () => {
    try {
        const respone = await fetch(`${process.env.URL}/recorddb?pages=${page}&time=${time}`)
        const body = await respone.json()
        console.log(body)
        return body
    }
    catch {
    }

}

function Record() {
    var line = ""
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    const [db, setDb] = useState([])
    let pages = []

    const callFromDropdownLine = (value) => {
        console.log(value)
        line = value
        console.log(line)
        console.log(line === "เลือกสาย")
    }
    const onClickHandler = async (value) => {
        const dataHold = await fetchButton(value)
        console.log(dataHold)
        setData(dataHold)
        console.log(data)
    }
    useEffect(() => {
        fetch(`${process.env.URL}/count`, { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setCount(result)
            })
    }, [])

    useEffect(() => {
        fetch(`${process.env.URL}/db`, { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setDb(result)
            })
    }, [])

    for (let i = 1; i <= count.page; i++) {
        if (pages.indexOf(i) === -1) {
            pages.push(i)
        }
    }
    console.log(pages)


    useEffect(() => {
        fetch(`${process.env.URL}/recorddb`, { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setData(result)
            })
    }, [])
    console.log(data)
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='ml-8'>
                    <div className=' mt-2 flex'>
                        <DropdownLine callback={callFromDropdownLine} />
                        <div className='ml-8 '>
                            <DropdownBus />
                        </div>
                    </div>
                    {/* { (line == "เลือกสาย"  || line === "สายที่ 1") && ( */}
                    <div>
                        <div className='mt-4 mb-4'>สาย 3</div>
                        <div className='ml-8'>
                            {/* <p>ขึ้น</p>
                            <p>ลง</p>
                            <p>เหลือ</p> */}
                        </div>
                        <div className='flex'>
                            <div className='flex items-center mt-8'>
                                <div className='mr-4 '>คันที่ 1</div>
                                {
                                    db.map((item, i) => (
                                        <div key={i} className='m-2'>
                                            <p className='text-center'>ขึ้น:  {item.in}</p>
                                            <p className='text-center'>ลง:  {item.out}</p>
                                            <p className='text-center'>ขึ้น:  {item.current}</p>
                                            <Heatmap data={item} />
                                            <p className='text-wrap text-center'>{item.station}</p>
                                        </div>

                                    ))
                                }
                                {/* <div className=''>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-2 w-20 h-20 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-4 w-16 h-16 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-4 w-14 h-14 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-4 w-12 h-12 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto mt-16'></div>
                                </div> */}
                            </div>

                        </div>
                    </div>

                    <div className=''>
                        <div>
                            เลือกเวลาย้อนหลัง
                        </div>
                        <select className='border-2 border-black' onChange={e => { time = e.target.value; onClickHandler() }}>
                            <option value={"0"}>เลือกเวลา</option>
                            <option value={"-1h"}>1 hour</option>
                            <option value={"-3h"}>3 hour</option>
                            <option value={"-24h"}>24 hour</option>
                            <option value={"-3d"}>3 day</option>
                            <option value={"-7d"}>7 day</option>
                            <option value={"-30d"}>30 day</option>
                        </select>

                        <div className='flex'>
                            {
                                pages.map((item, i) => (
                                    <button key={i} onClick={() => { page = item; onClickHandler() }} className='border-black border-2 m-2'>Page {item}</button>
                                ))
                            }
                        </div>
                        <div className='flex'>
                            <p className=' border-2 border-black w-16 text-center'>bus_id </p>
                            <p className=' border-2 border-black w-24 text-center'>date </p>
                            <p className=' border-2 border-black w-16 text-center'>time </p>
                            <p className=' border-2 border-black w-16 text-center'>Line </p>
                            <p className=' border-2 border-black w-60 text-center'>station </p>
                            <p className=' border-2 border-black w-16 text-center'>in </p>
                            <p className=' border-2 border-black w-16 text-center'>out </p>
                            <p className=' border-2 border-black w-16 text-center'>current </p>
                        </div>
                        {data.map((item, i) => (
                            <div className='flex items-center' key={i}>
                                <p className=' border-2 border-black w-16 text-center'>{item.busid} </p>
                                <p className=' border-2 border-black w-24 text-center'>{item.date} </p>
                                <p className=' border-2 border-black w-16 text-center'>{item.time} </p>
                                <p className=' border-2 border-black w-16 text-center'>{item.line} </p>
                                <p className=' border-2 border-black w-60 text-center'>{item.station} </p>
                                <p className=' border-2 border-black w-16 text-center'>{item.in} </p>
                                <p className=' border-2 border-black w-16 text-center'>{item.out} </p>
                                <p className=' border-2 border-black w-16 text-center'>{item.current} </p>
                            </div>
                        ))}</div>
                </div>


            </div>

        </>

    )
}

export default Record