import styled from "styled-components";
import ButtonElem from "../components/button";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import { useState, useRef } from "react";
// import ErrorItem from "../components/errorDialog";

const ContactsInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const ContactsButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 67px 0;
position: relative;
z-index: 1;

& > :first-child {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -140%;
      left: 50%;
      z-index: -1;
      transform: translateX(-50%);
      width: 170px;
      height: 170px;
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
`

const Mailout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 540px;
    background-color: var(--lineGreen);
    border-radius: 24px;
    overflow: hidden;
`
const MailoutImage = styled.div`
    width:47%;
`
const MailoutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 53%;
    padding: 2.5em 2.5em 0 2.5em;

`
const ContactButton = styled(ButtonElem)`
    width: clamp(205px, 24%, 290px);
    transition: all .2s linear;

    &:hover{
        background-color: var(--mainGreen);
        color: oklch(100% 0 0);
    } 
`

const MailoutFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:.7em;
`
const Input = styled.input`
    width: 360px;
    padding: .8em 1.5em;
    border: 1px solid var(--borderGreen);
    border-radius: 51px;
    font-size: 16px;
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
`

export default function ContactsElem(){
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
            <div className="container">
                <ContactsInner>
                    <ContactsButtons>
                        <ContactButton>Телеграм</ContactButton>
                        <ContactButton>WhatsApp</ContactButton>
                        <ContactButton>Почта</ContactButton>
                        <ContactButton>Телеграм-канал</ContactButton>
                    </ContactsButtons>
                    <Mailout>
                        <MailoutImage>
                            <img src={Image.MailoutImage} alt="" 
                            style={{objectFit: "cover", height: "100%" }}/>
                        </MailoutImage>
                        <MailoutContent>
                            <div>
                                <TitleH3>Подпишись на рассылку!</TitleH3>
                                <Paragraph style={{color: "var(--secondaryText)"}}>Чтобы не пропускать анонсы мероприятий и получать бесплатные полезные материалы</Paragraph>
                            </div>
                            <div>
                                <MailoutFormWrapper>  
                                    <form id="form" className="feedback-form" ref={form} onSubmit={sendEmail}>
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
                                <Paragraph style={{margin: "1.5em 0", fontSize: "12px", color: "var(--greyText)"}}>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</Paragraph>
                            </div>
                        </MailoutContent>
                    </Mailout>
                </ContactsInner>
            </div>
        </>
    )
}