import styled from "styled-components";

export const Container = styled.div`
    flex: 2;
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow: scroll;
    background-color: #0A2647;
    color: white;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 350px) {
        display: none;
    }

    `