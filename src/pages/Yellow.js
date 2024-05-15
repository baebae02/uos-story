import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import CalendarIcon from '../assets/calendar-icon.svg';
import SIcon from '../assets/s-icon.svg';
import Yellow1 from '../assets/yellow1.png';
import Yellow2 from '../assets/yellow2.png';
import Yellow3 from '../assets/yellow3.png';
import S from '../assets/s-logo.svg';
import W from '../assets/w-logo.svg';
import M from '../assets/m-logo.svg';

function Yellow({ active }) {
  const ProgramNameText = '소프트웨어 마에스트로';
  return (
    <Container active={active}>
      <Page>
        <Row>
          <ColorBox delay={0}>
            <ColorBoxAnimation />
            실제 창업을
          </ColorBox>
          <Box delay={0.2}>
            <CalendarImageWrap>
              <CalendarImage src={CalendarIcon} />
              <CalendarImage src={CalendarIcon} delay />
            </CalendarImageWrap>
            2024년 4월
          </Box>
        </Row>
        <Row>
          <ColorBox delay={0.4} reverse>
            시작하다
          </ColorBox>
          <ImageBox delay={0.6}>
            <SWMLogo src={S} delay={0} />
            <SWMLogo src={W} delay={0.2} />
            <SWMLogo src={M} delay={0.4} />
          </ImageBox>
          <Box delay={0.8}>
            <IconImage src={SIcon} />
          </Box>
        </Row>
      </Page>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>비교과를 마친, 나의 모습</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              UOS 커리어원정대 활동을 마치고 나니 2월이 찾아왔습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              저는 소프트웨어 마에스트로를 신청하게 되었고,<br/>
              코딩 테스트 및 면접을 통과하여 최종 합격하였습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              <Bold>소프트웨어 마에스트로</Bold> 프로그램에서는 담당 멘토부터<br/>
              프로젝트 개발비까지 지원해 주어서,<br/>
              서울시립대학교에서 쌓아온 비교과 프로그램을<br/>
              토대로 올해 창업을 도전하고 있습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Yellow1} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>비교과를 마친, 나의 모습</Title>
        <Line />
        <Content reverse>
          <Wraps>
            <Wrap>
              <Description>
                그래서 올해 4월부터 학업과 병행하며 바쁜 일정을 보내고 있으며,<br/>
                주 5회 센터에 방문하여 팀원들과 창업 아이디어를 회의하고<br/>
                전담 멘토링을 통해 아이디어 및 창업에 대한 지식을 습득하고 있습니다.
              </Description>
            </Wrap>
            <Wrap>
              <Description>
                이러한 소중한 기회를 얻게 된 배경에는 서울시립대학교에서<br/>
                <Bold>SI Crew 창업동아리 캠프</Bold>부터 <Bold>커리어 원정대</Bold>까지<br/>
                진로 및 창업에 대한 지원을 아끼지 않았기 때문이라고 생각합니다.
              </Description>
            </Wrap>
          </Wraps>
          <BackgroundImage src={Yellow2} reverse />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>비교과를 마친, 나의 모습</Title>
        <Line />
        <Content>
          <Wraps>
            <Wrap>
              <Description>
                저는 창업 위주로 비교과 활동을 진행하였지만<br/>
                이외에도 <Bold>취업 멘토링이나 영상 콘텐츠 제작</Bold> 등<br/>
                다양한 활동들도 있으니 다른 학생분들도<br/>
                비교과 프로그램을 통해 자신의 길을 찾아가셨으면 좋겠습니다!
              </Description>
            </Wrap>
          </Wraps>
          <BackgroundImage src={Yellow3} />
        </Content>
      </TextPage>
    </Container>
  
  );
}
export default Yellow;

const Container = styled.div`
  transition: all 1s;
  z-index: 100;

  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 80px;

  transform: scale(${(props) => (props.active ? 1 : 0)});
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 100%;
  height: 100%;
  margin-bottom: -50vh;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
`

