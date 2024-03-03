import React from 'react'
import '../App.css';
import { SidebarList } from './SidebarList';
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <h1 className='text-white justify-center content-center flex-row text-3xl my-8 text-center'>CMUBus Database</h1>
            <ul className='SidebarList'>
            {SidebarList.map((val,key)=>{
            return (
                <li 
                key={key}
                className='row'
                >
                    <Link to={val.link}>
                        <div>{val.title}</div>
                    </Link>
                </li>
            )
            })}
            </ul>
        </div>
    )
}

export default Sidebar