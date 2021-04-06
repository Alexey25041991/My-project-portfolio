import React, { useState } from 'react';

import { Input } from '../Inputs';
import { Select } from '../Select';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';
import { ModalSection } from './ModalSection';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';
import { ReactComponent as FooterMailIcon } from './icon/FooterMailIcon.svg';

const listService = [
  {
    label: 'Подключить',
    value: '200',
  },
  {
    label: 'Активна',
    value: '204',
  },
  {
    label: 'Недоступна',
    value: '201',
  },
];

const Modal = ({ opened = false, onRequestClose }) => {
  const [inputValue, setValue] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valueService, setService] = useState(listService[0].status);

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
          <ModalSection>
            <Content>
              <Input.Text
                label="Представьтесь, пожалуйста *"
                placeholder="Ф.И.О."
                value={inputValue}
                onChange={(_, value) => {
                  setValue(value);
                }}
              />
              <Input.Mask
                mask="+7(999) 999-99-99"
                label="Контактный телефон *"
                placeholder="Введите номер телефона"
                value={valuePhone}
                width={'320px'}
                onChange={(value) => {
                  setValuePhone(value.value);
                }}
              />
            </Content>
            <Content>
              <Input.Text
                label="Ваш e-mail *"
                placeholder="Введите Ваш e-mail"
                value={valueMail}
                onChange={(_, value) => {
                  setValueMail(value);
                }}
              />
              <Select
                label="Выберите услугу *"
                list={listService}
                width={'240px'}
                placeholder="Выберите из списка"
                value={valueService}
                onChange={setService}
              />
            </Content>
          </ModalSection>
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
