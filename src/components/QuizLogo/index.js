/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// import './style.scss';

function Logo({ className }) {
  const router = useRouter();
  return (
    <div className={className} width="135" height="67" viewBox="0 0 135 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <h1
        onClick={() => router.push('/')}
        className="glitch"
      >
        LanzaQuiz
      </h1>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  h1 {
    text-align: center;
    transform: rotate(-15deg);
    margin-bottom: 40px;
    animation: blur 1000ms ease-out infinite
  }
  cursor: pointer;
  @keyframes blur {
  from {
    text-shadow:0px 0px 10px #d5d2,
      0px 0px 10px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 25px #d5d2,
      0px 0px 50px #d5d2,
      0px 0px 50px #d5d2,
      0px 0px 50px #ff43,
      0px 0px 150px #ff43,
      0px 10px 100px #ff43,
      0px 10px 100px #ff43,
      0px 10px 100px #ff43,
      0px 10px 100px #ff43,
      0px -10px 100px #ff43,
      0px -10px 100px #ff43;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
