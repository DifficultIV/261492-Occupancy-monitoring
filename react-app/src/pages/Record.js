import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import DropdownLine from '../components/DropdownLine';
import DropdownBus from '../components/DropdownBus';
import Heatmap from '../components/Heatmap';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let time = "0"
let page = 0
let senddate = "0"
let date_split = ""
let pages = []
const fetchButton = async () => {
    try {
        const respone = await fetch(`${process.env.REACT_APP_URL}/recorddb?pages=${page}&time=${date_split[0]}`)
        const body = await respone.json()
        console.log(body)
        return body
    }
    catch {
    }

}

// const refreshPageButton = async () =>{
//     try {
//         const respone = await fetch(`${process.env.REACT_APP_URL}/count`, { mode: "cors" })
//         const body = await respone.json()
//         console.log(body)
//         return body
//     }
//     catch {
//     }
// }

function Record() {
    var line = ""
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    const [db, setDb] = useState([])
    const [startDate,setStartDate] = useState(new Date())


    const callFromDropdownLine = (value) => {
        console.log(value)
        line = value
        console.log(line)
        console.log(line === "เลือกสาย")
    }
    const onClickHandler = async (value) => {
        pages = []
        date_split = senddate.split(", ")
        console.log(date_split[0])
        const dataHold = await fetchButton(value)
        // const countHold = await refreshPageButton()
        // setCount(countHold)
        // for (let i = 1; i <= count.page; i++) {
        //     if (pages.indexOf(i) === -1) {
        //         pages.push(i)
        //     }
        // }
        console.log(dataHold)
        setData(dataHold)
        console.log(data)
    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/count`, { mode: "cors" })
            .then(res => res.json())
            .then((result) => {
                setCount(result)
            })
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/db`, { mode: "cors" })
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
        date_split = ""
        fetch(`${process.env.REACT_APP_URL}/recorddb`, { mode: "cors" })
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
                        {/* <div className='ml-8 '>
                            <DropdownBus />
                        </div> */}
                    </div>
                    <div>
                        {/* <div className='mt-4 mb-4'>สาย 3</div> */}
                        {/* <div className='ml-8'>
                        </div> */}
                        {/* <div className='flex'> */}
                        {/* <div className='flex items-center mt-8'> */}
                        {/* <div className='mr-4 '>คันที่ 1</div> */}
                        <div className='flex justify-center mt-16 border-b-2 border-slate-400'>
                            <p className='  w-20 h-7 '>bus no.</p>
                            <p className='  w-24 h-7'>date </p>
                            <p className='  w-24 h-7'>time </p>
                            <p className='  w-20 h-7'>Route </p>
                            <p className='  w-64 h-7 '>station </p>
                            <p className='  w-20 h-7 '>in </p>
                            <p className='  w-20 h-7 '>out </p>
                            <p className='  w-20 h-7 '>current </p>
                        </div>
                        {
                                    db.map((item, i) => (
                                        <div className='flex items-center justify-center border-b-2 border-slate-200' key={i}>
                                        <p className='w-20 h-7'>{item.busid} </p>
                                        <p className='w-24 h-7'>{item.date} </p>
                                        <p className='w-24 h-7'>{item.time} </p>
                                        <p className='w-20 h-7'>3</p>
                                        <p className='w-64 h-7'>{item.station} </p>
                                        <p className='w-20 h-7'>{item.in} </p>
                                        <p className='w-20 h-7'>{item.out} </p>
                                        <p className='w-20 h-7'>{item.current} </p>
                                    </div>

                                    ))
                                }
                        {/* <div className='grid grid-cols-4'>
                                                                    {
                                    db.map((item, i) => (
                                        <div key={i} className='m-2'>
                                            <p className='text-center'>ขึ้น:  {item.in}</p>
                                            <p className='text-center'>ลง:  {item.out}</p>
                                            <p className='text-center'>คงเหลือ:  {item.current}</p>
                                            <Heatmap data={item} />
                                            <p className='text-wrap text-center'>{item.station}</p>
                                        </div>

                                    ))
                                }
                                </div> */}

                        {/* </div> */}

                        {/* </div> */}
                    </div>

                    <div className=''>
                        <div>
                            เลือกเวลาย้อนหลัง
                        </div>
                        <div className='flex'>
                            <ReactDatePicker className='border-2 border-black' selected={startDate} onChange={(date) => {setStartDate(date);senddate = date.toLocaleString('en-GB', { hourCycle: "h24" });onClickHandler()}}/>
                            <button className='border-2 border-black ml-4' onClick={() =>{senddate = "";onClickHandler()}}>Reset Date</button>
                        </div>
                        
                        {/* <select className='border-2 border-black' onChange={e => { time = e.target.value; onClickHandler() }}>
                            <option value={"0"}>เลือกเวลา</option>
                            <option value={"-1h"}>1 hour</option>
                            <option value={"-3h"}>3 hour</option>
                            <option value={"-24h"}>24 hour</option>
                            <option value={"-3d"}>3 day</option>
                            <option value={"-7d"}>7 day</option>
                            <option value={"-30d"}>30 day</option>
                        </select> */}

                        <div className='flex grid grid-cols-12'>
                            {
                                pages.map((item, i) => (
                                    <button key={i} onClick={() => { page = item; onClickHandler() }} className='border-black border-2 m-2'>Page {item}</button>
                                ))
                            }
                        </div>
                        <div className='mt-4'>
                            <div className='flex justify-center'>
                                <p className=' border-2 border-black w-16 h-7 text-center'>bus_id </p>
                                <p className=' border-2 border-black w-24 h-7 text-center'>date </p>
                                <p className=' border-2 border-black w-16 h-7 text-center'>time </p>
                                <p className=' border-2 border-black w-16 h-7 text-center'>Line </p>
                                <p className=' border-2 border-black w-60 h-7 text-center'>station </p>
                                <p className=' border-2 border-black w-16 h-7 text-center'>in </p>
                                <p className=' border-2 border-black w-16 h-7 text-center'>out </p>
                                <p className=' border-2 border-black w-16 h-7 text-center'>current </p>
                            </div>
                            {data.map((item, i) => (
                                <div className='flex items-center justify-center' key={i}>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.busid} </p>
                                    <p className=' border-2 border-black w-24 h-7 text-center'>{item.date} </p>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.time} </p>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.line} </p>
                                    <p className=' border-2 border-black w-60 h-7 text-center'>{item.station} </p>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.in} </p>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.out} </p>
                                    <p className=' border-2 border-black w-16 h-7 text-center'>{item.current} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

        </>

    )
}

export default Record