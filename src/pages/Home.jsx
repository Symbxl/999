import styled from "styled-components";
import HomeHeader from "../content/HomeHeader";
import DisplayServices from "../content/DisplayServices";
import Slider from "../components/Slider";
import { Form } from "react-router-dom";

const Home = () => {
  return (<>
    <HomeHeader />
    <DisplayServices />
    <Slider />
      </ >
  )
}

export default Home;

