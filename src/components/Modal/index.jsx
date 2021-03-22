import React, { useState } from 'react';

// import { InputText } from '../Inputs/Text';
// import { InputMask } from '../Inputs/Mask';
import { Input } from '../Inputs';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';
import { ReactComponent as FooterMailIcon } from './icon/FooterMailIcon.svg';

const Modal = ({ opened = false, onRequestClose }) => {
  const [inputValue, setValue] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  console.log(111, inputValue);

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
          <Header>
            <FooterMailIcon width={24} height={24} fill="#2b3037" /> Вы готовы
            сделать заказ?
          </Header>
          <IconClose onClick={handleClose}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <Content>
            <Input.Text
              label="Представьтесь, пожалуйста"
              placeholder="Ф.И.О."
              // size={size}
              value={inputValue}
              // status={options[2].checked ? status : undefined}
              onChange={(_, value) => {
                setValue(value);
              }}
              // additionalText='Привет'
              // additionalText={options[2].checked ? 'Ошибка' : undefined}
              // icon={options[0].checked && <StarSolid width={iconSize} />}
              // disabled={options[1].checked}
            />
            <Input.Mask
              mask="+7(999)999-99-99"
              label="Контактный телефон*"
              placeholder="Введите номер телефона"
              value={valuePhone}
              width={'320px'}
              onChange={(value) => {
                setValuePhone(value.value);
              }}
            />
            Привет Привет
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
