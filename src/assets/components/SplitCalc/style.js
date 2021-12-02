import styled from 'styled-components';

export const SplitConteiner = styled.div`
  width: 32.7rem;
  height: 25.7rem;
  border-radius: 1.5rem;
  padding: 4rem 1.9rem 0rem 2.4rem;
  background-color: var(--very-dark-cyan);

  .amount {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.1rem;

    .textAmount {
      p {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin-bottom: 0.1rem;

        color: var(--white);
      }
      span {
      }
      font-weight: bold;
      font-size: 1.3rem;
      line-height: 1.9rem;

      color: var(--dark-grayish-cyan);
    }
    .valueAmount {
      font-weight: bold;
      font-size: 3.2rem;
      line-height: 4.7rem;

      color: var(--strong-cyan);
    }
  }
  button {
    width: 27.8rem;
    height: 4.8rem;
    margin-top: 1rem;
    cursor: pointer;

    background: var(--strong-cyan);
    border-radius: 0.5rem;
    border: none;

    font-weight: bold;
    font-size: 2rem;
    line-height: 3rem;

    color: var(--very-dark-cyan);

    :hover {
      background: var(--very-light-cyan);
    }
    :disabled {
      cursor: not-allowed;
      filter: opacity(0.2);
    }
  }
`;
