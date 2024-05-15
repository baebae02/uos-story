import React, { useState, useEffect } from 'react';
import '../App.css';
import styled, { keyframes, css } from 'styled-components';
import Blue from './Blue';
import Red from './Red';
import Green from './Green';
import Yellow from './Yellow';

function Main() {
  const [SquareIndex, setSquareIndex] = useState(0);
  const [isGuideActive, setIsGuideActive] = useState(true);
  const [isBottom, setIsBottom] = useState(true);
  const [nowColor, setNowColor] = useState('default');
  const [isLastPage, setIsLastPage] = useState(false);

  const colorMappings = [
    { color1: '#00FFB2', color2: '#8FA7DE', color3: '#1400FF', color4: '#B4ADFF' },
    { color1: '#00FFB2', color2: '#8FA7DE', color3: '#1400FF', color4: '#B4ADFF' },
    { color1: '#FF9900', color2: '#DEDB8F', color3: '#FF00D6', color4: '#FFADFC' },
    { color1: '#666CFF', color2: '#00E0FF', color3: '#00FFB2', color4: '#00FF29' },
    { color1: '#FF739D', color2: '#FFE70F', color3: '#FFE600', color4: '#FF8888' },
  ];
  
  const { color1, color2, color3, color4 } = colorMappings[SquareIndex];

  const SelectSquareHandler = (index) => {
    if (index === 'yellow') {
      setIsLastPage(true);
      return;
    }
    window.scrollTo({ top: 0 });
    if (index === 1) {
      setNowColor('blue');
      if (SquareIndex === 1) {
        setSquareIndex(0);
        setNowColor('default');
        return;
      }
      setSquareIndex(1);
    } else if (index === 2 || index === 'blue') {
      setNowColor('red');
      if (SquareIndex === 2) {
        setSquareIndex(0);
        setNowColor('default');
        return;
      }
      setSquareIndex(2);
    } else if (index === 3 || index === 'red') {
      setNowColor('green');
      if (SquareIndex === 3) {
        setSquareIndex(0);
        setNowColor('default');
        return;
      }
      setSquareIndex(3);
    } else if (index === 4 || index === 'green') {
      setNowColor('yellow');
      if (SquareIndex === 4) {
        setSquareIndex(0);
        setNowColor('default');
        return;
      }
      setSquareIndex(4);
    }
  }

  const clickLastPage = () => {
    setSquareIndex(0);
    setNowColor('default');
    setIsLastPage(false);
  }

  const scrollHandler = () => {
    if (window.scrollY <= 10) {
      setIsGuideActive(true);
    } else {
      setIsGuideActive(false);
    }
    if (document.body.scrollHeight - window.scrollY < window.innerHeight + 100) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }
  window.addEventListener('scroll', scrollHandler);

  return (
    <>
      <MainContainer active={SquareIndex === 0}>
        <MainEllipse1 />
        <MainEllipse2 />
        <MainEllipse3 />
        <Container>
          <MainSubtitle>비교과 프로그램이 심어준</MainSubtitle>
          <MainTitle>창업이라는 씨앗</MainTitle>
          {/*<SubTitle>창업뽀개</SubTitle>*/}
          <Squares>
            <BlueSquare onClick={() => SelectSquareHandler(1)} />
            <RedSquare onClick={() => SelectSquareHandler(2)} />
            <GreenSquare onClick={() => SelectSquareHandler(3)} />
            <YellowSquare onClick={() => SelectSquareHandler(4)} />
          </Squares>
        </Container>
      </MainContainer>
      {SquareIndex !== 0 && (
        <>
        <TopSquares>
          <SmallSquare onClick={() => SelectSquareHandler(1)} blue />
          <SmallSquare onClick={() => SelectSquareHandler(2)} red />
          <SmallSquare onClick={() => SelectSquareHandler(3)} green />
          <SmallSquare onClick={() => SelectSquareHandler(4)} yellow />
        </TopSquares>
        <Guide active={isGuideActive}>
          스크롤을 내려주세요
        </Guide>
        </>
      )}
      <ContentContainer active={SquareIndex !== 0}>
        <Blue active={SquareIndex === 1} />
        <Red active={SquareIndex === 2} />
        <Green active={SquareIndex === 3} />
        <Yellow active={SquareIndex === 4} />
        {SquareIndex !== 0 &&
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 927" fill="none" className="wave">
            <g opacity="0.5" filter="url(#filter0_f_1941_139)">
                  <path d="M0 738C0 738 288.098 411.603 559.5 400.5C872.542 387.693 1025.65 864.711 1218.5 738C1478 567.5 1513.28 669.545 1680 738C1831 800 1920 738 1920 738V927H0V738Z" fill="url(#paint0_linear_1941_139)"/>
                  <path d="M0 738C0 738 288.098 411.603 559.5 400.5C872.542 387.693 1025.65 864.711 1218.5 738C1478 567.5 1513.28 669.545 1680 738C1831 800 1920 738 1920 738V927H0V738Z" fill="url(#paint1_linear_1941_139)" fill-opacity="0.5"/>
                </g>
                <defs>
                  <filter id="filter0_f_1941_139" x="-400" y="0.246094" width="2720" height="1326.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1941_139"/>
        </filter>
        <linearGradient id="paint0_linear_1941_139" x1="1848" y1="413.415" x2="1613.17" y2="1292.87" gradientUnits="userSpaceOnUse">
          <stop stop-color={color1}/>
                    <stop offset="1" stop-color={color2}/>
        </linearGradient>
        <linearGradient id="paint1_linear_1941_139" x1="52.4444" y1="416.097" x2="291.36" y2="1298.15" gradientUnits="userSpaceOnUse">
          <stop stop-color={color3}/>
                    <stop offset="1" stop-color={color4}/>
          </linearGradient>
        </defs>
      </svg>
      }
      </ContentContainer>
      <NextSquare onClick={() => SelectSquareHandler(nowColor)} color={nowColor} isBottom={isBottom && window.scrollY > 100} />
      <LastPage isLastPage={isLastPage} onClick={clickLastPage}>
        <LastText isLastPage={isLastPage} delay={0.5}>
          감사합니다.
        </LastText>
        <LastText isLastPage={isLastPage} small delay={0.8}>
          컴퓨터과학부 이종우
        </LastText>
        <LastText isLastPage={isLastPage} toosmall delay={1}>
          with 서울시립대학교 비교과 프로그램
        </LastText>
      </LastPage>
    </>
  );
}

