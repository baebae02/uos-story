import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import CalendarIcon from '../assets/calendar-icon.svg';
import ArrowIcon from '../assets/arrow-icon.svg';
import PeopleIcon from '../assets/people-icon.svg';
import LeftPeopleIcon from '../assets/left-people-icon.svg';
import RightPeopleIcon from '../assets/right-people-icon.svg';
import Uspray from '../assets/uspray.svg';
import Sicrew from '../assets/sicrew.png';
import Uspray2 from '../assets/uspray2.png';
import Uspray3 from '../assets/uspray3.png';
import Innovation from '../assets/innovation.png';

function Blue({ active }) {
  const ProgramNameText = 'SI Crew 창업동아리 캠프';
  return (
    <Container active={active}>
      <Page>
        <Row>
          <ColorBox delay={0}>
            <ColorBoxAnimation />
            창업동아리 캠프
          </ColorBox>
          <Box delay={0.2}>
            <CalendarImageWrap>
              <CalendarImage src={CalendarIcon} />
              <CalendarImage src={CalendarIcon} delay />
            </CalendarImageWrap>
            2023년 5월
          </Box>
        </Row>
        <Row>
          <ColorBox delay={0.4} reverse>
            SI Crew
            <ArrowImage src={ArrowIcon} />
          </ColorBox>
          <UsprayBox delay={0.7}>
            <UsprayIcon src={Uspray} />
          </UsprayBox>
          <Box delay={0.55}>
            <IconImage src={PeopleIcon} />
            <IconImage src={LeftPeopleIcon} abs left />
            <IconImage src={RightPeopleIcon} abs right />
          </Box>
        </Row>
      </Page>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>프로그램 소개</Title>
        <Line />
        <Content>
          <Wrap>
            <BoldTitle>
              SI Crew 창업동아리 캠프란?
            </BoldTitle>
            <Description>
              서울시립대학교에서 2022년부터 시작된 <Bold>창업 관련 프로그램</Bold>이다.<br/>
              본교 대학(원)생의 창업마인드를 확산시키고 기업가 정신을 바탕으로<br/>
              창업문화 조성과 개척 정신을 갖춘 미래 기업가 양성이라는 목적을 갖고 있다.
            </Description>
          </Wrap>
          <Wrap>
            <BoldTitle>
              상세 내용
            </BoldTitle>
            <Description>
              - 2023학년도 SI Crew 창업동아리 활동<br/>
              - 창업아이디어 탐색, 고도화, 사업화 활동<br/>
              - 창업아이디어 및 BM수립 문제해결형 멘토링<br/>
              - SI Crew 창업동아리 & 창업보육센터 입주기업 간 오픈이노베이션 활동<br/>
              - 성과공유회 및 페스티벌 참여
            </Description>
          </Wrap>
          <BackgroundImage src={Sicrew} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>참여 이유</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              2023년 5월에 동기가 <Bold>기독교를 위한 기도제목 서비스</Bold>를<br/>
              만들기 위해 저에게 팀원으로 참여를 제안해 주었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              그때 팀에는 디자이너가 필요했는데,<br/>
              마침 저도 디자인에 관심이 있었고<br/>
              평소에 <Bold>팀원으로서 창업 과정을 경험하고 싶다</Bold>는 생각이 있었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              이에 따라 디자인 역할로 창업 동아리에 참여하기로 결정했습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Uspray2} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>활동 내용 및 성과</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              유스프레이 팀에서 디자이너로 활동하면서<br/>
              <Bold>프론트엔드 개발자와의 소통 방법</Bold>을 익힐 수 있었습니다.<br/>
              혼자 프로젝트를 진행할 때는 디자인을 정리하지 않아도 알아볼 수 있었지만,<br/>
              여러 개발자들이 각자 다른 페이지를 개발하면서 같은 사이즈의 아이콘을 사용하고,<br/>
              일관성을 주기 위해 Figma의 컴포넌트 기능을 적극적으로 활용할 수 있었습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Uspray3} scale={0.8} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>느낀점</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              창업은 개발자나 기획자 등 여러 사람이 모여 <Bold>각자의 역할을 수행하면서</Bold><br/>
              <Bold>하나의 서비스를 만들어 나가는 과정</Bold>임을 깨달았습니다.<br/>
              또한, 창업 대표는 팀원들의 업무를 관리하고 서비스의 방향을 제시하는 역할을 맡으며<br/>
              전체 프로세스를 조율하고 이끌어 나가는 역할을 한다는 것도 알 수 있었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              이런 경험을 통해 팀원 간의 원활한 커뮤니케이션과 역할 분담의 중요성을 깨달았습니다.<br/>
              각자의 역할과 책임을 잘 수행하면서 서비스를 성공적으로 출시하고 발전시키는 것이<br/>
              창업의 핵심이라는 것을 알게 되었습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Innovation} />
        </Content>
      </TextPage>
    </Container>
  
  );
}
export default Blue;

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
  position: relative;
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
  background: linear-gradient(135deg, rgba(20, 0, 255, 0.50) 2.87%, rgba(180, 173, 255, 0.50) 93.31%), linear-gradient(224deg, #00FFB2 3.12%, #8FA7DE 93.76%);
  border-radius: 40px;
  user-select: none;
  pointer-events: none;
  
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  flex-grow: 1;
  flex-shrink: 0;

  ${(props) => props.reverse && css`
    background: linear-gradient(45deg, rgba(20, 0, 255, 0.50) 2.87%, rgba(180, 173, 255, 0.50) 93.31%), linear-gradient(314deg, #00FFB2 3.12%, #8FA7DE 93.76%);
  `}
`

const Box = styled.div`
  position: relative;
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

const ArrowImageAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(40px);
  }
