export async function fetchWordDefinition(word) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = "https://dictionaryapi.com/api/v3/references/learners/json/";
  try {
    const response = await fetch(`${URL}${word}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Could not find definition for this word.");
    }
    const data = await response.json();
    const firstDefinition =
      data[0]?.def?.[0]?.sseq?.[0]?.[0]?.[1]?.dt?.[0]?.[1];
    return firstDefinition || "No definition found.";
  } catch (error) {
    console.log(error);
  }
}
