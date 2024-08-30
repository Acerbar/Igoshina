import styled from "styled-components";
import { TitleH3 } from "../components/Texts";
import { Container, Section } from "../components/section&container";
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Feedbacks } from "../JS/feedbacks";

const FeedbackWrapper = styled(Section)`
height: fit-content;
@media(width<=640px){
    flex-direction: row;
}
`

const FeedbackContainer =styled(Container)`
@media(width <= 1066px){
    padding-right: 0;
}
`

const StyledSwiper = styled(Swiper)`
position: relative;
height: 100%;
max-width: 100vw;
margin-bottom: 95px;
padding-bottom: 40px;

@media(width <= 640px){
    margin-bottom: 70px;
    padding-bottom: 60px;
}

.swiper-wrapper{
    max-width: 100%;
}
.swiper-button-next,
.swiper-button-prev {
  width: 50px;
  height: 50px;
  border: 1px solid var(--borderGreen);
  border-radius: 50%;
  top: 7%;

  @media(width<=960px){
    width: clamp(40px, 7vw, 50px);
    height: clamp(40px, 7vw, 50px);
  }
}
.swiper-button-prev {
    left: calc(94% - 79.5px - 7.5px); 

    @media(width <= 1066px){
    left: calc(92% - 79.5px - 7.5px);
    }

    @media(width <=640px){
        left: calc(93% - 79.5px - 7.5px); 
    }
  }
  
  .swiper-button-next {
    right: 3%; 
    
    @media(width <= 1066px){
        right: 5%;
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

.swiper-pagination-bullet {
    background-color: var(--lineGreen);
    opacity: 1;
    width: 8px;
    height: 8px;

    &-active{
        background-color: var(--mainGreen);
    }
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
width: 357px;
height: 460px;
margin: auto auto 0;


@media(width <= 640px){
    width: 305px;
    height: 430px;
}

& > img{
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media(width <=500px){
        border-radius: 14px;
    }
}
`


export default function FeedbackSection(){
    return(
        <FeedbackWrapper>
            <FeedbackContainer>
                <StyledSwiper
                    modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                    navigation
                    slidesPerView = {3}
                    spaceBetween = {40}
                    keyboard = {true}
                    mousewheel = {true}
                    pagination={{ clickable: true }}
                    loop = {true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            height: 392,
                        },
                        460:{
                            slidesPerView: 1.8,
                            spaceBetween: 15,
                        },
                        641: {
                          slidesPerView: 2.5,
                          spaceBetween: 20,
                          height: 460,
                        },
                        1066: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                      }}
                >
                    <TitleH3 style={{backgroundColor: "transparent", position: "absolute", top: "0", left: "0", width: "fit-content"}}>Отзывы</TitleH3>
                    {Feedbacks.map((Feedback) => (
                        <StyledSwiperSlide key={Feedback.id}>
                            <img src={Feedback.image}/>
                        </StyledSwiperSlide>
                    ))}
                </StyledSwiper>
            </FeedbackContainer>
        </FeedbackWrapper>
    )
}