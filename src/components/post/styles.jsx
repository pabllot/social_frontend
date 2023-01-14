import styled from "styled-components";

export const Container = styled.div`
    -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    border-radius: 20px;
    background-color: #0A2647; //bg
    color: white; //textcolor
`

export const SubContainer = styled.div`
    padding: 20px;
`
export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const UserInfo = styled.div`
    display: flex;
    gap: 20px;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`

export const NameSpan = styled.span`
    font-weight: 500;
`
export const DateSpan = styled.span`
    font-size: 12px;
`

export const Content = styled.div`
    margin: 20px 0px;
`

export const ContentImg = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 20px;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
`