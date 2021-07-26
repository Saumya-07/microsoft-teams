import React from 'react'
import './dailer-item.css'

function DailerItem({item}) {
    return (
        <div className='dailer-item'>
            <img src={item.avatar} className='item-avatar' alt='Avatar'/>
            <div className='item-info'>
                <label className='item-title'>{item.name}</label>
                <label className='item-subtitle'>{item.type}</label>
            </div>
            <div className='item-icons'>
                <div className='item-icon'>
                    <i className='fi-rr-microphone'></i>
                </div>
                <div className='item-icon'>
                    <i className='fi-rr-play-alt'></i>
                </div>
            </div>
        </div>
    )
}

export default DailerItem;
