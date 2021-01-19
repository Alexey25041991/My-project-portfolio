import React from 'react';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';

const Modal = ({ opened = false, onRequestClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  };

  const handleOverlayClick = (e) => {
    if (
      opened &&
      e.target.closest('[data-close-border]') &&
      !e.target.closest('[data-close-modal]')
    ) {
      handleClose(e);
    }
  };

  return (
    opened && (
      <Overlay data-close-border opened={opened} onClick={handleOverlayClick}>
        <ModalComponent data-close-modal>
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
