import styled from "styled-components";

const RoundButton = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--lineGreen);
    border-radius: 50%;
    transition: all .2s linear;

    &:hover{
        background-color: oklch(90.91% 0.023 126.24);
    }
    &:hover,
    &:focus {
        outline: none;
        border: 1px solid transparent;
    }
`

const Minus = styled.div`
    width: 22px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: var(--mainGreen);
    transform: translate(-50%, -50%);

    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: var(--mainGreen);
        transform: translate(-50%, -50%) rotate(90deg);
    }
    ${({ hidden }) => hidden && `
        &::after {
            display: none;
        }
    `}
    `

export default function RoundButtonElem({onClick, minusHidden}){
    return(
        <RoundButton type="button" onClick={onClick}>
            <Minus hidden={minusHidden} />
        </RoundButton>
    )
}