export default Main;

const openEllipse1 = keyframes`
  0% {
    bottom: -10%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`

const openEllipse2 = keyframes`
  0% {
    bottom: -20%;
    opacity: 0;
  }
  100% {
    bottom: -10%;
    opacity: 1;
  }
`
const openEllipse3 = keyframes`
  0% {
    bottom: -35%;
    opacity: 0;
  }
  100% {
    bottom: -25%;
    opacity: 1;
  }
`

const duringEllipse1 = keyframes`
  0% {
    transform: ranslateX(-50%) scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(0.8, 0.6);
    opacity: 0.8;
  }
`

const duringEllipse2 = keyframes`
  0% {
    transform: ranslateX(-50%) scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(1.2, 1);
    opacity: 0.6;
  }
`

const duringEllipse3 = keyframes`
  0% {
    transform: ranslateX(-50%) scale(1.5, 1.5);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(1.7, 1.5);
    opacity: 0.4;
  }
`

const openTitle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const MainContainer = styled.div`
  transition: all 1s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000000;
  transform: translateY(${(props) => (props.active ? 0 : '-100vh')});
`;

const MainEllipse1 = styled.div`
  animation: ${openEllipse1} 1s ease forwards, ${duringEllipse1} 2s 1s infinite alternate;
  opacity: 0;
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scale(0.6);

  width: 1072px;
  height: 416px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(64, 140, 255, 0.00) 42.8%, rgba(64, 140, 255, 0.50) 100%);
  backdrop-filter: blur(12px);
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, rgba(64, 140, 255, 0.00) 90%, rgba(64, 140, 255, 0.25) 100%);
`;

const MainEllipse2 = styled.div`
  animation: ${openEllipse2} 1s 0.2s ease forwards, ${duringEllipse2} 2s 1.2s infinite alternate;
  opacity: 0;
  z-index: 2;
  position: fixed;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);

  width: 1072px;
  height: 416px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(64, 140, 255, 0.00) 42.8%, rgba(64, 140, 255, 0.50) 100%);
  backdrop-filter: blur(12px);
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, rgba(64, 140, 255, 0.00) 90%, rgba(64, 140, 255, 0.25) 100%);
`;