`

const ArrowImage = styled.img`
  animation: ${ArrowImageAnimation} 1s ease infinite alternate;
  width: 80px;
  height: 80px;
  margin-left: 40px;
`

const UsprayIconAnimation = keyframes`
  0% {
    transform: scale(1) rotate3d(1, -1, 0, 0deg) translate(0, 0);
  }
  10% {
    transform: scale(1.2) rotate3d(1, -1, 0, -50deg) translate(60px, 10px);
  }
  15% {
    transform: scale(1.2) rotate3d(1, -1, 0, -50deg) translate(60px, 10px);
  }
  25% {
    transform: scale(1.6) rotate3d(1, 1, 0, -60deg) translate(-80px, 20px);
  }
  30% {
    transform: scale(1.6) rotate3d(1, 1, 0, -60deg) translate(-80px, 20px);
  }
  40% {
    transform: scale(1) rotate3d(1, -1, 0, 0deg) translate(0, 0);
  }
`

const UsprayIcon = styled.img`
  animation: ${UsprayIconAnimation} 8s ease infinite;
  height: 100%;
`

const IconImage = styled.img`
  height: 100%;
  ${(props) => props.abs && css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 216px;
    transform: translate(-50%, -50%);
  `}
  ${(props) => props.left && css`
    animation: ${leftPeople} 6s ease infinite;
  `}

  ${(props) => props.right && css`
    animation: ${rightPeople} 6s ease infinite;
  `}
`

const UsprayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 40px;
  opacity: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(101deg, rgba(9, 255, 196, 0.30) 0.7%, rgba(250, 255, 9, 0.30) 100%), linear-gradient(168deg, rgba(0, 163, 255, 0.00) 0%, rgba(0, 163, 255, 0.40) 100%), linear-gradient(135deg, #D6FFCB 0.01%, #75BD62 100%);
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
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
  padding: 40px 0 40px 24px;

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

const leftPeople = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-45%, -50%) rotate(5deg);
  }
  35% {
    transform: translate(-45%, -50%) rotate(5deg);
  }
  45% {
    transform: translate(-55%, -50%) rotate(-5deg);
  }
`

const rightPeople = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-55%, -50%) rotate(-5deg);
  }
  40% {
    transform: translate(-55%, -50%) rotate(-5deg);
  }
  50% {
    transform: translate(-45%, -50%) rotate(5deg);
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

`


const Bold = styled.b`
  background-color: #408cff20;
  border-radius: 4px;
`
