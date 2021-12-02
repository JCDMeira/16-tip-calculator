import styled from 'styled-components';

export const ButtonConteiner = styled.button`
  width: 14.6rem;
  height: 4.8rem;
  cursor: pointer;

  background: ${(props) =>
    props.isActive ? 'var(--strong-cyan)' : 'var(--very-dark-cyan)'};
  border-radius: 0.5rem;
  border: none;

  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-family: 'Space Mono';
  color: var(--white);

  :hover {
    background: var(--strong-cyan);
    filter: opacity(0.8);
  }
`;
