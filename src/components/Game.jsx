// import { useState } from "react";
import { useEffect, useState } from "react";
import { useWordCards } from "../hooks/useWordCards";
import Card from "./Card/Card";

export default function Game() {
  const wordsPath = "../../data/a1-words.json";
  const { cards, setCards, loading } = useWordCards(wordsPath); // contains card info from the hook, incl id, type, content, matchId
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleChoice(card) {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }

  function handleResetTurn() {
    setCardOne(null);
    setCardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true);
      if (cardOne.matchId === cardTwo.matchId) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.matchId === cardOne.matchId) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        handleResetTurn();
      } else {
        setTimeout(() => {
          handleResetTurn();
        }, 2000);
      }
    }
  }, [cardOne, cardTwo]);
  console.log(cards);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-2xl font-medium mb-5">Turns taken: {turns}</p>
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-4 gap-2">
        {loading && <div>Loading...</div>}
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            content={card.content}
            type={card.type}
            handleChoice={handleChoice}
            isFlipped={card === cardOne || card === cardTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
