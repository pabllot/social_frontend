import styled from "styled-components";

export const Container = styled.div`
    flex: 2;
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow: scroll;
    background-color: #222;
    color: white;
    &::-webkit-scrollbar {
      display: none;
    }

    `