import { useWordCards } from "../hooks/useWordCards";
import Card from "./Card";

export default function Game() {
  const wordsPath = "../../data/a1-words.json";
  const { cards, loading } = useWordCards(wordsPath);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-4 gap-2">
        {loading && <div>Loading...</div>}
        {cards.map((card) => (
          <Card key={card.id} content={card.content} type={card.type} />
        ))}
      </div>
    </div>
  );
}
