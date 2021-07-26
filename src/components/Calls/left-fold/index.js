import React from 'react';
import { CallsMenu, DialerList } from '../../../data/calls';
import DailerItem from './dailer-item';
import './left-fold.css';
import MenuItem from './menu-item';

function LeftFold() {
    const menu = CallsMenu;
    const dailerList = DialerList;
    return (
        <div className='leftFold'>
            <div className='leftFold-menu'>
                <label className='menu-label'>Calls</label>
                <div className="menu-items">
                    {
                        menu.map((item) => {
                            return <MenuItem item={item} />;
                        })
                    }
                </div>
            </div>
            <div className='leftFold-dailer'>
                    <label className='dailer-label'>Suggested</label>
                    <div className='dailer-search'>
                        <input placeholder='Type a name' />
                    </div>
                    <div className='dailer-suggested'>
                        <label className='suggested-label'>Make a call</label>
                        <div className='suggested-list'>
                            {
                                dailerList.map((item)=>{
                                    return <DailerItem item={item}/>
                                })
                            }
                        </div>
                    </div>
                    <div className='dailer-bottom'>
                        <div className='dailer-bottom-icon'>
                            <i className='fi-rr-microphone'></i>
                        </div>
                        <div className='dailer-bottom-icon'>
                            <i className='fi-rr-play-alt'></i>    
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default LeftFold;
