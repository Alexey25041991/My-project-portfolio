import React from 'react';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';

// import {
//   ServicesWrapper,
//   ServicesConteiner,
//   ServicesHeader,
//   ServicesLabel,
// } from './style.js';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';

// import { SIZES_WIDTH, SIZES_HEIGHT } from './constants';

const Modal = ({ opened = false, onRequestClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  };

  const onBlur = (e) => {
    console.log(111, e);
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onRequestClose();
    }
  };

  // const onFocus = (e) => {
  //   console.log(1, e);
  //   // if (!e.currentTarget.contains(e.relatedTarget)) {
  //   //   onRequestClose && onRequestClose();
  //   // }
  // };

  return (
    opened && (
      <Overlay opened={opened}>
        <ModalComponent onBlur={onBlur}>
          <Header>Modal Title</Header>
          <IconClose onClick={handleClose}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <Content>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </Content>
          <Footer>
            {/* <Button
          {...secondaryButton}
          size={secondaryButton.size || 'small'}
          kind={secondaryButton.kind || 'secondary'}
        /> */}
          </Footer>
        </ModalComponent>
      </Overlay>
    )
  );
};

export default Modal;
