import styled from "styled-components";

export const Container = styled.div``

export const Write = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin: 20px 0px;      
`
export const Button = styled.button`
        border: none;
        background-color: #5271ff;
        color: white;
        padding: 10px;
        cursor: pointer;
        border-radius: 3px;      
`

export const Input = styled.input`
        flex:5;
        padding: 10px;
        border: 1px solid black;
        background-color: transparent;
        color: #fff7f7;
`


export const Comment = styled.div`
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
`

export const Image = styled.img`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
`
export const Info = styled.div`
        flex:5;
        display: flex;
        gap: 3px;
        align-items: flex-start;
  `
export const Date = styled.span`
        flex:1;
        align-self: center;
        color: gray;
        font-size: 12px;
      
`
export const DeleteButton = styled.button`
      border: none;
      padding: 5px;
      color: white;
      cursor: pointer;       
      background-color: #f0544f;
      border-radius: 2px;
      max-height: 30px;
`