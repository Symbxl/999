import banner from "../assets/banner.mp4"
import { styled } from "styled-components"

const HomeHeader = () => {
  return (
      <Container>
      <Video src={banner} autoPlay muted />
      </Container>
  );
};

export default HomeHeader;

const Container = styled.div`

`

const Video = styled.video`
  width: 100%;
  height: 100%;
`
