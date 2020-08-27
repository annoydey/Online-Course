import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <h1>Online Course</h1>
           <div>
                <nav>
                    <a class="font-weight-bold" href="/courses">Courses</a>
                </nav>
           </div>
        </div>
    );
};

export default Header;