const MainEllipse3 = styled.div`
  animation: ${openEllipse3} 1s 0.3s ease forwards, ${duringEllipse3} 2s 1.4s infinite alternate;
  opacity: 0;
  z-index: 1;
  position: fixed;
  bottom: -25%;
  left: 50%;
  transform: translateX(-50%) scale(1.5);

  width: 1072px;
  height: 416px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(64, 140, 255, 0.00) 42.8%, rgba(64, 140, 255, 0.50) 100%);
  backdrop-filter: blur(12px);
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, rgba(64, 140, 255, 0.00) 90%, rgba(64, 140, 255, 0.25) 100%);
`;

const Container = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-top: 40px;
`;

const MainSubtitle = styled.div`
  animation: ${openTitle} 1s 0.5s ease forwards;
  opacity: 0;
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`;

const MainTitle = styled.div`
  animation: ${openTitle} 1s 0.5s ease forwards;
  opacity: 0;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -4px;
  background: linear-gradient(180deg, #90FF7E 0%, #00FFB2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const openSquare = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`

const Squares = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  gap: 24px;
`

const outlineAnimation = keyframes`
  0% {
    outline: 0px solid #408cff;
  }
  100% {
    outline: 32px solid #408cff00;
  }
`

const BlueSquare = styled.div`
  position: relative;
  animation: ${openSquare} 1s 0.7s ease forwards;
  opacity: 0;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(20, 0, 255, 0.50) 2.87%, rgba(180, 173, 255, 0.50) 93.31%), linear-gradient(224deg, #00FFB2 3.12%, #8FA7DE 93.76%);
  box-shadow: 0px 0px 48px 0px #408CFF;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    scale: 1.1;
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
    scale: 0.95;
  }
  &:after {
    content: '';
    animation: ${outlineAnimation} 2s 2s infinite;
    border-radius: 24px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const RedSquare = styled.div`
  animation: ${openSquare} 1s 0.8s ease forwards;
  opacity: 0;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 0, 214, 0.50) 2.87%, rgba(255, 173, 252, 0.50) 93.31%), linear-gradient(224deg, #F90 3.12%, #DEDB8F 93.76%);

  box-shadow: 0px 0px 48px 0px #F86F91;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    scale: 1.1;
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
    scale: 0.95;
  }
`

const GreenSquare = styled.div`
  animation: ${openSquare} 1s 0.9s ease forwards;
  opacity: 0;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: linear-gradient(224deg, rgba(0, 255, 178, 0.50) 3.12%, rgba(0, 255, 41, 0.50) 93.76%), linear-gradient(135deg, #666CFF 2.87%, #00E0FF 93.31%);

  box-shadow: 0px 0px 48px 0px #18D5AD;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    scale: 1.1;
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
    scale: 0.95;
  }
`

const YellowSquare = styled.div`
  animation: ${openSquare} 1s 1s ease forwards;
  opacity: 0;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 229, 0, 0.50) 2.87%, rgba(255, 136, 136, 0.50) 93.31%), linear-gradient(224deg, #FF739D 3.12%, #FFE70F 93.76%);

  box-shadow: 0px 0px 48px 0px #FFB800;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    scale: 1.1;
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
    scale: 0.95;
  }
`

const TopSquares = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  top: 24px;
  right: 24px;
  gap: 16px;
  z-index: 1000;
`

const SmallSquare = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;

  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
    transform: scale(0.9);
  }
  
 ${props => props.blue && css`
  background: linear-gradient(135deg, rgba(20, 0, 255, 0.50) 2.87%, rgba(180, 173, 255, 0.50) 93.31%), linear-gradient(224deg, #00FFB2 3.12%, #8FA7DE 93.76%);
  box-shadow: 0px 0px 48px 0px #408CFF;
  `}
  ${props => (props.red || props.color == 'blue') && css`
    background: linear-gradient(135deg, rgba(255, 0, 214, 0.50) 2.87%, rgba(255, 173, 252, 0.50) 93.31%), linear-gradient(224deg, #F90 3.12%, #DEDB8F 93.76%);
    box-shadow: 0px 0px 24px 0px #F86F91;
  `}
  ${props => (props.green || props.color == 'red') && css`
    background: linear-gradient(224deg, rgba(0, 255, 178, 0.50) 3.12%, rgba(0, 255, 41, 0.50) 93.76%), linear-gradient(135deg, #666CFF 2.87%, #00E0FF 93.31%);
    box-shadow: 0px 0px 24px 0px #18D5AD;
  `}
  ${props => (props.yellow || props.color == 'green') && css`
    background: linear-gradient(135deg, rgba(255, 229, 0, 0.50) 2.87%, rgba(255, 136, 136, 0.50) 93.31%), linear-gradient(224deg, #FF739D 3.12%, #FFE70F 93.76%);

    box-shadow: 0px 0px 48px 0px #FFB800;
  `}
`

const NextSquare = styled.div`
  position: fixed;
  opacity: 0;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  border-radius: 8px;

  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    transition: 0.05s all;
    filter: brightness(0.8);
  }
  
  ${props => props.color == 'blue' && css`
    background: linear-gradient(135deg, rgba(255, 0, 214, 0.50) 2.87%, rgba(255, 173, 252, 0.50) 93.31%), linear-gradient(224deg, #F90 3.12%, #DEDB8F 93.76%);
    box-shadow: 0px 0px 24px 0px #F86F91;
  `}
  ${props => props.color == 'red' && css`
    background: linear-gradient(224deg, rgba(0, 255, 178, 0.50) 3.12%, rgba(0, 255, 41, 0.50) 93.76%), linear-gradient(135deg, #666CFF 2.87%, #00E0FF 93.31%);
    box-shadow: 0px 0px 24px 0px #18D5AD;
  `}
  ${props => props.color == 'green' && css`
    background: linear-gradient(135deg, rgba(255, 229, 0, 0.50) 2.87%, rgba(255, 136, 136, 0.50) 93.31%), linear-gradient(224deg, #FF739D 3.12%, #FFE70F 93.76%);

    box-shadow: 0px 0px 48px 0px #FFB800;
  `}
  ${props => props.color == 'yellow' && css`
    background: linear-gradient(225deg, rgba(0, 194, 255, 0.50) 5.22%, rgba(235, 255, 0, 0.50) 95.66%), linear-gradient(135deg, #8F00FF 2.87%, #FF00C7 93.31%);
    box-shadow: 0px 0px 48px 0px #8F00FF;
  `}
  ${props => props.isBottom && css`
    opacity: 1;
    transform: translate(-50%, -50%) scale(2);
  `}
`

const ContentContainer = styled.div`
  transition: all ${(props) => (props.active ? 1 : 0.5)}s;
  z-index: 100;
  background-color: #FFFFFF;

  transform: scale(${(props) => (props.active ? 1 : 0.9)});
  border-radius: ${(props) => (props.active ? 0 : 24)}px;
  opacity: ${(props) => (props.active ? 1 : 0)};

  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
`

const GuideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -32px);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -32px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 16px) scale(0.8);
  }
`

const Guide = styled.div`
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  color: #3c414c;
  font-size: 20px;
  font-weight: 500;
  z-index: 1000;
  opacity: ${(props) => (props.active ? 1 : 0)};
  &:before {
    animation: ${GuideAnimation} 3s infinite;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3c414c;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const appearLastPage = keyframes`
  0% {
    opacity: 0;
    transform: scale(3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const LastPage = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(225deg, rgba(0, 194, 255, 0.50) 5.22%, rgba(235, 255, 0, 0.50) 95.66%), linear-gradient(135deg, #8F00FF 2.87%, #FF00C7 93.31%);
  opacity: 0;
  user-select: none;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-origin: center center;

  ${(props) => props.isLastPage && css`
    animation: ${appearLastPage} 1s forwards;
    cursor: pointer;
    user-select: auto;
    pointer-events: all;
  `}
`

const appearText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const LastText = styled.div`
  color: #ffffff;
  font-size: 64px;
  font-weight: 500;
  opacity: 0;
  ${(props) => props.small && css`
    font-size: 32px;
    color: #ffffff80;
    font-style: italic;
  `}
  ${(props) => props.toosmall && css`
    font-size: 24px;
    color: #ffffff60;
    font-style: italic;
  `}
  ${(props) => props.isLastPage && css`
    animation: ${appearText} 2s forwards;
    animation-delay: ${(props) => props.delay}s;
  `}
`
