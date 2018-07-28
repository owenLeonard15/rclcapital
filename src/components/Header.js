import React from 'react';
import './Header.css';
import Card from './Card';

const Header = () => {
    return (
        <div className="container-fluid header d-flex justify-content-sm-center justify-content-md-end align-items-center">
            <Card></Card>
        </div>
    );
}

export default Header;