import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import CalendarIcon from '../assets/calendar-icon.svg';
import AirplaneIcon from '../assets/airplane-icon.svg';
import Friend from '../assets/friend.png';
import UoslinkIcon from '../assets/uoslink-icon.svg';
import Green1 from '../assets/green1.png';
import Green15 from '../assets/green15.png';
import Green2 from '../assets/green2.png';
import Green25 from '../assets/green25.png';
import Green3 from '../assets/green3.png';
import Green35 from '../assets/green35.png';
import Green4 from '../assets/green4.png';

function Green({ active }) {
  const ProgramNameText = 'UOS 커리어원정대';
  return (
    <Container active={active}>
      <Page>
        <Row>
          <ColorBox delay={0}>
            <ColorBoxAnimation />
            UOS 커리어원정대
          </ColorBox>
          <Box delay={0.2}>
            <CalendarImageWrap>
              <CalendarImage src={CalendarIcon} />
              <CalendarImage src={CalendarIcon} delay />
            </CalendarImageWrap>
            2024년 1월
          </Box>
        </Row>
        <Row animation>
          <LeftBox>
            <TopBox>
              <IconImage src={AirplaneIcon} top/>
            </TopBox>
            <BottomBox>
              <IconImage src={AirplaneIcon} bottom/>
            </BottomBox>
          </LeftBox>
          <RightBox>
            <IconImage src={AirplaneIcon} />
          </RightBox>
        </Row>
      </Page>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>프로그램 소개</Title>
        <Line />
        <Content>
          <Wrap>
            <BoldTitle>
              UOS 커리어원정대란?
            </BoldTitle>
            <Description>
              UOS 커리어원정대는 학업에서 잠시 멀어져 진로탐색, 창업, 여행 등의<br/>
              다양한 활동을 체험하고 이를 통해 향후 나아갈 방향을 설정하는 서울형 갭이어 프로그램으로,<br/>
              서울시립대학교에서 주관하는 진로개발 프로그램이다.<br/>
              <br/>
              글로벌 무대를 통해 진로 탐색을 희망하는 2학년 이상 재학생을 대상으로<br/>
              11월부터 국내 사전교육(멘토링, 워크숍 등)을 받고,<br/>
              1월에 2주간의 해외 현지(덴마크, 스웨덴)에서 팀별로 프로젝트를 진행한다.
            </Description>
          </Wrap>
          <Wrap>
            <BoldTitle>
              지원 내용
            </BoldTitle>
            <Description>
              -  여행 경비 지원(항공료, 숙박비, 식비 등)<br/>
              -  학생 1인당 최대 200만원 지원
            </Description>
          </Wrap>
          <BackgroundImage src={Green1} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>프로그램 소개 - 2023년 기준</Title>
        <Line />
        <Content>
          <Wrap>
            <BoldTitle>
              선발 인원
            </BoldTitle>
            <Description>
            -  20명 ~ 24명(단과대학별 4명씩 1팀, 최대 6팀 선발)<br/>
            * 팀 구성 시 전공은 서로 달라도 무방하나, 같은 단과대학 소속<br/>
            * 팀 구성 후, 변동 불가
            </Description>
          </Wrap>
          <Wrap>
            <BoldTitle>
              선발 일정
            </BoldTitle>
            <Description>
              <Image src={Green15} />
            </Description>
          </Wrap>
          <BackgroundImage src={Green2} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>프로그램 소개 - 2024년 기준</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              <Bold>올해는 프로그램이 조금 더 확대</Bold>된 것 같습니다!<br/>
              그래서 선발 인원이 24명(6팀)에서 80명(20팀)으로 늘어났고<br/>
              기존 유럽 2개국에서 해외 권역별 1개 국씩 총 4개국으로 확대되었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              <Bold>자세한 내용은 다음 링크를 확인하면 좋을 것 같습니다.</Bold><br/>
              <a href="https://uos.ac.kr/korNotice/view.do?list_id=FA1&seq=27551&epTicket=INVALID" target="_blank" rel="noreferrer"> UOS 커리어원정대 2024년 프로그램 소개</a>
            </Description>
          </Wrap>
          <BackgroundImage src={Green25} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>참여 이유</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              커리어원정대 프로그램 공지가 올라왔을 때, 탐방 국가는 덴마크와 스웨덴으로 정해져 있었습니다.<br/>
              그래서 저와 팀원들은 어떻게 덴마크와 스웨덴에서 진로를 탐색할 수 있을지에 대해 고민하게 되었습니다.<br/>
              그러던 중 저희 팀이 공통적으로 가진 관심사인 <Bold>창업</Bold>에 초점을 맞추기로 하고,<br/>
              이를 주제로 탐방 국가에서의 활동을 계획하게 되었습니다.<br/>
              특히 스웨덴은 유럽의 실리콘밸리로 불리는 만큼 창업 생태계가 발전되어 있다는 사실을 알게 되었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              이에 따라 저희 팀은 <Bold>해당 국가에서 창업에 관련된 지식과 경험</Bold>을 얻을 수 있을 것이라고 판단하였고,<br/>
              이 프로그램에 참여하게 되었습니다.
            </Description>
          </Wrap>
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>활동 내용 및 성과</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              현지 학생과의 인터뷰를 진행하면서 느낀 점은,<br/>
              창업 관련 지원이 풍부하여 학생들이 <Bold>창업에 대한 부담감을 크게 느끼지 않았다는 것</Bold>입니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              또한 창업 활동을 위한 공간이 개방되어 있어서<br/>
              다양한 분야의 창업자들이 모여 협력하고, <br/>
              <Bold>서로의 아이디어를 공유</Bold>하며 시너지 효과를 내며<br/>
              아이디어를 발표하는 모습도 확인할 수 있었습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              그리고 창업 팀들은 공간 내에 마련된 <Bold>다양한 자원과 지원 프로그램</Bold>을 통해<br/>
              필요한 기술적 지원이나 멘토링을 받을 수 있다는 사실도 알 수 있었습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Green3} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>활동 내용 및 성과</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              창업과 별개로 국내에서는 공부할 수 있는 좋은 장소가 부족하지만,<br/>
              반면에 덴마크에서는 블랙 다이아몬드 도서관(덴마크 왕립 도서관)과 같이<br/>
              공부할 수 있는 환경이 제공되어 현지에서도 저런 장소에서<br/>
              공부하고 싶다는 생각이 들 정도로 <Bold>좋은 환경을 제공받는다는 것</Bold>을 느꼈습니다.
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              또한, 덴마크에서 창업 중인 KOPAN 대표님과<br/>
              스웨덴에서 창업 중인 Monster Chicken 대표님과 직접 대화하면서<br/>
              <Bold>창업에 대한 인사이트</Bold>를 얻을 수 있는 소중한 경험을 했습니다.
            </Description>
          </Wrap>
          <BackgroundImage src={Green35} />
        </Content>
      </TextPage>
      <TextPage>
        <ProgramName>{ProgramNameText}</ProgramName>
        <Title>느낀점</Title>
        <Line />
        <Content>
          <Wrap>
            <Description>
              UOS 커리어원정대 프로그램은 단순히 덴마크와 스웨덴을 놀러 가거나 여행하는 것이 아니라,<br/>
              해당 국가에서 어떤 주제로 활동할 것인지 사전에 꼼꼼히 계획을 해야 합니다.<br/>
              방학 동안에도 프로그램 관련 교육을 받으며 활동을 더욱 가치 있게 만들 수 있어서<br/>
              <Bold>진로 탐색에 매우 도움이 되는 활동이라고 생각합니다.</Bold>
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              또한, 현지 학생들과 교류할 수 있는 시간도 주어지고 코판(KOPAN) 대표인 브루스께서<br/>
              함께 일정을 관리해 주시면서 한국에서는 얻을 수 없는 정보나 창업 과정에서의 어려움과<br/>
              유용한 정보를 알려주셔서 더욱 값진 시간을 보낼 수 있었습니다. 
            </Description>
          </Wrap>
          <Wrap>
            <Description>
              이 프로그램을 준비하는 분들에게는 탐방 국가를 방문하기 전에<br/>
              <Bold>현지에서 어떤 활동을 할지 준비하는 만큼 많은 것을 얻을 수 있는 활동</Bold>이라고<br/>
              생각하기 때문에  일정을 꼼꼼하게 계획하고 준비하는 것을 권장합니다!
            </Description>
          </Wrap>
          <BackgroundImage src={Green4} scale={0.8} />
        </Content>
      </TextPage>
    </Container>
  
  );
}
export default Green;

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

