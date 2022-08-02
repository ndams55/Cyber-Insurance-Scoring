import styled from '@emotion/styled';
import { Button, Image, Space } from 'antd';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaOutdent } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { ROUTES } from '../../../routes';
import { PRIMARY } from '../../../shared/colors';
import { defaultImage } from '../../../shared/defaultImage';

const NavLink = styled.p`
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 5px;
  color: white;
  font-family: Tauri;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${PRIMARY};

  > .logo {
    flex: 2;
  }

  > .linkContainer {
    display: none;
  }

  > .menu-button {
    display: block;
    cursor: pointer;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    > .linkContainer {
      display: flex;
      flex: 8;
      justify-content: space-around;
      align-items: center;
      padding-left: 0px;
    }

    > .menu-button {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    > .linkContainer {
      flex: 8;
      padding-left: 20%;
    }
  }

  .menu {
    height: 300px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${PRIMARY};
    overflow-x: hidden;
    transition: 0.5s;
    padding: 30px;
  }

  .menu-close {
    height: 0px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${PRIMARY};
    overflow-x: hidden;
    transition: 0.5s;
  }

  .menu-linkContainer {
    display: flex;
    flex-direction: column;
  }
`;

const MenuContent = ({ closeMenu }: { closeMenu?: () => void }) => {
  const history = useHistory();
  return (
    <div className={closeMenu ? 'menu-linkContainer' : 'linkContainer'}>
      <NavLink
        onClick={() => {
          closeMenu?.();
          history.push(ROUTES.HOME_PAGE);
        }}
      >
        Accueil
      </NavLink>
      <NavLink
        onClick={() => {
          closeMenu?.();
          history.push(ROUTES.CATALOG_PAGE.CATALOG);
        }}
      >
        Catalogue
      </NavLink>
      <NavLink
        onClick={() => {
          closeMenu?.();
          history.push(ROUTES.VENDEUR_PAGE.DASHBOARD);
        }}
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={() => {
          closeMenu?.();
          history.push(ROUTES.HOME_PAGE);
        }}
      >
        Evènements
      </NavLink>
      <NavLink
        onClick={() => {
          closeMenu?.();
          history.push(ROUTES.FAVORIS_PAGE.FAVORIS);
        }}
      >
        Favoris
      </NavLink>
      <Space>
        <NavLink onClick={() => {}}>
          <Button
            style={{ height: 35, width: 100 }}
            onClick={() => history.push(ROUTES.SIGNIN)}
          >
            <span style={{ fontSize: 14 }}>Sign in</span>
          </Button>
        </NavLink>
        <NavLink onClick={() => {}}>
          <Button
            style={{ height: 35, width: 100 }}
            onClick={() => history.push(ROUTES.SIGNUP)}
          >
            <span style={{ fontSize: 14 }}>Sign up</span>
          </Button>
        </NavLink>
      </Space>
    </div>
  );
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  return (
    <HeaderContainer>
      <Space className='logo'>
        <Image
          alt='logo'
          src={logo}
          height={60}
          width={90}
          preview={false}
          style={{ objectFit: 'contain', cursor: 'pointer' }}
          fallback={defaultImage}
          onClick={() => history.push(ROUTES.HOME_PAGE)}
        />
      </Space>
      <MenuContent />

      <div className={showMenu ? 'menu' : 'menu-close'}>
        <AiOutlineClose
          size={30}
          color='white'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowMenu(false)}
        />
        <MenuContent closeMenu={() => setShowMenu(false)} />
      </div>
      <div className='menu-button' onClick={() => setShowMenu(true)}>
        <FaOutdent size={30} color='white' />
      </div>
    </HeaderContainer>
  );
};
