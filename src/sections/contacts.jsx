import styled from "styled-components";
import ButtonElem from "../components/button";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import { useState, useRef } from "react";
import {Container } from "../components/section&container";
// import ErrorItem from "../components/errorDialog";

export const ContactsContainer = styled(Container)`
margin: 0 auto;

@media(width<=960px){
    padding: 0 10px;
}

@media(width<=892px){
    padding: 0 20px;
}
`

const ContactsInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const ContactsButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
row-gap: clamp(15px, 8.5vw, 55px);
width: 100%;
padding: 67px 0;
position: relative;
z-index: 1;


& > :first-child {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      width: clamp(120px, 16vw, 170px);
      height: clamp(120px, 16vw, 170px);
      background-image: url(${Image.ButtonBackground});
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s linear;
      pointer-events: none; /* Ensure the pseudo-element doesn't capture any mouse events */
    }

    &:hover::before {
      opacity: 1;
    }
  }

  @media(width<=640px){
    padding: 30px 0;
  }
`

const Mailout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 540px;
    height: fit-content;
    background-color: var(--lineGreen);
    border-radius: 24px;
    overflow: hidden;
    margin-top: 50px;

    @media(width<=892px){
        flex-direction: column;
    }

    @media(width <=320px){
        border-radius: 14px;
    }
`
const MailoutImage = styled.div`
    width:47%;

    & > img{
        height: 100%;
        object-fit: cover;

        @media(width <= 892px){
            aspect-ratio: 1.45 / 1;
            object-position: 0% 20%;
            height: clamp(220px, 47vw, 350px);
        }

        }

        @media(width <= 892px){
            width: 100%;
`
const MailoutContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
    width: 53%;
    padding: 2.5em 2.5em 0 2.5em;

    @media(width<=1280px){
        padding: 2em 2em 0 2em;
    }

    @media(width<=892px){
        width: 100%;
        padding: 0 2em;
    }

    @media(width<=640px) {
        padding: 0 1em;
    }

`

const ContactButton = styled(ButtonElem)`
    width: 23%;
    transition: all .2s linear;

    @media(width<=640px){
        width: clamp(150px, 44vw, 290px);
    }

    @media(width<=500px){
        width: 290px;
        margin: 0 auto;
    }

    &:hover{
        background-color: var(--mainGreen);
        color: oklch(100% 0 0);
    } ;
`

const MailoutFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:.7em;

    @media(width<=500px){
        flex-direction: column;
    }
`
const Input = styled.input`
    display: flex;
    flex: 1 1 auto;
    width: clamp(245px, 23vw, 360px);
    padding: .8em 1.5em;
    border: 1px solid var(--borderGreen);
    border-radius: 51px;
    font-size: 16px;

    @media(width <=892px){
        width: clamp(250px, 47vw, 380px);
    }

`
const SubmitButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: .6em 2.3em;
    border: 1px solid transparent;
    border-radius: 100px;
    background-color: var(--mainGreen);
    color: #fff;
    font-family: var(--font-family-2);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.45em;
    text-wrap: nowrap;

    &:hover,
    &:focus {
        outline: none;
        color: #fff;
        border: 1px solid transparent;
        background-color: oklch(54.36% 0.113 128.95);
    }

    @media(width<=490px){
        width: 250px;
    }

    @media(width<=320px){
        font-size: 14px;
    }
`
const SubmitParagraph =styled(Paragraph)`
margin: 1.5em 0; 
font-size: 12px; 
color: var(--greyText);

@media(width<=892px){
    margin: 1em 0;
}
`

export default function ContactsSection(){
    const form = useRef();
    const [email, setEmail] = useState('');
    const [emailError, hasEmailError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    function handleEmail(event){
        setEmail(event.target.value)
        hasEmailError(event.target.value.trim().length === 0)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("fine")
      };

    return(
        <>
            {/* <ErrorItem open={isModalOpen} onClose={closeModal}/>   */}
            <ContactsContainer>
                <ContactsInner>
                    <ContactsButtons>
                        <ContactButton>Телеграм</ContactButton>
                        <ContactButton>WhatsApp</ContactButton>
                        <ContactButton>Почта</ContactButton>
                        <ContactButton>Телеграм-канал</ContactButton>
                    </ContactsButtons>
                    <Mailout>
                        <MailoutImage>
                            <img src={Image.MailoutImage} alt=""/>
                        </MailoutImage>
                        <MailoutContent>
                            <div>
                                <TitleH3>Подпишись на рассылку!</TitleH3>
                                <Paragraph style={{color: "var(--secondaryText)", marginBottom: "2em", textWrap: "balance" }}>Чтобы не пропускать анонсы мероприятий и получать бесплатные полезные материалы</Paragraph>
                            </div>
                            <div>
                                <MailoutFormWrapper>  
                                    <form id="form" 
                                    className="feedback-form" 
                                    ref={form} 
                                    onSubmit={sendEmail}>
                                        <Input 
                                        type="email" 
                                        placeholder="Почта"
                                        value={email}
                                        onChange={handleEmail}
                                        required
                                        style={{
                                            border: emailError ? '1px solid red' : null 
                                        }}
                                        />
                                    </form >
                                    <SubmitButton type="submit" value="Send">Отправить</SubmitButton>
                                </MailoutFormWrapper>
                                <SubmitParagraph>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</SubmitParagraph>
                            </div>
                        </MailoutContent>
                    </Mailout>
                </ContactsInner>
            </ContactsContainer>
        </>
    )
}