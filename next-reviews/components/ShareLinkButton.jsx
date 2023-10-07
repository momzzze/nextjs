'use client'
import React, { useState } from 'react';
import {LinkIcon} from '@heroicons/react/20/solid';

const ShareLinkButton = () => {
    const [clicked, setClicked] = useState(false);

   

    const onClickHandler = () => {
        navigator.clipboard.writeText(window.location.href);
        console.log('[SharedLinkButton] clicked');
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 2000);
    }
    
    return (
        <button onClick={onClickHandler} className='flex gap-2 border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'>
            <LinkIcon className='h-4 w-4'/>
             {clicked ? 'Link copied!' : 'Share Link'}
            </button>
    )
}

export default ShareLinkButton