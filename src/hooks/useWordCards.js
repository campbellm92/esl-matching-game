import { useEffect, useState } from "react";
import { shuffleWordsArray } from "../utils/shuffleWordsArray";
import { fetchWordDefinition } from "../utils/fetchWordDefinition";

export function useWordCards(wordListPath) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadAndPrepareCards() {
      const wordResponse = await fetch(wordListPath);
      let words = await wordResponse.json();
      words = shuffleWordsArray(words).slice(0, 8);

      const cardPairs = await Promise.all(
        words.map(async (word, index) => {
          const definition = await fetchWordDefinition(word);
          return [
            {
              id: `${index}-word`,
              type: "word",
              content: word,
              matchId: `${index}`,
            },
            {
              id: `${index}-def`,
              type: "definition",
              content: definition,
              matchId: `${index}`,
            },
          ];
        })
      );
      const flattenedCardsArray = cardPairs.flat();
      setCards(shuffleWordsArray(flattenedCardsArray));
      setIsLoading(false);
    }
    loadAndPrepareCards();
  }, [wordListPath]);
  return { cards, isLoading };
}
