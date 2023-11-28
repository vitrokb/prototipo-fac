'use client';
import Image from 'next/image';
import { letters } from './utils/letters-data';
import { useState } from 'react';

export default function Home() {
  const [clickedText, setClickedText] = useState('');
  const [textToShow, setTextToShow] = useState('');

  function letterClick(value: string) {
    console.log('Letra: ', value);
    setClickedText((previousState) => previousState + value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-6 text-4xl">Protótipo de FAC :D</h1>

      <div className="content-wrapper flex">
        <div className="letters-wrapper">
          {letters.map((letter) => (
            <button
              className="letter"
              onClick={() => letterClick(letter.value)}
              key={letter.source}
            >
              <Image
                src={letter.source}
                height={letter.height}
                width={letter.width}
                alt={letter.alt}
                className="m-2"
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <textarea
            id="textarea"
            onChange={() => console.log('chamei')}
            className="written-text"
            value={textToShow}
          />
          <div>
            <button
              className="clear-button"
              onClick={() => {
                setTextToShow(clickedText);
                document.getElementById('textarea')?.focus();
              }}
            >
              Traduzir
            </button>
            <button
              className="clear-button"
              onClick={() => {
                setTextToShow('');
                setClickedText('');
                document.getElementById('textarea')?.focus();
              }}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
