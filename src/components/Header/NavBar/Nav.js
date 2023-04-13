import styled from 'styled-components';
import '../../../index.css';
import Logo from "../../../images/logo.svg"
import { Button } from '../../../UI';
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <NavMain>
            <img src={Logo} alt="Logo" />
            <button className='Menu' onClick={handleMenuClick}><IoMenuOutline /></button>
            <Menu className={ showMenu ? 'Show' : '' }>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <div className="right">
                    <button>Login</button>
                    <Button>Sign Up</Button>
                </div>
            </Menu>
        </NavMain>
    );
}

const NavMain = styled.div`
    display: flex;
    margin-top: 26px;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    position: relative;

    .Menu {
        display: none;
        background: none;
        border: 0;
        font-size: 35px;

        @media (max-width: 800px) {
            display: block;
        }
    }

    @media (max-width: 800px) {
        & > div {
          
            position: absolute;
            top: 100%;
            flex-direction: column;
            gap: 26px;
            width: calc(100% - 40px);
            border-radius: 10px;
            padding: 40px 20px;
            z-index: 1;
            background-color: var(--Dark-Violet);
            
        }
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    @media (max-width: 800px) {
            display: none ;
        }
        &.Show {
            display: flex;
        }
    ul {
        display: flex;
        align-items: center;
        gap: 25px;
        color: var(--Grayish-Violet);

        @media (max-width: 800px) {
            flex-direction: column;
            color: white;
        }

        li {
            list-style: none;
        }
    }

    div.right {
        display: flex;
        gap: 30px;

        @media (max-width: 800px) {
            flex-direction: column;
            color: white;
            gap: 26px;
            &::before {
                    content: "";
                          width: 100%;
                          height: 1px;
                          opacity: 0.2;
                          position: relative;
                          left: 0;
                          background-color: white;

                   }
        }

        button {
            border: 0;
            background: none;
            font-weight: 700;
            font-size: 14px;
            color: var(--Grayish-Violet);

            @media (max-width: 800px) {
                color: white;
            }
        }
    }
`;

export default Nav;
