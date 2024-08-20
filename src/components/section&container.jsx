import styled from "styled-components"

const SectionItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
gap: 2em;
padding: 40px 0;

@media(width<=960px){
    padding: 50px 0 0;
}

@media(width<=640px){
    flex-direction: column;
}
`

const ContainerItem = styled.div`
    width: min(80vw, 1150px);
    max-height: fit-content;
    margin: 0 auto;

    @media (width <= 1080px){
        width: 100vw;
        padding: 0 40px;
    }
    @media(width <= 660px){
        padding: 0 20px;
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