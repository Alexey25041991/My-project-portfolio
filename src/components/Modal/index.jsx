import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { store } from "../../store";

import MaskedInput from "react-text-mask";
import emailMask from "text-mask-addons/dist/emailMask";

import ModalAnimation from "../ModalAnimation";

import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  makeStyles,
  createStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import {
  ContentWrapper,
  Overlay,
  Header,
  HeaderText,
  IconClose,
  Content,
  ContentRadio,
  ContentAnimation,
  Footer,
  ModalComponent,
  ModalSectionWrapper,
  ModalSection,
  ContentText,
} from "./style";

import "./style.css";

import { compact } from "lodash";

import { getwindowInnerWidth } from "../common/utils/getwindowInnerWidth";

import { ReactComponent as CloseOutline } from "../common/icon/CloseOutline.svg";
import { ReactComponent as FooterMailIcon } from "../common/icon/MailDarkIcon.svg";
import { ReactComponent as OrderSiteIcon } from "../common/icon/RocketIcon.svg";

const TextTitleRadio = styled.div`
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.5em;
  letter-spacing: 0.008em;
  color: ${({ theme }) => theme.color.text.primary};
`;

const CssTextField = styled(TextField)({
  marginTop: 10,
  marginBottom: 10,
  minWidth: 120,
  backgroundColor: "#fff",
  borderRadius: "8px",
  "& label": {
    color: "#626F84",
  },
  "& label.MuiFormLabel-filled": {
    marginTop: "10px",
  },
  "& label.Mui-focused": {
    color: "#626F84",
    paddingTop: "10px",
  },
  "& label.MuiFormLabel-filled.Mui-focused": {
    marginTop: "0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ff8560",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#2B313B",
    },
    "&:hover fieldset": {
      borderColor: "#ff8560",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff8560",
    },
  },
});

const CssFormControl = styled(FormControl)({
  marginTop: 10,
  marginBottom: 10,
  minWidth: 120,
  backgroundColor: "#fff",
  borderRadius: "8px",
  "& label": {
    color: "#626F84",
  },
  "& label.MuiFormLabel-filled": {
    marginTop: "10px",
  },
  "& label.Mui-focused": {
    color: "#626F84",
    paddingTop: "10px",
  },
  "& label.MuiFormLabel-filled.Mui-focused": {
    marginTop: "0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ff8560",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#2B313B",
    },
    "&:hover fieldset": {
      borderColor: "#ff8560",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff8560",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginTop: "20px !important",
    },
  })
);

const maskPhone = [
  "+",
  "7",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  "-",
  " ",
  /\d/,
  /\d/,
  " ",
  "-",
  " ",
  /\d/,
  /\d/,
];

const TextMaskPhone = React.forwardRef((props, ref) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={maskPhone}
      placeholder="Введите номер телефона"
      placeholderChar={"\u2000"}
      showMask={false}
    />
  );
});

const TextMaskEMail = React.forwardRef((props, ref) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={emailMask}
      placeholder="Введите Ваш e-mail"
      placeholderChar={"\u2000"}
      showMask={false}
    />
  );
});

