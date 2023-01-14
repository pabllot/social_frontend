import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100vw;
    }
    @media (max-width: 350px) {
      width: 100vw;
    }
`