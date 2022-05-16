import ReactDOM from 'react-dom';

import { StyledBackdrop, StyledModal } from './modal.styles';

const Backdrop = props => {
  return (
    <StyledBackdrop></StyledBackdrop>
  );
};

const ModalOverlay = props => {
  return (
    <StyledModal>
      <div className='content'>{props.children}</div>
    </StyledModal>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;