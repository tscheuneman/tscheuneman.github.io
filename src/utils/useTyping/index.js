import { useState, useEffect } from 'react';

const punctuation = ['.', '?', '!'];

export const useTyping = (words, speedMin, speedMax, waitFor = true) => {
    const [typed, setTyped] = useState({ word: '', lastLetter: '', cnt: 0 });
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let timeout;
        if(typed.cnt < words.length && waitFor) {
          let useMin = speedMin;
          let useMax = speedMax;
          const currentLetter = words[typed.cnt];
          if(punctuation.includes(typed.lastLetter)) {
            useMin += 150;
            useMax += 150;
          }
          if(currentLetter === '') {
            useMin -= 50;
            useMax -= 50;
          }
          const timeOutTime = Math.floor(Math.random() * (useMin - useMax + 1) + useMin)
          timeout = setTimeout(() => { 
            const newWord = `${typed.word}${currentLetter}`;
            setTyped({ word: newWord, lastLetter: currentLetter, cnt: typed.cnt + 1 });
          }, timeOutTime);
        } else {
            setIsDone(true);
        }
    
    
        return () => {
          clearTimeout(timeout);
        }
      }, [typed, words, waitFor]);

      return [typed.word, isDone];
}
