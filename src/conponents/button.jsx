import styled from "styled-components";

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    border: 1px solid transparent;
    border-radius: 100px;
    background-color: var(--mainGreen);
    color: #fff;
    font-family: var(--font-family-2);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.45em;
    text-wrap: nowrap;
`;
const LightButton = styled(Button)`
    border: 1px solid var(--borderGreen);
    background-color: transparent;
    color: var(--mainGreen);
`;


export default function ButtonElem({children, isColored}){
    const Buttons = isColored ? Button : LightButton
    return(
        <Buttons type="submit">{children}</Buttons>
    )
}