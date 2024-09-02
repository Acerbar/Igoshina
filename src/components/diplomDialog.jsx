import { createPortal } from "react-dom";
import { useRef, useEffect} from "react";
import styled from 'styled-components';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DiplomTexts } from '../JS/diplomTexts';
import { Paragraph } from './Texts';

export const DiplomItemWrapper = styled.dialog`
  width: 770px;
  height: 700px;
  background-color: transparent;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus{
    outline: none;
    border-color: transparent;
  }
  &::backdrop{
    background-color: oklch(0% 0 0 / 40%);
  }

  @media(width<=892px){
    width: clamp(300px, 90vw, 720px);

  }

`;

export const DiplomItemInner = styled.div`
  width: 93.5%;
  height: max-content;
  padding: 40px 20px 10px;
  background-color: var(--whiteColor);
  border-radius: 24px;
  position: relative;
  bottom: -50px;
  position: relative;

  @media(width<=892px){
    width: 100%;
    padding: 20px 0 10px;
    border-radius: 20px;
  }

  @media(width<=639px){
    padding: 0;
  }

  @media(width<=500px){
    padding: 0;
  }
`

export const CloseModalButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 45px;
    right: 0;
    cursor: pointer;

    @media(width<=892px){
        top: 0;
        right: 1%;

    }
    &::before,
    &::after
    {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 30px;
        height: 2px;
        background-color: var(--whiteColor);
    };

    &::before{
        transform: rotate(45deg);
    };
    &::after{
        transform: rotate(-45deg);
    }
`

const StyledSwiper = styled(Swiper)`
height: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    width: 34px;
    height: 34px;
    border: 1px solid var(--borderGreen);
    border-radius: 50%;

    @media(width<=500px){
        display: none;
    }
  }
  .swiper-button-next{
    @media(width<=640px){
        right: 5px;
    }
}


.swiper-button-prev{
    @media(width<=640px){
        left: 5px;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    border: 1px solid;
    border-color: var(--mainGreen) var(--mainGreen) transparent transparent;
    height: 8px;
    width: 8px;
    color: transparent;


  }

  .swiper-button-next::after {
    transform: translateX(-25%) rotate(45deg);
  }

  .swiper-button-prev::after {
    transform: translateX(25%) rotate(-135deg);
  }

  .swiper-pagination{
    @media(width <= 499px){
        top: calc(210px + (280 - 210) * ((100vw - 320px) / (499 - 320)));
    }
  }

  .swiper-pagination-bullet {
    background-color: var(--lineGreen);
    opacity: 1;
    width: 8px;
    height: 8px;

    &-active{
        background-color: var(--mainGreen);
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  & > img {
    width: 560px;
    margin: 0 auto;
    object-fit: contain;

    @media(320px <= width <=960px){
        width: clamp(280px, 74vw, 560px);
    }
    @media(width<=350px){
        border-radius: 20px 20px 0 0;
    }
    @media(width<=320px){
        width: 280px;
    }
  }
`;

const SwiperParagraph = styled(Paragraph)`
width: 70%;
height: max-content;
margin: 3% auto 5%;
font-size: 14px;
text-align: center;

@media(width<=892px){
    width: 75%;
}
@media(width<=640px){
    margin-bottom: 7%;
}
@media(width<=500px){
    width: 90%;
    margin: 12% auto 5%;
}
`

const DiplomItem = ({ open, onClose, initialSlideIndex }) => {
    const diplomModal = useRef();
    const diplomItemInner = useRef();
    const swiperRef = useRef();
    const scrollY = useRef(0);

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (diplomItemInner.current && !diplomItemInner.current.contains(event.target)) {
              onClose();
          }
      };

      if (open) {
          scrollY.current = window.scrollY;
          diplomModal.current.showModal();
          document.body.style.position = 'fixed'; 
          document.body.style.top = `-${scrollY.current}px`; 
          document.body.classList.add('body__locked');
          document.addEventListener('mousedown', handleClickOutside);

          if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slideTo(initialSlideIndex);
          }
      } else {
          diplomModal.current.close();
          document.body.classList.remove('body__locked');
          document.body.style.position = ''; 
          document.body.style.top = ''; 
          window.scrollTo(0, scrollY.current); 
      }

      return () => {
          document.body.classList.remove('body__locked');
          document.body.style.position = ''; 
          document.body.style.top = '';
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [open, onClose, initialSlideIndex]);

    return createPortal(
        <DiplomItemWrapper ref={diplomModal}>
            <CloseModalButton onClick={onClose} />
            <DiplomItemInner ref={diplomItemInner}>
                <StyledSwiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    keyboard = {true}
                    mousewheel = {true}
                    pagination={{ clickable: true }}
                >
                    {DiplomTexts.map((DiplomText, index) => (
                        <StyledSwiperSlide key={DiplomText.id}>
                            <img src={DiplomText.image}/>
                            <SwiperParagraph>{DiplomText.content}</SwiperParagraph>
                        </StyledSwiperSlide>
                    ))}
                </StyledSwiper>
            </DiplomItemInner>
        </DiplomItemWrapper>,
        document.getElementById('diplom-nest')
    );
};

export default DiplomItem;