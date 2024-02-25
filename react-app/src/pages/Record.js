import React from 'react'
import Sidebar from '../components/Sidebar';
import DropdownLine from '../components/DropdownLine';
import DropdownBus from '../components/DropdownBus';
function Record({ data }) {
    var line = ""
    const callFromDropdownLine = (value) => {
        console.log(value)
        line = value
        console.log(line)
        console.log(line === "เลือกสาย")
    }
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
                    {data.map((item, i) => (
                    <div className='flex items-center' key={i}>
                        <p className=' border-2 border-black'>{item._time} </p>
                        <p className=' border-2 border-black'>{item._measurement} </p>
                        <p className=' border-2 border-black'>{item.Station} </p>
                        <p className=' border-2 border-black'>{item._field} </p>
                        <p className=' border-2 border-black'>{item._value} </p>
                    </div>
                ))}</div>
            </div>

        </>

    )
}

export default Record