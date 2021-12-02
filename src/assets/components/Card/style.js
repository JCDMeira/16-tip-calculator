import styled from 'styled-components';

export const CardConteiner = styled.div`
  width: 100%;
  min-height: 78.9rem;
  height: 85.6vh;

  background: var(--white);
  border-radius: 25px 25px 0px 0px;

  margin-top: 0.4rem;
  padding: 3.1rem 2.4rem;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