const Modal = observer(({ opened = false, onRequestClose }) => {
  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valueService, setValueService] = useState("");
  const [valueRadioTerm, setValueRadioTerm] = useState("wait");
  const [valueRadioTZ, setValueRadioTZ] = useState("valueNot");
  const [valueDescriptionProject, setValueDescriptionProject] = useState("");
  const [animationWork, setAnimationWork] = useState("false");
  const [
    animationProjectDescription,
    setAnimationProjectDescription,
  ] = useState("false");

  useEffect(() => {
    const profileValue = [valueName, valuePhone, valueMail];
    const profileValueInterest = compact(profileValue).length > 1;
    const projectDescription = valueDescriptionProject.length > 25;
    setAnimationProjectDescription(projectDescription);
    setAnimationWork(profileValueInterest);
  }, [valueName, valuePhone, valueMail, valueDescriptionProject]);

  const { name } = store.getToggleTheme();

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
      e.target.closest("[data-close-border]") &&
      !e.target.closest("[data-close-modal]")
    ) {
      handleClose(e);
    }
  };

  useEffect(() => {
    const positionValueWidth = getwindowInnerWidth() < 659;
    if (positionValueWidth) {
      if (opened) {
        document.body.style.overflow = "hidden";
        // document.body.style.marginRight = `${scrollWidthValue}px`;
      } else {
        document.body.style.overflow = "";
        // document.body.style.marginRight = "0";
      }
    }
  }, [opened]);

  return (
    opened && (
      <Overlay data-close-border opened={opened} onClick={handleOverlayClick}>
        <ModalComponent data-close-modal>
          <Header>
            <FooterMailIcon
              width={24}
              height={24}
              fill={name === "light" ? "#2b3037" : "#fff"}
            />
            <HeaderText>Вы готовы сделать заказ?</HeaderText>
          </Header>
          <IconClose onClick={handleClose}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <ModalSectionWrapper>
            <ModalSection>
              <ContentWrapper>
                <Content top>
                  <CssTextField
                    id="standard-basic"
                    label="Представьтесь, пожалуйста *"
                    placeholder="Ф.И.О."
                    fullWidth
                    value={valueName}
                    onChange={(e) => {
                      setValueName(e.target.value);
                    }}
                  />

                  <CssTextField
                    id="maskExample"
                    label="Контактный телефон *"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      inputComponent: TextMaskPhone,
                      value: valuePhone.textmask,
                      onChange: handleChangePhone,
                    }}
                  />
                </Content>
                <Content>
                  <CssFormControl variant="outlined" fullWidth>
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
                      <MenuItem value={"HtmlLayout"}>Html верстка</MenuItem>
                      <MenuItem value={"Development-scratch"}>
                        Разработка с нуля
                      </MenuItem>
                      <MenuItem value={"FinalizationProject"}>
                        Доработка проекта
                      </MenuItem>
                      <MenuItem value={"ModuleDevelopment"}>
                        Разработка модуля
                      </MenuItem>
                      <MenuItem value={"IndividualProject"}>
                        Индивидуальный проект
                      </MenuItem>
                      <MenuItem value={"SiteFilling"}>
                        Наполнение сайта
                      </MenuItem>
                      <MenuItem value={"SiteSupport"}>Поддержка сайта</MenuItem>
                      <MenuItem value={"Other"}>
                        Другое(указать в описании)
                      </MenuItem>
                    </Select>
                  </CssFormControl>
                  <CssTextField
                    id="maskExample"
                    label="Ваш e-mail *"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      inputComponent: TextMaskEMail,
                      value: valueMail.textmask,
                      onChange: (e) => {
                        setValueMail(e.target.value);
                      },
                    }}
                  />
                </Content>
              </ContentWrapper>
              <ContentWrapper>
                <ContentRadio>
                  <FormControl component="fieldset">
                    <TextTitleRadio>Срок на разработку</TextTitleRadio>
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
                        control={
                          <Radio
                            sx={{
                              color: `${name === "light" ? "#2B313B" : "#fff"}`,
                              "&.Mui-checked": {
                                color: `${
                                  name === "light" ? "#2B313B" : "#fff"
                                }`,
                              },
                            }}
                          />
                        }
                        label="Я не спешу"
                      />
                      <FormControlLabel
                        value="urgently"
                        control={
                          <Radio
                            sx={{
                              color: `${name === "light" ? "#2B313B" : "#fff"}`,
                              "&.Mui-checked": {
                                color: `${
                                  name === "light" ? "#2B313B" : "#fff"
                                }`,
                              },
                            }}
                          />
                        }
                        label="Cрочно"
                      />
                      <FormControlLabel
                        value="yesterday"
                        control={
                          <Radio
                            sx={{
                              color: `${name === "light" ? "#2B313B" : "#fff"}`,
                              "&.Mui-checked": {
                                color: `${
                                  name === "light" ? "#2B313B" : "#fff"
                                }`,
                              },
                            }}
                          />
                        }
                        label="Вчера"
                      />
                    </RadioGroup>
                  </FormControl>
                </ContentRadio>
                <ContentRadio>
                  <FormControl component="fieldset">
                    <TextTitleRadio>
                      Есть ли у вас техническое задание?
                    </TextTitleRadio>
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
                        control={
                          <Radio
                            sx={{
                              color: `${name === "light" ? "#2B313B" : "#fff"}`,
                              "&.Mui-checked": {
                                color: `${
                                  name === "light" ? "#2B313B" : "#fff"
                                }`,
                              },
                            }}
                          />
                        }
                        label="Нет"
                      />
                      <FormControlLabel
                        value="valueYes"
                        control={
                          <Radio
                            sx={{
                              color: `${name === "light" ? "#2B313B" : "#fff"}`,
                              "&.Mui-checked": {
                                color: `${
                                  name === "light" ? "#2B313B" : "#fff"
                                }`,
                              },
                            }}
                          />
                        }
                        label="Да"
                      />
                    </RadioGroup>
                  </FormControl>
                </ContentRadio>
              </ContentWrapper>
            </ModalSection>
            <ModalSection>
              <ContentText>
                <CssTextField
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
                onClick={() => console.log("Отправить")}
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
          </ModalSectionWrapper>
        </ModalComponent>
      </Overlay>
    )
  );
});

export default Modal;
