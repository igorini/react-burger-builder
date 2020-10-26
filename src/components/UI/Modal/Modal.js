import React from 'react';
import * as Styled from './styled';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <Styled.Modal
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </Styled.Modal>
  </>
);

const areEqual = (prevProps, nextProps) =>
  prevProps.show === nextProps.show &&
  prevProps.children === nextProps.children;

export default React.memo(Modal, areEqual);
