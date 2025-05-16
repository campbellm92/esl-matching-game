import { useEffect, useState } from "react";
import { shuffleWordsArray } from "../utils/shuffleWordsArray";
import { fetchWordDefinition } from "../utils/fetchWordDefinition";

export function useWordCards(wordListPath) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MAX_PAIRS = 8;
    async function loadAndPrepareCards() {
      const wordResponse = await fetch(wordListPath);
      const allWords = await wordResponse.json();
      const shuffledWords = shuffleWordsArray(allWords);

      const validPairs = [];
      let index = 0;
      let matchId = 0;

      while (validPairs.length < MAX_PAIRS && index < shuffledWords.length) {
        const word = shuffledWords[index];
        const definition = await fetchWordDefinition(word);

        if (
          definition &&
          definition !== "No definition found." &&
          definition.trim() !== ""
        ) {
          validPairs.push([
            {
              id: `${matchId}-word`,
              type: "word",
              content: word,
              matchId: `${matchId}`,
            },
            {
              id: `${matchId}-def`,
              type: "definition",
              content: definition,
              matchId: `${matchId}`,
            },
          ]);
          matchId++;
        }

        index++;
      }

      const flatPairsArray = validPairs.flat();
      setCards(shuffleWordsArray(flatPairsArray));
      setIsLoading(false);
    }
    loadAndPrepareCards();
  }, [wordListPath]);
  //pass this down to Game.jsx
  return { cards, setCards, isLoading };
}
