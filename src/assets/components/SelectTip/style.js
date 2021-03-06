import styled from 'styled-components';

export const TipConteiner = styled.div`
  width: 82.66666666666667vw;
  height: 21.6rem;
  margin-left: 0.8rem;

  label {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;
    display: block;
    margin-bottom: 1.6rem;

    color: var(--dark-grayish-cyan);
  }

  .allTips{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem 1.8rem;
  }

    .input {
      width: 38.93333333333333vw;
      height: 4.8rem;
      padding-right: 1.7rem;
      padding-bottom: 0.1rem;

      background: var(--light-grayish-cyan);
      border-radius: 0.5rem;
      border: none;

      font-size: 2.2rem;
      line-height: 3.3rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      font-family: 'Space Mono';
      text-align: right;

      color: var(--very-dark-cyan);
    }

    .input::placeholder{

      color: var(--very-dark-cyan);
    }

    .input:focus{
      outline: 1px solid var(--strong-cyan);
    }
  }

  @media (min-width: 900px) {
    width: 37.9rem;
    height: 16.1rem;
    margin-left: 0.7rem;
    .allTips{
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.7rem 1.4rem;
  }

    .input{
      width: 11.7rem;
    }
  }
`;
