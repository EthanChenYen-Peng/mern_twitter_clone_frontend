import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHashtag,
  faEnvelope,
  faBookmark,
  faUser,
  faFeather,
  faDove,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
  <div className="nav__container">
    <div className="nav__logo">
      <FontAwesomeIcon icon={faDove} />
    </div>
    <ul className="nav__list">
      <li className="nav__item nav__item--active">
        <Link to="/" className="nav__item__link">
          <FontAwesomeIcon icon={faHome} />
          <span className="nav__item__title">
            Home
          </span>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/explore" className="nav__item__link">
          <FontAwesomeIcon icon={faHashtag} />
          <span className="nav__item__title">Explore</span>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/messages" className="nav__item__link">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="nav__item__title">Messages</span>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/bookmarks" className="nav__item__link">
          <FontAwesomeIcon icon={faBookmark} />
          <span className="nav__item__title">Bookmarks</span>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/profile" className="nav__item__link">
          <FontAwesomeIcon icon={faUser} />
          <span className="nav__item__title">Profile</span>
        </Link>
      </li>
    </ul>
    <button type="button" className="tweet__container">
      <FontAwesomeIcon icon={faFeather} className="feather__icon" />
      <span className="tweet__title">Tweet</span>
    </button>
  </div>
);

export default NavBar;
