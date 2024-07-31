import styled from "styled-components";
import ButtonElem from "../conponents/button";
import { useEffect, useState } from "react";

const Header = styled.header`
    width: 100vw;
    padding: 5px 19px;

    &_fixed{
        position: fixed;
    }
`;

const Logo = styled.p`
    display: block;
    font-family: var(--font-family-2);
    font-weight: 500;
    font-size: 20px;
    color: var(--secondaryText);
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1.4em;

    @media(width <= 960px){
        display: none;
    }
`;

const NavItem = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    font-family: var(--font-family-2);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5em;
    color: var(--secondaryText);
    text-wrap: nowrap;

    &:hover{
        color: inherit;
    }
`;

const Triangle = styled.span`
width: 0px;
height: 0px;
border-style: solid;
border-width: 8px 5px 0 5px;
border-color: var(--secondaryText) transparent transparent transparent;
transform: rotate(0deg);
`;

const BurgerMenu = styled.div`
    display: none;

    @media(width <= 960px){
        display: block;
    }
`;

const Burger = styled.div`

`;

const BurgerIcon = styled.div`
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
`;

const BurgerInner = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--blackText);
    border-radius: 2px;
    font-size: 0;
    position: relative;
    z-index: 25;
    transition: all .1s linear;

    &::before,
    &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--blackText);
    border-radius: 2px;
    position: absolute;
    left: 0;
    transition: transform .1s linear;
}

    &::before {
        top: -8px;
    }

    &::after {
        bottom: -8px;
    }
`;

const BurgerNav = styled.div`

`
export default function HeaderElem(){
    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const handleScroll = () => {
        if(window.scrollY > 64){
            setIsFixed(true);
        } else{
            setIsFixed(false);
        }
    };
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return() => {
        window.removeEventListener('scroll', handleScroll);
    };
    
},[isFixed]);

    return(
        <Header onScroll={handleScroll}>
            <div className="container">
                <Logo>
                    Игошина Анастасия
                </Logo>
                <Nav>
                    <NavItem>Форматы работы</NavItem>
                    <NavItem>Инфопродукты<Triangle/></NavItem>
                    <NavItem>Обо мне</NavItem>
                    <NavItem>Контакты</NavItem>
                </Nav>
                <BurgerMenu>
                    <Burger>
                        <BurgerIcon>
                            <BurgerInner/>
                        </BurgerIcon>
                        <BurgerNav>
                            <NavItem>Форматы работы</NavItem>
                            <NavItem>Инфопродукты<Triangle/></NavItem>
                            <NavItem>Обо мне</NavItem>
                            <NavItem>Контакты</NavItem>
                        </BurgerNav>
                    </Burger>
                </BurgerMenu>
                <ButtonElem style={{display: "block"}}>Связаться со мной</ButtonElem>
            </div>
        </Header>
    )
}