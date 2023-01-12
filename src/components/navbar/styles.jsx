import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 50px;
    border-bottom: 1px solid #444; //border
    position: sticky;
    top: 0;
    background-color: #222; //bg
    color: whitesmoke; //textcolor
    z-index: 999;
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
    border: 1px solid #444; //border
    border-radius: 5px;
    padding: 5px;
`
export const Input = styled.input`
    border: none;
    width: 500px;
    background-color: transparent;
    color: lightgray; //themed color

    @media (max-width: 768px) {
        width: 200px;
    }
    @media (max-width: 350px) {
        display: none;
    }
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 350px) { display: none }
`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;

    @media (max-width: 768px) { display: none }
`

export const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`
