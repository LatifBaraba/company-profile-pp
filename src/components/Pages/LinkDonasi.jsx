import React from 'react'
import { Link } from 'react-router-dom';

const LinkDonasi = () => {
    return (
        <div className="container">
            <div className="link-donasi">
                <div className="donasi-title">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed?</p>
                </div>
                <ul>
                    <li>
                        <button className="btn btn-primary">Donasi!</button>
                    </li>
                    <li>
                        <button className="btn btn-primary">Kita Bisa!</button>
                    </li>
                    <li>
                        <button className="btn btn-primary">Donasi di website kami!</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LinkDonasi