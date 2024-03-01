import styled from "styled-components";
import HomeHeader from "../components/HomeHeader";
import DisplayServices from "../content/DisplayServices";
import Slider from "../components/Slider";

const Home = () => {
  return (<Container>
    <HomeHeader />
    <Slider />
    <DisplayServices />
      </Container >
  )
}

export default Home;


const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: auto;
  width: 100vw;
`