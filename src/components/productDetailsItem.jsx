import styled from "styled-components";
import { Paragraph, TitleH3, TitleH5 } from "./Texts";
import ButtonElem from "./button";

const ProductDetailsItemWrapper = styled.div`
    display: flex;
    max-height: fit-content;
    margin: 2vw auto;

    @media(width <= 640px){
        flex-direction: column;
        margin: 3vw auto;
    }
`;

const ProductDetaisItemImage = styled.img`
    width: 44%;
    height: auto;
    max-height: 505px;
    object-fit: cover;
    border-radius: 20px;
    flex-shrink: 0;

    @media(width <= 640px){
        width: 100%;
        height: clamp(190px, 10vw, 380px)
    }
`;

const ProductDetailsItemContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 4vw 2vw;
`;

const ProductDetailsItemPrice = styled(TitleH5)`
    font-size: 24px;
    margin: 2.5vw 0 1em;

    @media(width <= 640px){
        font-size: clamp(18px, 4vw, 24px)
    }
`;

const ProductDetailsItemButton = styled(ButtonElem)`
    min-width: 195px;
`;

export default function ProductDetailsItem({ id, image, title, description, price }) {
    return (
        <ProductDetailsItemWrapper>
            <ProductDetaisItemImage src={image} />
            <ProductDetailsItemContent>
                <TitleH3>{title}</TitleH3>
                <Paragraph>{description}</Paragraph>
                <ProductDetailsItemPrice>{price}</ProductDetailsItemPrice>
                <ProductDetailsItemButton isColored>Купить</ProductDetailsItemButton>
            </ProductDetailsItemContent>
        </ProductDetailsItemWrapper>
    );
}
