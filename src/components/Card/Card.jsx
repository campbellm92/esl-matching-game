import { cleanDefinition } from "../../utils/cleanDefinition";
import styles from "./Card.module.css";

export default function Card({ card, content, type, handleChoice, isFlipped }) {
  function handleClick() {
    handleChoice(card);
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.cardFront}></div>
        <div
          className={`${styles.cardBack} ${
            type === "definition" ? styles.definition : styles.word
          }`}
        >
          {cleanDefinition(content)}
        </div>
      </div>
    </div>
  );
}
