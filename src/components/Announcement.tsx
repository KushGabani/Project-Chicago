import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 500;
  padding: 0.5rem 0;
`;

const Announcement = (): React.ReactElement => {
  return <Container>Winter Sale! Flat 60% on your favorite brands!</Container>;
};

export default Announcement;
