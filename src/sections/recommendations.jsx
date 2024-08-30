import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container, Section } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import { products } from "../JS/productTexts";
import ProductItem from "../components/product";
import { ProductsWrapper} from "../pages/products";
import ButtonElem from "../components/button";

const RecommendationsButton = styled(ButtonElem)`
margin: 2em auto;
min-width: 255px;

@media(width <= 960px){
    width: 100%;
}
`

export default function RecommendationSection() {
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [buttonText, setButtonText] = useState("Все рецепты");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 960) {
          setVisibleProducts(2);
        } else {
          setVisibleProducts(3);
        }
  
        if (window.innerWidth <= 640) {
          setButtonText("Показать еще");
        } else {
          setButtonText("Все рецепты");
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <Section>
            <Container>
                <TitleH3>Вам также может понравиться</TitleH3>
                <ProductsWrapper>
                    {products.slice(0, visibleProducts).map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </ProductsWrapper>
                <RecommendationsButton>{buttonText}</RecommendationsButton>
            </Container>
        </Section>
    );
}