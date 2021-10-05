import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import mobile from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: { direction: string }): string =>
    props.direction === "left" ? "1rem" : ""};
  right: ${(props: { direction: string }): string =>
    props.direction === "right" ? "1rem" : ""};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  transition: all 1.5s ease;
  transform: translateX(
    ${(props: { slideIndex: number }): number => props.slideIndex * -100}vw
  );
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props: { bg: string }): string => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 3rem;
`;

const Title = styled.p`
  font-size: 6rem;
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 1.5rem 0;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Button = styled.button`
  margin: 1rem 0;
  padding: 0.8rem 1.2rem;
  font-size: 1.3rem;
  border: 2px solid #2c2c2c;
  background-color: transparent;
  cursor: pointer;
  color: black;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #2c2c2c;
    color: white;
  }
`;

const Slider = (): React.ReactElement => {
  let [slideIndex, setSlideIndex]: [number, Function] = useState(0);

  const handleclick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleclick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(
          (item: {
            bg: string;
            id: number;
            img: string;
            title: string;
            desc: string;
          }): React.ReactElement => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          )
        )}
      </Wrapper>
      <Arrow direction={"right"} onClick={() => handleclick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
