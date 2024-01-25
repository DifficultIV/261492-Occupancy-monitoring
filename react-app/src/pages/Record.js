import React from 'react'
import Sidebar from '../components/Sidebar';
import DropdownLine from '../components/DropdownLine';
import DropdownBus from '../components/DropdownBus';
function Record() {
    return (
        <>
    <div className='flex'>
        <Sidebar/>
        <div className='m-8'>
            <DropdownLine />
            <DropdownBus />
        </div>

    </div>
    </>
    )
}

export default Record