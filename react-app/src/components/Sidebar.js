import React from 'react'
import '../App.css';
import { SidebarList } from './SidebarList';
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className='Sidebar'>
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