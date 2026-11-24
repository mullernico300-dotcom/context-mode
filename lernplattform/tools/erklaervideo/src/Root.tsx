import React from 'react';
import { Composition } from 'remotion';
import { Erklaervideo, framesVon } from './Video';
import drehbuch from './daten/aktuell.json';

const FPS = 30;

export const Root: React.FC = () => (
  <Composition
    id="Erklaervideo"
    component={Erklaervideo}
    durationInFrames={framesVon(drehbuch, FPS).reduce((a: number, b: number) => a + b, 0)}
    fps={FPS}
    width={1920}
    height={1080}
    defaultProps={{ drehbuch }}
  />
);
