import styled from '@emotion/styled';
import './progress.css';

const Container = styled.div`
  .circle-wrap {
    margin: 150px auto;
    width: 150px;
    height: 150px;
    background: #fefcff;
    border-radius: 50%;
    border: 1px solid #cdcbd0;
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .circle-wrap .inside-circle {
    width: 122px;
    height: 122px;
    border-radius: 50%;
    background: #d2eaf1;
    line-height: 120px;
    text-align: center;
    margin-top: 14px;
    margin-left: 14px;
    color: #1e51dc;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }

  /* color animation */

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #227ded;
  }

  .mask.full,
  .circle .fill {
    // animation: fillAnimation ease-in-out 3s;
    animation-name: fillAnimation;
    animation-duration: 4s;
    animation-timing-function: ease-in;
    transform: rotate(165deg);
  }

  @keyframes fillAnimation {
    0% {
      background-color: red;
      transform: rotate(0deg);
    }
    100% {
      background-color: #227ded;
      transform: rotate(165deg);
    }
  }
`;

export const CustomProgress = () => {
  return (
    <Container>
      <div className='circle-wrap'>
        <div className='circle'>
          <div className='mask full'>
            <div className='fill'></div>
          </div>
          <div className='mask half'>
            <div className='fill'></div>
          </div>
          <div className='inside-circle'> 75% </div>
        </div>
      </div>
    </Container>
  );
};
