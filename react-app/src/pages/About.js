import React from 'react'
import Sidebar from '../components/Sidebar';
function About() {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                {/* <h1 className='m-8'>เว็บไซต์นี้จัดทำขึ้นเพื่อโครงงาน</h1> */}
                <div className='m-8 '>

                    <h1 className='text-xl font-bold'>ข้อมูลสำหรับเว็บไซต์</h1>
                    <h1 className='text-lg mt-4 underline font-bold'>
                        หน้า Home
                    </h1>
                    <p className='text-wrap mt-4'>จะแสดงผลสถานะปัจจุบันของรถแต่ละคัน ว่าปัจจุบันอยู่สถานีไหน และมีจำนวนคนบนรถในปัจจุบันกี่คน
                        และจะแสดงผลการใช้งานของแต่ละสถานี </p>
                    <p className='text-wrap mt-4'>โดยจะแสดงผลเป็นรูปวงกลม และมีสีเพื่อแสดงผลการใช้งาน หากเป็นสีแดงหมายถึงมีคนลงมากกว่าคนขึ้น
                        หากเป็นสีเขียวหมายถึงมีคนขึ้นมากกว่าคนลง</p>
                    <h1 className='text-lg mt-4 underline font-bold'>
                        หน้า Record
                    </h1>
                    <p className='mt-4 text-wrap'>หน้า Record จะแสดงผลทั้งสถานีของแต่ละสายและแสดงผลสถานะของรถแต่ละคันโดยจะแสดงสถานีทั้งสาย </p>
                    <p className='mt-4 text-wrap'>ซึ่งจะแสดงผลเป็นรูปวงกลมและมีสีเพื่อแสดงผลการใช้งาน
                        และมีการแสดงผลข้อมูลในอดีตออกมาเป็นตาราง โดยสามารถเลื่อนดูข้อมูลย้อนหลังได้สูงสุด 30 วัน</p>

                    <div className='text-wrap mt-32'>
                        <h1>เว็บไซต์นี้จัดขึ้นสำหรับโครงงานของระบบตรวจสอบความหนาแน่นบนรถไฟฟ้าของขนส่งมวลชนมหาวิทยาลัยเชียงใหม่ </h1>
                        <p>(Occupancy monitoring system for Chiang Mai University transit electric bus)</p>
                        <p className='font-bold'>จัดทำโดย</p>
                        <p>นายกิจพิสันต์ ทันงาน 630610716</p>
                        <p>นายชญานนท์ พิทักษ์ 630610724</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About