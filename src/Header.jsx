import React, { useState } from 'react';

import './Header.css';

const Header = () => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        console.log("Search: ", search);
    }

	const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };


    return (
        <header className="header">
            <a href="#temp"><img alt="main_logo" src="./img/apple.png" className="logo" /></a>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#temp">심부름</a></li>
                    <li className="nav-item"><a href="#temp">택시</a></li>
                    <li className="nav-item"><a href="#temp">신고</a></li>
                    <li className="nav-item"><a href="#temp">소식</a></li>
                    <li className="nav-item"><a href="#temp">채팅</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <div className="search">
                    <input
						type="text"
						placeholder="검색"
						value={search}
						onChange={e => setSearch(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
                    <img
						src="./img/search-icon.png"
						alt="Search"
						onClick={handleSearch} />
                </div>
                <button className="login-button">로그인</button>
            </div>
        </header>
    );
}

export default Header;
