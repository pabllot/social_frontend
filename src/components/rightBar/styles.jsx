import styled from "styled-components";

export const Container = styled.div`
    flex: 3;
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow: scroll;
    background-color: #144272; //bgsoft

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

export const SubContainer = styled.div`
    padding: 20px;
`

export const Item = styled.div`
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    padding: 20px;
    margin-bottom: 20px;
    background-color: #0A2647; //bg
`
export const Span = styled.span`
    color: white;
`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const UsernameSpan = styled.span`
    font-weight: 500;
    color: whitesmoke; //textcolor
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;
    background-color: #5271ff;
    border-radius: 2px;
`