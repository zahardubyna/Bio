import React from "react";
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    return (
        <div className={'not-found'}>
            <Link to={'/'}><h1>Not Found</h1></Link>
        </div>
    );
}

export default NotFound;
