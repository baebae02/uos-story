import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import CalendarIcon from '../assets/calendar-icon.svg';
import FireIcon from '../assets/fire-icon.svg';
import Friend from '../assets/friend.png';
import UoslinkIcon from '../assets/uoslink-icon.svg';
import Red1 from '../assets/red1.png';
import Red2 from '../assets/red2.png';
import Red3 from '../assets/red3.png';
import Red4 from '../assets/red4.png';

function Red({ active }) {
  const ProgramNameText = 'UOS 창업뽀개기';
  return (
    <Container active={active}>
      <Page>
        <Row>
          <ColorBox delay={0}>
            <ColorBoxAnimation />
            UOS 창업뽀개기
          </ColorBox>
          <Box delay={0.2}>
            <CalendarImageWrap>
              <CalendarImage src={CalendarIcon} />
              <CalendarImage src={CalendarIcon} delay />
            </CalendarImageWrap>
            2023년 11월
          </Box>
        </Row>
        <Row>
          <Box delay={0.4}>
            <UOSImage src={UoslinkIcon} />
            시대링크
          </Box>
          <ImageBox delay={0.7} />
          <Box delay={0.55}>
            <IconImage src={FireIcon} />
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
              UOS 창업뽀개기란?
            </BoldTitle>
            <Description>
              서울시립대학교 창업지원단에서는 <Bold>창업에 대한 기초 교육부터 멘토링, 경진대회,</Bold><br/>
              <Bold>동아리 지원</Bold>까지 단계별로 교내 구성원에게 창업의 모든 것을 지원해 주는 프로그램이다.
            </Description>
          </Wrap>
          <Wrap>
            <BoldTitle>
              지원 내용
            </BoldTitle>
            <Description>
              -  멘토링 참여 기회 제공<br/>
              -  SI Crew 창업동아리 연계<br/>
              -  <Bold>전원 시상</Bold> (1등: 70만원, 2등: 50만원, 3등: 30만원, 나머지: 10만원)
            </Description>
          </Wrap>
          <BackgroundImage src={Red1} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>프로그램 소개</Title>
        <Line />
        <Content>
          <Wrap>
            <BoldTitle>
              프로그램 일정
            </BoldTitle>
            <TableImage src={Red2} />
          </Wrap>
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>참여 이유</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              9월에 시대링크라는 서울시립대학교 학생들을 위한 교내 정보를<br/>
              쉽게 확인할 수 있는 크롬 확장 프로그램 서비스를 제작하게 되었습니다.<br/>
              이 프로그램을 주위 동기들도 사용할 수 있도록 배포하였고,<br/>
              더 많은 학생들이 활용할 수 있도록 교내 및 주위 상권과 연계하여<br/>
              다양한 혜택을 제공하고자 하였습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              이러한 프로젝트를 <Bold>담당 멘토님께서 검토해 주시고 조언을 받기 위해</Bold><br/>
              해당 프로그램에 참여하게 되었습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Red3} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>활동 내용 및 성과</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              시대링크 서비스의 성과를 내는 데에는 시간적 제약이 있어서,<br/>
              지원금을 활용하여 GPT4를 구입하고 개발에 활용하는 것이 더 유익하다고 판단했습니다.<br/>
              이를 통해 GPT4를 활용하여 서비스의 기능을 쉽고 빠르게 개발할 수 있었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              또한, 멘토님께 여러 차례에 걸친 멘토링을 통해 아이디어를 검토하고<br/>
              사업계획서를 직접 작성하며 아이디어를 고도화하는 과정을 거칠 수 있었습니다.<br/>
              그리고 발표용 사업계획서를 작성하고 평가자들 앞에서<br/>
              직접 발표해 볼 수 있는 기회를 가질 수 있었습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Red4} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>느낀점</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              창업뽀개기 프로그램에 참여하면 창업동아리 <Bold>SI Crew 연계 지원 자격</Bold>을 받는 것은 <Bold>매우 큰 장점</Bold>이라고 생각합니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              시대링크를 개발하면서 발생한 비용이 상당히 부담스러웠는데,<br/>
              창업동아리 자격을 받아 금전적인 문제를 해결할 수 있었고,<br/>
              원하는 서비스를 개발할 수 있는 기회를 얻을 수 있었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              또한, 각 분야별로 담당 멘토님이 계셔서, 해당 멘토님과의 멘토링 시간을 통해<br/>
              Business Model을 검토받고 아이디어에 대한 멘토님의 의견을<br/>
              들을 수 있다는 것도 매우 큰 장점이라고 생각합니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              창업동아리 신청은 매년 5월경에 받으며 그 이후 추가 신청은 불가능하다는 점을 알고 있어서,<br/>
              해당 기간을 놓치고 <Bold>창업을 희망하는 학생들과</Bold><br/>
              창업을 준비하다가 창업 동아리로 연계하려는 학생들에게<br/>
              10월에 진행되는 창업뽀개기 프로그램을 추천합니다!
            </Description>
          </Wrap>
        </Content>
      </TextPage>
    </Container>
  
  );
}
export default Red;

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
  background: linear-gradient(135deg, rgba(255, 0, 214, 0.50) 2.87%, rgba(255, 173, 252, 0.50) 93.31%), linear-gradient(224deg, #F90 3.12%, #DEDB8F 93.76%);
  border-radius: 40px;
  user-select: none;
  pointer-events: none;
  
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  flex-grow: 1;
  flex-shrink: 0;
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

const IconImage = styled.img`
  height: 100%;
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

const UOSImageAnimation = keyframes`
  0% {
    transform: rotateY(0deg) scale(1)
  }
  10% {
    transform: rotateY(180deg) scale(1.5)
  }
  20% {
    transform: rotateY(360deg) scale(1)
  }
`
const ImageAnimation = keyframes`
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 150% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
`

const ImageBox = styled.div`
  border-radius: 40px;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Friend});
  background-size: cover;
  background-position: center;
  animation: ${openColorText} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards, ${ImageAnimation} 6s infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`

const UOSImage = styled.img`
  animation: ${UOSImageAnimation} 6s infinite;
  width: 120px;
  height: 120px;
`

const TableImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
`

const Bold = styled.b`
  background-color: #ff5a5a20;
  border-radius: 4px;
`
