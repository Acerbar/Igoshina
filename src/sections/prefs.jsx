import { prefTexts } from "../JS/prefTexts";
import styled from "styled-components";
import PrefItem from "../components/prefItem";
import { TitleH3 } from "../components/Texts";
import Section from "../components/section";

const PrefsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    margin: 25px 0;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;

export default function PrefSection() {
    return (
        <Section>
            <div className="container">
                <TitleH3>Вместе со мной вы</TitleH3>
                <PrefsContent>
                    <div>
                        {prefTexts.slice(0, 4).map((prefText) => (
                            <PrefItem key={prefText.number} {...prefText} />
                        ))}
                    </div>
                    <div>
                        {prefTexts.slice(4).map((prefText) => (
                            <PrefItem key={prefText.number} {...prefText} />
                        ))}
                    </div>
                </PrefsContent>
            </div>
        </Section>
    );
}

// const PrefsContent = styled.div`
//     column-count: 2;
//     column-fill: balance;
//     width: 100%;
//     margin: 25px 0;

//     & > :last-child {
//         padding: 1.3em 0;


//     }

//     @media(width<=960px){
//         column-count: auto;
//     }

// `
// export default function PrefSection() {
//     return (
//         <Section>
//             <div className="container">
//                 <TitleH3>Вместе со мной вы</TitleH3>
//                 <PrefsContent>
//                     {prefTexts.map((prefText) => (
//                         <PrefItem key={prefText.number} {...prefText} />
//                     ))}
//                 </PrefsContent>
//             </div>
//         </Section>
//     );
// }

