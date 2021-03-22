import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

const Navbar = () => {
    return (
        <div>
            <a href="/">
                Home
            </a>
            <a href="/article">
                Section
            </a>
        </div>
    );
};

export default Navbar;