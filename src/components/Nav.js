import { Link } from 'gatsby';
import React from 'react';
import Scroll from './Scroll';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Scroll type="id" element="banner">
                  <Link to="#">Home</Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="one">
                  <Link to="#">About me</Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="two">
                  <Link to="#">Projects</Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="three">
                  <Link to="#">Skills</Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="footer">
                  <Link to="#">Social media</Link>
                </Scroll>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
