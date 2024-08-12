import styled from "styled-components";
import { Paragraph } from "../components/Texts";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 50px 0 20px;
`
const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    `
const FooterLink = styled.a`
    font-family: var(--font-family-2);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.55em;
    margin: 0 30px;
    color: var(--greyText);
    text-wrap: nowrap;

    &:hover, &:focus{
        color: var(--blackText);
    }
`
const FooterParagraph = styled(Paragraph)`
font-size: 12px; 
color: var(--greyText); 
max-width: 492px;
`
const ToTopButton = styled.a`
    display: block;
    width: 44px;
    height: 44px;
    margin-left: 30px;
    border: 1px solid var(--borderGreen);
    border-radius: 50%;
    background-color: transparent;
    position: relative;

    &:hover, &:focus{
        border-color: var(--borderGreenHovered);
    }
`
const Arrow = styled.div`
    width: 11px;
    height: 11px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    color: transparent;
    transform: translate(-50%, -25%) rotate(45deg);
    border-color: var(--mainGreen) transparent transparent var(--mainGreen) ;
    border-style: solid;
    border-width: 1.5px;
`
export default function FooterElem(){
    return(
       <div className="container">
            <FooterWrapper>
                <FooterContent>
                    <FooterParagraph style={{fontSize: "14px"}}>2024 ©</FooterParagraph>
                    <FooterLink>Политика конфиденциальности</FooterLink>
                    <FooterLink>Договор оферты</FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterParagraph>Информация, размещенная на сайте не является призывом к действию, не несет медицинских диагнозов и носит исключительно ознакомительный характер</FooterParagraph>
                    <ToTopButton><Arrow/></ToTopButton>
                </FooterContent>
            </FooterWrapper>
        </div>
    )
}