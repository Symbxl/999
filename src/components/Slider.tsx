import styled from "styled-components";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Slider = () => {

  const Title = styled.h2`
  font-size: 20px;
  color: #ffffff;
`

  return <Article>
    <Title>Swipe Left/Right: BEFORE & AFTER</Title>
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-104-copy-2-scaled-1.jpg" />}
      itemTwo={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-92-scaled-1.jpg" />}
    />
  </Article>
}

export default Slider;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100vw;
  margin-bottom: 2rem;
`