import React, { useState, useEffect } from 'react';

import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import ModalAnimation from '../ModalAnimation';

import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  makeStyles,
  createStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@material-ui/core';

import { compact } from 'lodash';

import { Overlay } from './Overlay';
import { Header } from './Header';
import { IconClose } from './IconClose';
import { Content, ContentAnimation } from './Content';
import { Footer } from './Footer';
import { ModalComponent } from './ModalComponent';
import { ModalSection } from './ModalSection';
import { ContentText } from './ContentText';

import { ReactComponent as CloseOutline } from './icon/CloseOutline.svg';
import { ReactComponent as FooterMailIcon } from './icon/FooterMailIcon.svg';
import { ReactComponent as OrderSiteIcon } from './icon/OrderSiteIcon.svg';
import { red } from '@material-ui/core/colors';

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
    radio: {
      // backgroundColor: '#ff8560',
      color: red,
    },
    // button: {
    //   marginBottom: '20px !important',
    // },
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
  const [valueRadioTerm, setValueRadioTerm] = useState('wait');
  const [valueRadioTZ, setValueRadioTZ] = useState('valueNot');
  const [valueDescriptionProject, setValueDescriptionProject] = useState('');
  const [animationWork, setAnimationWork] = useState('false');
  const [
    animationProjectDescription,
    setAnimationProjectDescription,
  ] = useState('false');

  useEffect(() => {
    const profileValue = [valueName, valuePhone, valueMail];
    const profileValueInterest = compact(profileValue).length > 1;
    const projectDescription = valueDescriptionProject.length > 25;
    setAnimationProjectDescription(projectDescription);
    setAnimationWork(profileValueInterest);
  }, [valueName, valuePhone, valueMail, valueDescriptionProject]);

  const handleChangePhone = (event) => {
    setValuePhone(event.target.value);
  };

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
            <FooterMailIcon width={24} height={24} fill="#2b3037" />
            Вы готовы сделать заказ?
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
              <FormControl component="fieldset">
                <FormLabel component="legend">Срок на разработку</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  value={valueRadioTerm}
                  onChange={(e) => setValueRadioTerm(e.target.value)}
                  defaultValue="wait"
                >
                  <FormControlLabel
                    value="wait"
                    control={<Radio color="primary" />}
                    label="Я не спешу"
                  />
                  <FormControlLabel
                    value="urgently"
                    control={<Radio color="primary" />}
                    label="Cрочно"
                  />
                  <FormControlLabel
                    value="yesterday"
                    control={<Radio color="primary" />}
                    label="Вчера"
                  />
                </RadioGroup>
              </FormControl>
            </Content>
            <Content>
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
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Есть ли у вас техническое задание?
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  value={valueRadioTZ}
                  onChange={(e) => setValueRadioTZ(e.target.value)}
                  defaultValue="urgently"
                >
                  <FormControlLabel
                    value="valueNot"
                    control={<Radio color="primary" />}
                    className={classes.radio}
                    label="Нет"
                  />
                  <FormControlLabel
                    value="valueYes"
                    control={<Radio color="primary" />}
                    label="Да"
                  />
                </RadioGroup>
              </FormControl>
            </Content>
          </ModalSection>
          <ModalSection>
            <ContentText>
              <TextField
                id="outlined-textarea"
                label="Описание проекта, требования, особые пожелания, бюджет*"
                placeholder="Введите текст"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
                value={valueDescriptionProject}
                onChange={(e) => {
                  setValueDescriptionProject(e.target.value);
                }}
              />
            </ContentText>
          </ModalSection>
          <Footer>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<OrderSiteIcon width={24} height={24} />}
              onClick={() => console.log('Отправить')}
            >
              Отправить
            </Button>
            <ContentAnimation>
              <ModalAnimation
                animationWork={animationWork}
                animationProjectDescription={animationProjectDescription}
                valueRadioTerm={valueRadioTerm}
                valueRadioTZ={valueRadioTZ}
              />
            </ContentAnimation>
          </Footer>
        </ModalComponent>
      </Overlay>
    )
  );
};

export default Modal;
