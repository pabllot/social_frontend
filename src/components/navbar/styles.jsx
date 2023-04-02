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
  background-color: #0a2647; //bg
  color: whitesmoke; //textcolor
  z-index: 999;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Button = styled.button`
  border: none;
  padding: 5px;
  color: white;
  cursor: pointer;
  background-color: #e5635f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: white;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserSpan = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #144272; //border
  padding: 5px;

  > svg {
    @media (max-width: 768px) {
      width: 15px;
    }
  }
  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 300px;
  background-color: transparent;
  color: lightgray; //themed color

  @media (max-width: 768px) {
    width: 150px;
    font-size: 13px;
  }
`;

export const SearchModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4.4rem;
  left: 15rem;
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    top: 4.4rem;
  }
`;

export const Filtered = styled.div`
  width: 15rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background: #3271b4;
  font-size: 1.3rem;
  color: white;
  border-bottom: 1px solid #0a2647;
  @media (max-width: 768px) {
    width: 15rem;
    height: 2.5rem;
    font-size: 0.9rem;
  }
`;
