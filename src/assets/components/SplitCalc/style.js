import styled from 'styled-components';

export const SplitConteiner = styled.div`
  width: 87.2vw;
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
    width: 74.13333333333333vw;
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

  @media (min-width: 900px) {
    width: 41.4rem;
    height: 41.7rem;
    padding: 0.9rem 2.9rem 4rem 4.1rem;
    margin-left: 4.7rem;

    .amount {
      margin-top: 4.7rem;

    .valueAmount {
      font-weight: bold;
      font-size: 4.6rem;
      line-height: 4.7rem;

      color: var(--strong-cyan);

      margin-right: 1.2rem;
    }
    :nth-child(2){
      margin-top: 4.9rem;
    }
  }

    button{
      width: 33.3rem;
      height: 4.8rem;
      margin-top: 10.8rem;
    }
`;
