import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumb.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const [show, setShow] = useState(true); // Initial state set to visible
  const [lastScrollY, setLastScrollY] = useState(0);

  const getBreadcrumbName = (value) => {
    const decodedValue = decodeURIComponent(value);
    return decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Check if pathnames array is empty (means it's the home screen)
  if (pathnames.length === 0) {
    return null; // Render nothing if it's the home screen
  }

  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav ${show ? 'show' : 'hide'}`}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {getBreadcrumbName(value)}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to} className="breadcrumb-link">{getBreadcrumbName(value)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
