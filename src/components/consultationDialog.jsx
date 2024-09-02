import { createPortal } from "react-dom";
import { useRef, useEffect} from "react";
import styled from 'styled-components';
import { workTextsOne } from "../JS/workTexts";
import { DiplomItemWrapper, CloseModalButton, DiplomItemInner } from "./diplomDialog";
import WorkItem from "./WorkItem";

const ConsultationItemInner = styled(DiplomItemInner)`
padding: 3em;
@media(width <= 960px){
    padding: 2em;
}
@media(width <= 640px){
    padding: 1.5em;
}
@media(width <= 320px){
    padding: 1em;
}
`

const ConsultationDialog = ({ open, onClose }) => {
    const consultationModal = useRef();
    const consultationItemInner = useRef();
    const scrollY = useRef(0);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (consultationItemInner.current && !consultationItemInner.current.contains(event.target)) {
                onClose();
            }
        };

        if (open) {
            scrollY.current = window.scrollY;
            consultationModal.current.showModal();
            document.body.style.position = 'fixed'; 
            document.body.style.top = `-${scrollY.current}px`; 
            document.body.classList.add('body__locked');
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            consultationModal.current.close();
            document.body.classList.remove('body__locked');
            document.body.style.position = ''; 
            document.body.style.top = ''; 
            window.scrollTo(0, scrollY.current); 
        }

        return () => {
          document.body.classList.remove('body__locked');
          document.body.style.position = ''; 
          document.body.style.top = '';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, onClose]);

    return createPortal(
        <DiplomItemWrapper ref={consultationModal}>
            <CloseModalButton onClick={onClose} />
            <ConsultationItemInner ref={consultationItemInner}>
                {workTextsOne.map((workTextOne) => (
                    <WorkItem key={workTextOne.id} {...workTextOne} />
                ))}
            </ConsultationItemInner>
        </DiplomItemWrapper>,
        document.getElementById('consultation-nest')
    );
};

export default ConsultationDialog;