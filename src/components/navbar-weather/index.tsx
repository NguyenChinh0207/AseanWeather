import React from 'react'
import { Link } from 'react-router-dom';


const NavbarWeather = () => {
    return (
        <div >
            <Link to="/now">
                <button type="button" className="btn btn-primary">Now</button>
            </Link>
            <Link to="/hourly">
                <button type="button" className="btn btn-secondary">Hourly</button>
            </Link>
            <Link to="/daily">
                <button type="button" className="btn btn-success">Daily</button>
            </Link>
        </div>
    )
}

export default NavbarWeather;