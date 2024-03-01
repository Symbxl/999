import banner from "../assets/banner.mp4"
import { styled } from "styled-components"

const HomeHeader = () => {
  return (
      <Container>
      <Video src={banner} autoPlay loop muted />
      </Container>

  );
};

export default HomeHeader;

const Container = styled.div`
  height: 105vh;
  width: 100vw;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`
