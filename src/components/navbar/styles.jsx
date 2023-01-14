import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 50px;
    border-bottom: 1px solid #144272; //border
    position: sticky;
    top: 0;
    background-color: #0A2647; //bg
    color: whitesmoke; //textcolor
    z-index: 999;
    @media (max-width: 768px) {width: 100%}
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
export const Button = styled.button`
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;       
    background-color: #f0544f;
    border-radius: 2px;
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: white; //logo
   
`
export const Search = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #144272; //border
    border-radius: 5px;
    padding: 5px;
    @media (max-width: 768px) {
display:none    }
`
export const Input = styled.input`
    border: none;
    width: 300px;
    background-color: transparent;
    color: lightgray; //themed color

    @media (max-width: 768px) {
        width: 200px;
    }
    @media (max-width: 600px) {
        display: none;
    }
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;


`

export const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`
export const UserSpan = styled.span`
 @media (max-width: 400px) {display:none }
`