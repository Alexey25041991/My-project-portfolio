import React, { useState } from 'react';

// import { Input } from '../Inputs';
// import { Select } from '../Select';

import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
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
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  textField: {
    color: red,
  },
}));

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
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

function TextMaskCustom(props) {
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

const Modal = ({ opened = false, onRequestClose }) => {
  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valueService, setService] = useState(listService[0].status);

  const handleChange = (event) => {
    setValuePhone(event.target.value);
  };

  console.log(2, valueName, valuePhone);
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
                value={valueName}
                onChange={(e) => {
                  setValueName(e.target.value);
                }}
              />

              <TextField
                id="maskExample"
                label="Контактный телефон *"
                className={classes.textField}
                margin="normal"
                InputProps={{
                  inputComponent: TextMaskCustom,
                  value: valuePhone.textmask,
                  onChange: handleChange,
                }}
              />

              {/* <FormControl>
                <InputLabel htmlFor="formatted-text-mask-input">
                  Контактный телефон *
                </InputLabel>
                <Input
                  value={valuePhone.textmask}
                  onChange={handleChange}
                  name="textmask"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                  inputProps={{ 'aria-label': 'description' }}
                  disableUnderline
                />
              </FormControl> */}
            </Content>

            {/* <Input.Text
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
                width={'320px'}
                placeholder="Выберите из списка"
                value={valueService}
                onChange={setService}
              />*/}
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
