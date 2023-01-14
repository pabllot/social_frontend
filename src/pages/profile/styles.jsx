import styled from "styled-components";

export const Container = styled.div`
    background-color: #144272;//BGSOFT
    min-height: 100vh;
`

export const ImagesContainer = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
`
export const Cover = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 200px;
`
export const ProfileContainer = styled.div`
    padding: 20px 70px;
    @media (max-width: 768px) {padding: 20px}
    @media (max-width: 350px) {padding: 10px }
`

export const UserInfo = styled.div`
    height: 180px;
    -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    border-radius: 20px;
    background-color: #0A2647;//bg
    color: whitesmoke;//TEXTCOLLOR
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media (max-width: 350px) {
        flex-direction: column;
        height: 30vh;
        padding: 20px;
        margin-top: 100px;
    }
`
export const Center = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const CenterSpan = styled.span`
    font-size: 30px;
    font-weight: 500;
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: lightgrey;//textcolorsoft
`

export const InfoSpan = styled.span`
    font-size: 12px;
`

export const Button = styled.button`
    border: none;
    background-color: #5271ff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 8px;
`