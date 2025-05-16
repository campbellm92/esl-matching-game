import { cleanDefinition } from "../utils/cleanDefinition";

export default function Card({ card, content, type, handleChoice, isFlipped }) {
  // "flipped" -> custom class for css animation
  let styles =
    "flex justify-center items-center text-center text-slate-100 bg-slate-800 size-52 m-2 px-2 rounded-md cursor-pointer";
  if (type === "word") {
    styles += " text-3xl";
  } else if (type === "definition") {
    styles += " text-md";
  }

  function handleClick() {
    handleChoice(card);
  }

  return (
    <>
      {/* <div
        className={`${styles} ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        {isFlipped ? cleanDefinition(content) : null}
      </div> */}
      <div className={styles} onClick={handleClick}>
        {cleanDefinition(content)}
      </div>
    </>
  );
}
