import styled from 'styled-components';

export const InputConteiner = styled.div`
  margin-bottom: 3.2rem;
  padding-left: 0.8rem;
  label {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: var(--dark-grayish-cyan);
  }

    .input {
      margin-top: 0.7rem;
      border: none;
      display: block;
      width: 82.93333333333334vw;
      height: 4.7rem;
      border-radius: 0.5rem;
      padding-right: 1.7rem;
      padding-bottom: 0.2rem;

      background: inherit;
      text-align: right;
      background-color: var(--light-grayish-cyan) ;
      background-repeat: no-repeat;
      background-image: url(${(props) => props.image});
      background-position: 1.9rem 1.5rem;

      font-family: 'Space Mono';
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 3.6rem;
      text-align: right;

      color: var(--very-dark-cyan);


    }

    .input:focus{
      outline: 2px solid var(--strong-cyan);
    }

  }

  @media (min-width: 900px) {
    margin-top: 1.3rem;
    margin-bottom: 4rem;
    .input{
      width: 37.9rem;
      height: 4.7rem;
    }
  }
`;
