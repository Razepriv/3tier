import React from 'react';
import PitchDeck10 from '../components/PitchDeck10';
import { Slide6, Slide7, Slide8, Slide9, Slide10 } from '../components/PitchDeck10Part2';

const PitchDeck = () => {
  return (
    <div className="scroll-smooth">
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }
        
        section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>
      <PitchDeck10 />
    </div>
  );
};

export default PitchDeck;