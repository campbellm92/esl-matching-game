import { cleanDefinition } from "../utils/cleanDefinition";

export default function Card({ content, type }) {
  let styles =
    "flex justify-center items-center text-center text-slate-100 bg-slate-800 size-52 m-2 px-2 rounded-md cursor-pointer";
  if (type === "word") {
    styles += " text-3xl";
  } else if (type === "definition") {
    styles += " text-md";
  }

  return (
    <>
      <div className={styles}>{cleanDefinition(content)}</div>
    </>
  );
}
