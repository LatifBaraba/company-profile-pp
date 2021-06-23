import React from 'react'
import { Link } from 'react-router-dom';

const LinkDonasi = () => {
    return (
        <div className="container">
            <div className="link-donasi">
                <div className="donasi-title">
                    <h4>Ini Link Donasi nya teman-teman, di tunggu donasi nya</h4>
                </div>
                <ul>
                    <li>
                        {/* <button className="btn btn-primary">Ayo Bantu!</button> */}
                        <Link to="/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ayo Bantu!</Link>
                    </li>
                    <li>
                        {/* <button className="btn btn-primary">Kita Bisa!</button> */}
                        <Link to="/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Kita Bisa!</Link>
                    </li>
                    <li>
                        {/* <button className="btn btn-primary">Donasi di website kami!</button> */}
                        <Link to="/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Donasi di website kami!</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LinkDonasi