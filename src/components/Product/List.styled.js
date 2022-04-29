import styled from "styled-components";

export const Section = styled.section``;

export const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;

  & > h2,
  h3 {
    text-align: center;
  }
  @media only screen and (min-width: 576px) {
    padding: 2rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 3rem 2rem;
`;