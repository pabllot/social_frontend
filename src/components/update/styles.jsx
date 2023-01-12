import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const Wrapper = styled.div`
    margin: auto;
    width: 40%;
    height: 70%;
    background-color: #444;//bg
    padding: 50px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 20px;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    position: relative;
    @media (max-width: 350px) {width: 100%; height: 100%}

`
export const H1 = styled.h1`
    color: lightgrey;
    @media (max-width: 350px) {font-size: 20px }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Files = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: gray;
    font-size: 14px;
`

export const ImageContainer = styled.div`position: relative;`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`

export const Icon = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
`

export const Input = styled.input`
    padding: 5px;
    border: none;
    border-bottom: 1px solid #222; //border
    color: gray;
    background-color: transparent;
`

export const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    color: white;
    background-color: #5271ff;
`

export const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background-color: #f0544f;
    padding: 5px;
    cursor: pointer;
    color: white;
`

export const Span = styled.span``