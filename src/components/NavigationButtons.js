import React from 'react';
import './NavigationButtons.css';

const NavigationButtons = (props) => {
  const {
    showNext,
    showBack,
    nextDisabled,
    onNext,
    onBack,
    onFinish
  } = props;

  return (
    <div className="NavigationButtons">
      {showBack && <button
        onClick={onBack}
        className="Button LeftAlignedButton">Back
      </button>}
      {showNext && <button
        onClick={onNext}
        className="Button RightAlignedButton"
        disabled={nextDisabled}>Next
      </button>}
      {!showNext && <button
        onClick={onFinish}
        className="Button RightAlignedButton"
        disabled={nextDisabled}>Finish
      </button>}
    </div>
  );
}

export default NavigationButtons;
