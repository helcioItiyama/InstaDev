import React from 'react';
import {FaUsers, FaUserPlus} from 'react-icons/fa'

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg alt="logo Instagram"/>
      </Link>

      <div className="topbar__group">
        <div className="topbar__icon">
          <Link to="/users">
            <FaUsers/>
            <span>Usuários</span>
          </Link>
        </div>
        
        <div className="topbar__icon">
          <Link to="/newuser">
            <FaUserPlus/>
            <span>Nova Conta</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
