import { useEffect, useState } from 'react';
import { constants } from '../constants';
import './Nav.scss';

type Props = {
  className?: string;
};

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleShow);
    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return (
    <div className={`Nav ${show && 'Nav-black'}`}>
      <img className="Nav-logo" src={constants.url.logo} alt="Netflix Logo" />
      <img className="Nav-avater" src={constants.url.avater} alt="Avatar" />
    </div>
  );
};
