import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background-color: #276123;
  color: white;
  padding: 8% 5%;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Button = styled(Link)`
  color: #C9DF8A;
  text-decoration: none;
  border: 2px solid #C9DF8A;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem 5%;
  transition: background-color 0.3s;
  &:hover {
    background-color: #C9DF8A;
    color: black;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;
