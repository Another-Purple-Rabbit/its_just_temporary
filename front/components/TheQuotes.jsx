import React, { memo, useCallback, useRef, useState } from 'react'
import { StartQuote } from './Quotes/StartQuote';
import { UploadQuote } from './Quotes/UploadQuote';
import { LoadingQuote } from './Quotes/LoadingQuote';
import { PanelQuote } from './Quotes/PanelQuote';

const quotesScreens = [
  StartQuote,
  UploadQuote,
  LoadingQuote,
  PanelQuote,
];

export const TheQuotes = memo(() => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleInc = (value = currentScreen) => {
    setCurrentScreen((prevState) => value || (prevState + 1));
  }

  return (
    <section className="container mx-auto h-full p-8">
    <h1 className="text-3xl font-bold">Quotes</h1>
      {React.createElement(quotesScreens[currentScreen], { handleInc })}
    </section>
  )
})
