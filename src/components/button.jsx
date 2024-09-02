import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 0.6em 1.6em;
    border: 1px solid transparent;
    border-radius: 100px;
    background-color: var(--mainGreen);
    color: #fff;
    font-family: var(--font-family-2);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.45em;
    text-wrap: nowrap;
    transition: all .3s linear;

    &:hover,
    &:focus {
        outline: none;
        color: #fff;
        border: 1px solid transparent;
        background-color: oklch(54.36% 0.113 128.95);
    }

    @media(width<=320px){
        font-size: 14px;
    }

`;
const LightButton = styled(Button)`
    padding: .6em 1.5em;
    border: 1px solid var(--borderGreen);
    background-color: transparent;
    color: var(--mainGreen);

    &:hover,
    &:focus {
        outline: none;
        color: var(--mainGreen);
        border: 1px solid var(--borderGreenHovered);
        background-color: transparent;
    }
`;


export default function ButtonElem({children, isColored, ...props}){
    const Buttons = isColored ? Button : LightButton
    return(
        <Buttons {...props}>{children}</Buttons>
    )
}