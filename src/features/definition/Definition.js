import React, { useEffect } from 'react'
import WordScrambler from '../../js/WordScrambler';

export default function Definition() {


    useEffect(() => {
        const texts = document.querySelectorAll("[data-scramble='true']")
        
        for(let i = 0; i < texts.length; i++) {
            new WordScrambler(texts[i]);
        }
    }, [])
    
    return (
        <div style={{minHeight: '500px'}}>
            <div className="main-column main-column--sm century-gothic space-y-4">
                <h2 data-scramble="true">noize</h2>
                <div className="text-24px" data-scramble="true">/noiz/</div>
                <p className="text-24px" data-scramble="true">noun: noize; plural noun Noize; derivitives</p>
                <ol className="space-y-2 list-decimal pl-4 py-4">
                    <li className="pl-4">
                        <br/>
                        <p className="text-16px" data-scramble="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    </li>
                    <li className="pl-4">
                        <br/>
                        <p className="text-16px" data-scramble="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    </li>
                </ol>
                <p className="text-24px" data-scramble="true">Origin: too many beers and dyslexia</p>
            </div>
        </div>
    )
}
