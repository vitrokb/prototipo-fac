'use client';
import Image from 'next/image';
import { letters } from './utils/letters-data';
import { useState } from 'react';

export default function Home() {
  const [clickedText, setClickedText] = useState('');

  function letterClick(value: string) {
    setClickedText((previousState) => previousState + value);
    document.getElementById('textarea')?.focus();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-6 text-4xl">Protótipo de FAC :D</h1>

      <div className="content-wrapper flex">
        <div className="letters-wrapper">
          {letters.map((letter) => (
            <button onClick={() => letterClick(letter.value)} key={letter.source}>
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
            value={clickedText}
          />
          <button
            className="clear-button"
            onClick={() => {
              setClickedText('');
              document.getElementById('textarea')?.focus();
            }}
          >
            Limpar
          </button>
        </div>
      </div>
    </main>
  );
}
