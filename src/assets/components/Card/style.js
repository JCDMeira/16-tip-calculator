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

  @media (min-width: 900px) {
    width: 92.3rem;
    height: 48.2rem;
    min-height: 48.2rem;

    border-radius: 2.5rem;

    display: flex;
    flex-direction: row;
    align-items: initial;

    padding: 2.6rem 3.4rem 3.3rem 4.2rem;
  }
`;