const RowAnimation = keyframes`
  0% {
    scale: 0.8;
    opacity: 0;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
`

const Row = styled.div`
  height: 280px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  ${(props) => props.animation && css`
    opacity: 0;
    animation: ${RowAnimation} 1s 0.8s forwards;
  `}
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
  background: linear-gradient(224deg, rgba(0, 255, 178, 0.50) 3.12%, rgba(0, 255, 41, 0.50) 93.76%), linear-gradient(135deg, #666CFF 2.87%, #00E0FF 93.31%);
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

const AirPlaneLeft = keyframes`
  0% {
    left: -20%;
  }
  12% {
    left: -20%;
  }
  37% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
  
`

const AirPlaneRight = keyframes`
  0% {
    transform: translateX(-120%);
  }
  24.5% {
    transform: translateX(-120%);
  }
  37% {
    transform: translateX(0);
  }
  95% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(100%);
  }
`

const RightBoxLine = keyframes`
  0% {
    width: 0;
  }
  28% {
    width: 0;
  }
  37% {
    width: 45%;
  }
  95% {
    left: 0;
    width: 55%;
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
`

const IconImage = styled.img`
  animation: ${AirPlaneRight} 8s 1s infinite;
  transform: translateX(-120%);
  z-index: 100;
  position: absolute;
  height: 100%;
  scale: 0.89;
  ${(props) => props.top && css`
    animation: ${AirPlaneLeft} 8s 1s infinite;
    left: -20%;
    position: absolute;
    top: 0;
    bottom: 0;
    height: auto;
    scale: 0.75;
    transform: translateX(0);
  `}
  ${(props) => props.bottom && css`
    animation: ${AirPlaneLeft} 8s 1s infinite;
    left: -20%;
    position: absolute;
    top: 0;
    bottom: 0;
    height: auto;
    scale: 1;
    transform: translateY(-50%) scale(0.75);
  `}
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

const Bold = styled.b`
  background-color: #18D5AD20;
  border-radius: 4px;
`

const Image = styled.img`
  max-width: 50%;
`

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

`

const RightBox = styled.div`
  overflow: hidden;
  border-radius: 0px 40px 40px 0px;
  background: linear-gradient(180deg, #2A6AA3 0%, #B02834 100%);
  width: 320px;
  height: 100%;
  position: relative;

  &:before {
    animation: ${RightBoxLine} 8s 1s infinite;
    height: 16px;
    content: '';
    position: absolute;
    top: calc(25% - 8px);
    left: 0;
    transform: translateY(-50%);
    background-image: linear-gradient(to left, #F8CE46, transparent)
  }
  &:after {
    animation: ${RightBoxLine} 8s 1s infinite;
    height: 16px;
    content: '';
    position: absolute;
    top: calc(75% + 8px);
    left: 0;
    transform: translateY(-50%);
    background-image: linear-gradient(to left, #FFFFFF, transparent)
  }
`

const TopDownLine = keyframes`
  0% {
    height: 0;
  }
  20% {
    height: 100%;
  }
  90% {
    height: 100%;
    top: 0%;
  }
  95%,
  100% {
    top: 100%;
  }
`

const BottomUpLine = keyframes`
  0% {
    height: 0;
  }
  20% {
    height: 100%;
  }
  90% {
    height: 100%;
    bottom: 0%;
  }
  95%,
  100% {
    bottom: 100%;
  }
`

const LeftRightLine = keyframes`
  0% {
    width: 0;
  }
  12% {
    width: 0;
  }
  37% {
    width: 100%;
  }
  90% {
    width: 100%;
    left: 0;
    opacity: 1;
  }
  97% {
    left: 100%;
    opacity: 0;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
`

const TopBox = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 40px 0px 0px 0px;
  background: linear-gradient(131deg, #2A6AA3 65.04%, #B02834 145.26%);
  height: 100%;
  &:before {
    animation: ${TopDownLine} 8s 1s infinite;
    width: 16px;
    height: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 60px;
    background: #F8CE46;
  }
  &:after {
    animation: ${LeftRightLine} 8s 1s infinite;
    width: 0;
    height: 16px;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: linear-gradient(to right, #F8CE46, transparent)
  }
`

const BottomBox = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0px 0px 0px 40px;
  background: linear-gradient(58deg, #B02834 76.22%, #2A6AA3 116.27%);
  height: 100%;
  &:before {
    animation: ${BottomUpLine} 8s 1s infinite;
    width: 16px;
    height: 0;
    content: '';
    position: absolute;
    bottom: 0;
    left: 60px;
    background: #FFFFFF;
  }
  &:after {
    animation: ${LeftRightLine} 8s 1s infinite;
    width: 0;
    height: 16px;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: linear-gradient(to right, #ffffff, transparent)
  }
`
