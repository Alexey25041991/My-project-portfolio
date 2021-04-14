import React, { useState } from 'react';

import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import css from './style.css';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';
import { ModalSection } from './ModalSection';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';
import { ReactComponent as FooterMailIcon } from './icon/FooterMailIcon.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      marginTop: 10,
      marginBottom: 10,
      minWidth: 120,
    },
    textField: {
      marginTop: 10,
      marginBottom: 10,
      minWidth: 120,
    },
  })
);

const maskPhone = [
  '+',
  '7',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  '-',
  ' ',
  /\d/,
  /\d/,
  ' ',
  '-',
  ' ',
  /\d/,
  /\d/,
];

function TextMaskPhone(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={maskPhone}
      placeholder="Введите номер телефона"
      placeholderChar={'\u2000'}
      showMask={false}
    />
  );
}

function TextMaskEMail(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={emailMask}
      placeholder="Введите Ваш e-mail"
      placeholderChar={'\u2000'}
      showMask={false}
    />
  );
}

const Modal = ({ opened = false, onRequestClose }) => {
  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valueService, setValueService] = useState('');

  const handleChangePhone = (event) => {
    setValuePhone(event.target.value);
  };

  console.log(2, valueName, valuePhone, valueMail, valueService);
  const classes = useStyles();

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
              <TextField
                id="standard-basic"
                label="Представьтесь, пожалуйста *"
                placeholder="Ф.И.О."
                fullWidth
                className={classes.textField}
                value={valueName}
                onChange={(e) => {
                  setValueName(e.target.value);
                }}
              />

              <TextField
                id="maskExample"
                label="Контактный телефон *"
                fullWidth
                className={classes.textField}
                margin="normal"
                InputProps={{
                  inputComponent: TextMaskPhone,
                  value: valuePhone.textmask,
                  onChange: handleChangePhone,
                }}
              />
            </Content>
            <Content>
              <TextField
                id="maskExample"
                label="Ваш e-mail *"
                fullWidth
                className={classes.textField}
                margin="normal"
                InputProps={{
                  inputComponent: TextMaskEMail,
                  value: valueMail.textmask,
                  onChange: (e) => {
                    setValueMail(e.target.value);
                  },
                }}
              />
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-label">
                  Выберите услугу *
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Выберите услугу *"
                  id="demo-simple-select"
                  value={valueService}
                  onChange={(e) => {
                    setValueService(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>Выберите...</em>
                  </MenuItem>
                  <MenuItem value={'HtmlLayout'}>Html верстка</MenuItem>
                  <MenuItem value={'Development-scratch'}>
                    Разработка с нуля
                  </MenuItem>
                  <MenuItem value={'FinalizationProject'}>
                    Доработка проекта
                  </MenuItem>
                  <MenuItem value={'ModuleDevelopment'}>
                    Разработка модуля
                  </MenuItem>
                  <MenuItem value={'IndividualProject'}>
                    Индивидуальный проект
                  </MenuItem>
                  <MenuItem value={'SiteFilling'}>Наполнение сайта</MenuItem>
                  <MenuItem value={'SiteSupport'}>Поддержка сайта</MenuItem>
                  <MenuItem value={'Other'}>
                    Другое(указать в описании)
                  </MenuItem>
                </Select>
              </FormControl>
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
