import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, HandlePageChange }) {
    return(
        <header>
        <h1>Portfolio</h1>
        <Navigation></Navigation></header>
    )
}

export default Header;