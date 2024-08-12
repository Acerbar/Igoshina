import styled from "styled-components";

const H1 = styled.h1`
    font-family: var(--font-family-1);
    font-weight: 400;
    font-size: 54px;
    line-height: 1.2em;
    margin-eft: -6px;
    color: var(--blackText);
    text-align: start;
    text-wrap: balance;
`
const H2 = styled.h2`
    font-family: var(--font-family-2);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.45em;
    color: var(--mainGreen);
`
const H3 = styled.h3`
    font-family: var(--font-family-1);
    font-size: 36px;
    font-weight: 400;
    line-height: 1.25em;
    color: var(--blackText);
    margin-bottom: 30px;
`
const H4 = styled.h4`
    font-family: var(--font-family-2);
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3em;
    color: var(--blackText);
`
const H6 = styled.h6`
    font-family: var(--font-family-1);
    font-weight: 400;
    font-size: 54px;
    line-height: 1.2em;
    color: var(--blackText);
    text-align: start;

`
const P = styled.p`
    font-family: var(--font-family-2);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.55em;
    color: var(--blackText);
`
export function TitleH1({children, ...props}){
    return(
        <H1 {...props} >{children}</H1>
    )
}

export function TitleH2({children}){
    return(
        <H2>{children}</H2>
    )
}

export function TitleH3({children}){
    return(
        <H3>{children}</H3>
    )
}

export function TitleH4({children, ...props}){
    return(
        <H4 {...props}>{children}</H4>
    )
}

export function TitleH6({children}){
    <H6>{children}</H6>
}
export function Paragraph({children, ...props}){
    return(
        <P {...props}>{children}</P>
    )
}