import React,{useEffect,useState} from 'react'
import Sidebar from '../components/Sidebar';
function Home() {
    const [data, setData] = useState([])
    useEffect( () => {
      fetch("http://localhost:3000/currentdb", {mode: "cors"})
        .then(res => res.json())
        .then((result) => { 
        setData(result)
        })
    }, [])
    console.log(data[0].busid)
    return (
    <>
    <div className='flex'>
        <Sidebar/>
        <div>
            <div className='border-4 rounded-md flex-col justify-between w-fit h-fit bg-gray-200 m-8'>
                สาย1
            </div>
            <div className='grid grid-cols-3'>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>{data[0].busid}</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>{data[0].station}</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>{data[0].current}/12</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>คันที่ 2</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>สถานีที่ 2</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>8/12</div>
            </div>
            <div className='border-4 rounded-md flex-col justify-between w-fit h-fit bg-gray-200 m-8'>
                สาย2
            </div>
            <div className='grid grid-cols-3'>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>คันที่ 1</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>สถานีที่ 1</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>8/12</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>คันที่ 2</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>สถานีที่ 2</div>
                <div className='border-4 rounded-md flex-col justify-between w-auto h-fit bg-gray-200 m-8'>8/12</div>
            </div>
        </div>

    </div>
    </>

    )
}

export default Home