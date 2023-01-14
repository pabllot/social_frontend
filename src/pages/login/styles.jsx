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
    background-color: white;
    border-radius: 10px;
    min-height: 600px;
    overflow: hidden;
`
export const Left = styled.div`
    flex: 1;
    background: url("https://images.unsplash.com/photo-1546405386-e8097f926ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80")
        center;
    background-size: cover;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: white;
`

export const H1 = styled.h1`
    font-size: 100px;
    line-height: 100px;
    opacity: 0.5;
`

export const Span = styled.span`
    font-size: 14px;
`
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

export const FormH1 = styled.h1`
    color: #0A2647;
`

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

export const FormButton = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    background-color: #0A2647;
    color: white;
    font-weight: bold;
    cursor: pointer;
`
export const Paragraph = styled.p``