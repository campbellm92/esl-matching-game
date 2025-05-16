// import { useState } from "react";
import { useEffect, useState } from "react";
import { useWordCards } from "../hooks/useWordCards";
import Card from "./Card";

export default function Game() {
  const wordsPath = "../../data/a1-words.json";
  const { cards, loading } = useWordCards(wordsPath); // contains card info from the hook, incl id, type, content, matchId
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  function handleChoice(card) {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }

  function handleResetTurn() {
    setCardOne(null);
    setCardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }

  useEffect(() => {
    if (cardOne && cardTwo) {
      if (cardOne.matchId === cardTwo.matchId) {
        console.log(
          `Card one: ${cardOne.id}, ${cardOne.content}, ${cardOne.type}, ${cardOne.matchId} \n Card two:  ${cardTwo.id}, ${cardTwo.content}, ${cardTwo.type}, ${cardTwo.matchId}`
        );
        console.log("Matching cards");
        handleResetTurn();
      } else {
        console.log(
          `Card one: ${cardOne.id}, ${cardOne.content}, ${cardOne.type}, ${cardOne.matchId} \n Card two:  ${cardTwo.id}, ${cardTwo.content}, ${cardTwo.type}, ${cardTwo.matchId}`
        );
        console.log("Not a match");
        handleResetTurn();
      }
    }
  }, [cardOne, cardTwo]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-4 gap-2">
        {loading && <div>Loading...</div>}
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            content={card.content}
            type={card.type}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}
