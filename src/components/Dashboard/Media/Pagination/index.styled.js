import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  li {
    padding: unset;
    margin: unset;

    overflow: hidden;
    border-radius: var(--radius);
    box-shadow: 0 4px 8px var(--shadow);
  }

  button {
    cursor: pointer;
    width: 32px;
    line-height: 32px;
    background-color: var(--white);
    border-radius: var(--radius);

    :hover:not(.active) {
      box-shadow: 0 0 0 1px var(--pink) inset;
      span {
        color: var(--pink);
      }
    }

    &.active {
      background-color: var(--pink);
      span {
        color: var(--white);
      }
    }

    span {
      line-height: 20px;
      vertical-align: middle;
    }
  }
`;
