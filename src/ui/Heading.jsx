import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 45em) {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media (max-width: 45em) {
        font-size: 1.5rem;
      }

      @media (max-width: 38em) {
        font-size: 1.1rem;
      }
    `}
    
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 45em) {
        font-size: 1.3rem;
      }
    `}

    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      @media (max-width: 45em) {
        font-size: 2rem;
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;
