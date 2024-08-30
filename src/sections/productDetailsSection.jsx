import styled from "styled-components";
import { Container, Section } from "../components/section&container";
import ButtonElem from "../components/button";
import ProductDetailsItem from "../components/productDetailsItem";
import { products } from "../JS/productTexts";



export default function ProductDetails(){
    const firstProduct = products[0];
    return(
        <Section>
            <Container>
                <ButtonElem><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9.5H4" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15.5L4 10L9 4.5" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg><span>Назад</span>
                </ButtonElem>
                    <ProductDetailsItem
                    id={firstProduct.id}
                    image={firstProduct.image}
                    title={firstProduct.title}
                    description={firstProduct.description}
                    price={firstProduct.price}
                />
            </Container>
        </Section>
    )
}