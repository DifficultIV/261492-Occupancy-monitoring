import React,{useEffect,useState} from 'react'
import Sidebar from '../components/Sidebar';
import DropdownLine from '../components/DropdownLine';
import DropdownBus from '../components/DropdownBus';

    const fetchButton = async (value) => {
        try{
                        const respone = await fetch(`http://localhost:3000/recorddb?pages=${value}`)
            const body = await respone.json()
            console.log(body)
            return body
        }
        catch{
        }

    }
    
function Record() {
    var line = ""
    const [data, setData] = useState([])
    const [count,setCount] = useState([])
    let pages = []
    const callFromDropdownLine = (value) => {
        console.log(value)
        line = value
        console.log(line)
        console.log(line === "เลือกสาย")
    }
    const onClickHandler = async (value) =>{
        const dataHold = await fetchButton(value)
        console.log(dataHold)
        setData(dataHold)
        console.log(data)
    }
    useEffect(() => {
        fetch("http://localhost:3000/count", {mode: "cors"})
          .then(res => res.json())
          .then((result) => { 
          setCount(result)
          })
      }, [])

    for(let i = 1;i <= count.page;i++){
        if(pages.indexOf(i) === -1){
            pages.push(i)
        }
    }
    console.log(pages)


    useEffect(() => {
      fetch("http://localhost:3000/recorddb", {mode: "cors"})
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
                        <div className='mt-4 mb-4'>สาย 1</div>
                        <div className='ml-8'>
                            {/* <p>ขึ้น</p>
                            <p>ลง</p>
                            <p>เหลือ</p> */}
                        </div>
                        <div className='flex'>
                            <div className='flex items-center mt-8'>
                                <div className='mr-4 '>คันที่ 1</div>
                                <div className=''>
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
                                    <div className='rounded-full border-4 w-8 h-8 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-4 w-8 h-8 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <p>ขึ้น</p>
                                    <p>ลง</p>
                                    <p>เหลือ</p>
                                    <div className='rounded-full border-4 w-8 h-8 border-black bg-black mx-auto'></div>
                                </div>
                                <div>
                                    <div className='w-10 h-2 border-4 border-black bg-black mx-auto mt-16'></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <span className='flex items-center mt-8'>
                            <div className='mr-4'>สาย 2</div>
                            <div className='rounded-full border-4 w-8 h-8 border-black bg-black'></div>
                            <div className='w-10 h-2 border-4 border-black bg-black'></div>
                            <div className='rounded-full border-4 w-8 h-8 border-black bg-black'></div>
                            <div className='w-10 h-2 border-4 border-black bg-black'></div>
                            <div className='rounded-full border-4 w-8 h-8 border-black bg-black'></div>
                            <div className='w-10 h-2 border-4 border-black bg-black'></div>
                            <div className='rounded-full border-4 w-8 h-8 border-black bg-black'></div>
                            <div className='w-10 h-2 border-4 border-black bg-black'></div>
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        {
                            pages.map((item,i) =>(
                                <button key={i} onClick={() => onClickHandler(item)} className='border-black'>Page {item}</button>
                            ))
                        }
                    </div>
                    {data.map((item, i) => (
                    <div className='flex items-center' key={i}>
                        <p className=' border-2 border-black'>{item.busid} </p>
                        <p className=' border-2 border-black'>{item.date} </p>
                        <p className=' border-2 border-black'>{item.time} </p>
                        <p className=' border-2 border-black'>{item.station} </p>
                        <p className=' border-2 border-black'>{item.in} </p>
                        <p className=' border-2 border-black'>{item.out} </p>
                        <p className=' border-2 border-black'>{item.current} </p>
                    </div>
                ))}</div>
            </div>

        </>

    )
}

export default Record