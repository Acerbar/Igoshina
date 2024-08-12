// import styled from "styled-components";
// import { createPortal } from "react-dom";
// import { useRef, useEffect } from "react";
// import { TitleH6 } from "./Texts";

// const DialogWrapper = styled.div`
//     width: min(600px, 90%);
//     height: 384px;
//     background-color: var(--borderGrey);
//     border-radius: 40px;
// `

// const ErrorItem = ({open, onClose}) =>{
//     const modal = useRef()

//     // useEffect(() => {
//     //     if(open) {
//     //         modal.current.showModal()
//     //     }
//     //     else{
//     //         modal.current.close()
//     //     }
//     // }, [open])

//     return createPortal(
//         <>
//             <DialogWrapper autoFocus ref={modal}>
//                 <TitleH6>Ошибка</TitleH6>
//             </DialogWrapper>
//         </>,
//         document.getElementById('modal')
//     )
// }
// export default ErrorItem;