const Row = styled.div`
  height: 280px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const openColorText = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const MoveBackground = keyframes`
  0% {
    background-position: 20% 50%;
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  32% {
    background-position: -190% 50%;
    opacity: 1;
  }
  50% {
    background-position: -180% 50%;
  }
  100% {
    background-position: -180% 50%;
  }
`

const ColorBoxAnimation = styled.div`
  animation: ${MoveBackground} 6s ease infinite;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: 200% 100%;
  background-image: linear-gradient(60deg, transparent 20%, #ffffff80 20%, #ffffff80 30%,transparent 30%, transparent 35%, #ffffff40 35%, #ffffff40 40%,transparent 40%,transparent);
  opacity: 1;
`


const ColorBox = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 64px;
  height: 100%;
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;
  background: linear-gradient(135deg, rgba(255, 229, 0, 0.50) 2.87%, rgba(255, 136, 136, 0.50) 93.31%), linear-gradient(224deg, #FF739D 3.12%, #FFE70F 93.76%);
  border-radius: 40px;
  user-select: none;
  pointer-events: none;
  
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  flex-grow: 1;
  flex-shrink: 0;

  ${(props) => props.reverse && css`
    background: linear-gradient(45deg, rgba(255, 229, 0, 0.50) 2.87%, rgba(255, 136, 136, 0.50) 93.31%), linear-gradient(314deg, #FF739D 3.12%, #FFE70F 93.76%);
  `}
`

const Box = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 32px 64px;
  height: 100%;
  color: #3C414C;
  font-size: 80px;
  font-weight: 500;
  background: #F0F1F5;
  border-radius: 40px;
  user-select: none;
  pointer-events: none;
  
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  flex-shrink: 0;
`

const calendarAnimation = keyframes`
  0% {
    transform: rotateX(90deg) translateY(48px) scale(1.2);
    z-index: 5;
  }
  50% {
    transform: rotateX(0deg) translateY(0px) scale(1);
    z-index: 3;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const CalendarImageWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`

const CalendarImage = styled.img`
  animation: ${calendarAnimation} 4s infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: top center;
  ${(props) => props.delay && css`
    animation-delay: 2s;
  `}
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  15% {
    opacity: 0.3;
  }
  30% {
    transform: rotate(180deg);
    opacity: 1;
  }
  70% {
    transform: rotate(180deg);
    opacity: 1;
  }
  85% {
    opacity: 0.3;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`

const IconImage = styled.img`
  animation: ${rotateAnimation} 8s infinite;
  height: 100%;
`

const blurAnimation = keyframes`
  0% {
    width: 80%;
    height: 10%;
    filter: blur(24px);
  }
  100% {
    width: 100%;
    height: 30%;
    filter: blur(40px);
  }
`

const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 40px;
  opacity: 0;
  width: 100%;
  height: 100%;
  background: #151F3A;
  gap: 4px;
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  flex-grow: 1;
  &:before {
    animation: ${blurAnimation} 2s infinite alternate;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2BA4D5;
    width: 80%;
    height: 10%;
    filter: blur(24px);
  }
`

const SWMLogoAnimation = keyframes`
  0% {
    transform: rotateY(0);
  }
  16% {
    transform: rotateY(180deg) translateY(-12px);
  }
  33% {
    transform: rotateY(0deg);
  }
  50% {
    transform: translateY(-12px);
  }
  66% {
    transform: translateY(0px);
  }
  83% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
`

const SWMLogo = styled.img`
  animation: ${SWMLogoAnimation} 5s infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  height: 50%;
`

const ImagePage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 40px;
  user-select: none;
  pointer-events: none;
`

const TextPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
`

const ProgramName = styled.div`
  color: #5C5E66;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: #F0F1F5;
  border-radius: 8px;
  flex-shrink: 0;
  @media (min-width: 1400px) {
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 12px;
  }
`

const Title = styled.div`
  color: #408cff;
  font-size: 64px;
  font-weight: bold;
  flex-shrink: 0;
  @media (min-width: 1441px) {
    font-size: 80px;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  flex-shrink: 0;
`

const Content = styled.div`
  gap: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 24px 40px 24px;

  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.70);
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background-color: #ffffff80;
  @media (min-width: 1441px) {
    padding: 64px 0 64px 40px;
  } 
  ${(props) => props.reverse && css`
  align-items: flex-end;
  `}
`

const Wraps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
`

const BoldTitle = styled.div`
  color: #3C414C;
  font-size: 32px;
  font-weight: bold;
  @media (min-width: 1441px) {
    font-size: 36px;
  }
`

const Description = styled.div`
  color: #3C414C;
  font-size: 24px;
  @media (min-width: 1441px) {
    font-size: 28px;
  }
`

const BackgroundImage = styled.img`
  position: absolute;
  right: 24px;
  bottom: 24px;
  height: calc(100% - 48px);
  border-radius: 16px;
  z-index: 0;

  ${(props) => props.scale && css`
    transform-origin: right bottom;
    transform: scale(${props.scale});
  `}
  ${(props) => props.reverse && css`
    left: 24px;
  `}
`

const Bold = styled.b`
  background-color: #ffb80020;
  border-radius: 4px;
`
