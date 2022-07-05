import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { store } from "../../store";

import MaskedInput from "react-text-mask";

import ModalAnimation from "../ModalAnimation";

import {
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
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

import Button from "../common/Button";

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

  useEffect(() => {
    if (opened) {
      store.setOpenToastModal(false);
    }
  }, [opened]);

  const { name } = store.getToggleTheme();
  const { modal } = store.getToggleLang();

  const handleChangePhone = (event) => {
    setValuePhone(event.target.value);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  };

  const handleCloseButton = () => {
    store.setOpenToastModal(true);
    onRequestClose();
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
            <HeaderText>{modal.title}</HeaderText>
          </Header>
          <IconClose onClick={handleClose}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <ModalSectionWrapper action="https://mail.php" method="POST">
            <ModalSection>
              <ContentWrapper>
                <Content top>
                  <CssTextField
                    id="standard-basic"
                    name="user_name"
                    label={modal.fullName}
                    placeholder={modal.fullNameLabel}
                    fullWidth
                    value={valueName}
                    onChange={(e) => {
                      setValueName(e.target.value);
                    }}
                  />

                  <CssTextField
                    id="maskExample"
                    name="user_phone"
                    label={modal.phone}
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
                      {modal.services}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      label={modal.services}
                      id="demo-simple-select"
                      value={valueService}
                      onChange={(e) => {
                        setValueService(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>{modal.servicesNull}</em>
                      </MenuItem>
                      <MenuItem value={"HtmlLayout"}>
                        {modal.services1}
                      </MenuItem>
                      <MenuItem value={"Development-scratch"}>
                        {modal.services2}
                      </MenuItem>
                      <MenuItem value={"FinalizationProject"}>
                        {modal.services3}
                      </MenuItem>
                      <MenuItem value={"ModuleDevelopment"}>
                        {modal.services4}
                      </MenuItem>
                      <MenuItem value={"IndividualProject"}>
                        {modal.services5}
                      </MenuItem>
                      <MenuItem value={"SiteFilling"}>
                        {modal.services6}
                      </MenuItem>
                      <MenuItem value={"SiteSupport"}>
                        {modal.services7}
                      </MenuItem>
                      <MenuItem value={"Other"}>{modal.services8}</MenuItem>
                    </Select>
                  </CssFormControl>
                  <CssTextField
                    id="maskExample"
                    name="user_email"
                    label={modal.mail}
                    fullWidth
                    margin="normal"
                    value={valueMail.textmask}
                    onChange={(e) => {
                      setValueMail(e.target.value);
                    }}
                  />
                </Content>
              </ContentWrapper>
              <ContentWrapper>
                <ContentRadio>
                  <FormControl component="fieldset">
                    <TextTitleRadio>{modal.time}</TextTitleRadio>
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
                        label={modal.timeValue1}
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
                        label={modal.timeValue2}
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
                        label={modal.timeValue3}
                      />
                    </RadioGroup>
                  </FormControl>
                </ContentRadio>
                <ContentRadio>
                  <FormControl component="fieldset">
                    <TextTitleRadio>{modal.exercise}</TextTitleRadio>
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
                        label={modal.exerciseValue1}
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
                        label={modal.exerciseValue2}
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
                  label={modal.textLabel}
                  placeholder={modal.text}
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
                title={modal.buttonText}
                toOrder
                modal
                handleClick={handleCloseButton}
              >
                <OrderSiteIcon />
              </Button>
              <ContentAnimation>
                <ModalAnimation
                  animationWork={animationWork}
                  animationProjectDescription={animationProjectDescription}
                  valueRadioTerm={valueRadioTerm}
                  valueRadioTZ={valueRadioTZ}
                  money={modal.money}
                  cooperation={modal.cooperation}
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
