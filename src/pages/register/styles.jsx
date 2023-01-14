import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color:#0A2647;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    background-color: white;
    border-radius: 10px;
    min-height: 600px;
    overflow: hidden;
`

export const Left = styled.div`
    flex: 1;
    background: url("https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxmcmllbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
        center;
    background-size: cover;
    padding: 50px;
    display: flex;
    flex-direction: column;    
    gap: 30px;
    color: white;
`
export const H1Left = styled.h1`
    font-size: 100px;
    line-height: 100px;
    opacity: 0.6;
`

export const Paragraph = styled.p``

export const Span = styled.span`font-size: 14px;`

export const Button = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    background-color: white;
    color: #0A2647;
    font-weight: bold;
    cursor: pointer;
`

export const Right = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`

export const H1 = styled.h1`color: #0A2647;`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 20px 10px;
`
export const ButtonForm = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    background-color: #0A2647;
    color: white;
    font-weight: bold;
    cursor: pointer;
`
