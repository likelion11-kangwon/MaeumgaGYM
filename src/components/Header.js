import React, { useState } from 'react';
// import React from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";
import searchImg from "./search.png";


function Header() {
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
            <header>
                        {/* 로고 */}
                        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                              <div className="header_logo">
                                    (프로젝트)
                              </div>
                        </NavLink>
                        {/* 좌측 메뉴 */}
                        <nav>
                              {/* 메뉴 */}
                              <NavLink to="/Help" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
                                    <button className="button-nav">sim</button>
                                    <p>심부름</p> 
                              </NavLink>
                              <NavLink to="/Taxi" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
                                    <button className="button-nav">taxi</button>
                                    <p>택시</p>
                              </NavLink>
                              <NavLink to="/Notice" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
                                    <button className="button-nav">news</button>
                                    <p>소식</p> 
                              </NavLink>
                              <NavLink to="/Chat" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
                                    <button className="button-nav">chat</button>
                                    <p>채팅</p> 
                              </NavLink>
                              <NavLink to="/Mypage" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
                                    <button className="button-nav">Mypage</button>
                                    <p>마이페이지</p>
                              </NavLink>
                              
                        </nav>

                  {/* 우측 메뉴 */}
                  <div className="header_right">
                        {/* 검색 */}
                        <div className="header_right_search">
                              <input
                                          type="text"
                                          placeholder="검색"
                                          value={search}
                                          onChange={e => setSearch(e.target.value)}
                                          onKeyPress={handleKeyPress}
                                    />
                              <img src={searchImg} alt="search" />
                        </div>
                        {/* 로그인 */}
                        <NavLink to="/Login" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                              <div className="header_right_login">로그인</div>
                        </NavLink>
                  </div>
            </header>
      );
    }
    
    export default Header;
