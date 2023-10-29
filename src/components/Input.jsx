import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #f4f4f1;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    transition: all 0.4s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.77);
    backdrop-filter: blur(12rem);
  }
  &::placeholder {
    color: #e3e3e3;
    font-weight: 100;
    font-size: 1rem;
  }
`;
