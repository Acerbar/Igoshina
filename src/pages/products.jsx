import styled from "styled-components";
import { useState } from "react";
import { Section, Container } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import ProductItem from "../components/product";
import { products } from "../JS/productTexts";
import ButtonElem from "../components/button";


export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 20px;

    @media(width <= 960px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(width <= 500px){
        grid-template-columns: 1fr;
    }
`

const ProductsButton = styled(ButtonElem)`
    margin: 2em auto;

    @media(width <= 960px){
        width: 100%;
    }
`

export default function ProductsSection() {

    const [visibleProducts, setVisibleProducts] = useState(6);

    const loadMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };

    const displayedProducts = products.slice(0, visibleProducts);

    return (
        <Section>
            <Container>
                <TitleH3>Сборники рецептов</TitleH3>
                <ProductsWrapper>
                    {displayedProducts.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </ProductsWrapper>
                {/* {visibleProducts < products.length && ( */}
                    <ProductsButton onClick={loadMoreProducts}>
                        Показать еще
                    </ProductsButton>
                {/* )} */}
            </Container>
        </Section>
    );
}