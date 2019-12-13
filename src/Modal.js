import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ModalBox = styled.div`
  background-color: yellow;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const Modal = ({ children }) => {
  console.log('Loading modal...');
  const modalRoot = document.getElementById('root')
  const modalRef = useRef(null);

  if (!modalRef.current) {
    const div = document.createElement('div')
    modalRef.current = div;
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modalRoot.appendChild(modalRef.current);
    return () => {
      modalRoot.removeChild(modalRef.current);
      document.body.style.overflow = 'unset';
    }
  }, [modalRoot])

  return createPortal(<ModalBox>{children}</ModalBox>, modalRef.current)
};

export default Modal;