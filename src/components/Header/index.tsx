import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory();

  const [pathname, setPathname] = useState('/');
  useEffect(() => {
    setPathname(history.location.pathname);
  }, [history]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={pathname === '/' ? 'active' : ''} to="/">
            Listagem
          </Link>
          <Link className={pathname === '/import' ? 'active' : ''} to="/import">
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
