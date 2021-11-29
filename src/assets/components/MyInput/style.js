import styled from 'styled-components';

export const InputConteiner = styled.div`
  h3 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: var(--dark-grayish-cyan);
  }
  .myInput {
    width: 31.1rem;
    height: 4.7rem;
    padding-left: 1.8rem;

    background: var(--light-grayish-cyan);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: normal;
      font-size: 2.2rem;
      line-height: 3.3rem;

      color: var(--dark-grayish-cyan);
    }

    input {
      border: none;
      height: 4.7rem;
      background: inherit;
      text-align: right;
    }
    input:focus {
      box-shadow: none;
      decoration: none;
    }
  }
`;
