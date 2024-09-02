import styled from "styled-components"

const SectionItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
gap: 2em;
padding: 50px 20px;

@media(width<=960px){
    padding:40px 0;
}

@media(width<=640px){
    flex-direction: column;
    padding: 20px 0;
}

`

const ContainerItem = styled.div`
    width: min(80vw, 1150px);
    max-height: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (width <= 1080px){
        width: 100%;
        padding: 0 40px;
    }
    @media(width <= 660px){
        padding: 0 20px;
    }
    @media(width <= 320px){
        padding: 0 15px;
    }
`

export function Section ({children, ...props}){
   return(
    <SectionItem {...props}>
{children}
    </SectionItem>
   )
}

export function Container({children, ...props}){
    return(
        <ContainerItem {...props}>
            {children}
        </ContainerItem>
    )
}