import styled from "styled-components";

export const Container = styled.div`
    -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
    border-radius: 20px;
    background-color: themed("bg");
    color: themed("textColor");
    margin-bottom: 20px;
`

export const SubContainer = styled.div`
    padding: 20px;
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 3;
`
export const ImageLeft = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
export const Input = styled.input`
    border: none;
    outline: none;
    padding: 20px 10px;
    background-color: transparent;
    width: 60%;
    color: whitesmoke;//textcolor
`

export const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

export const File = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0px;
`

export const Hr = styled.hr`
    margin: 20px 0px;
    border: none;
    height: 0.5px;
    background-color: #222;//border
`

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BottomLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const BottomImg = styled.img`
    height: 20px;
`

export const Span = styled.span`
    font-size: 12px;
    color: gray;
`

export const BottomRight = styled.div``

export const Button = styled.button`
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;
    background-color: #5271ff;
    border-radius: 3px;
`