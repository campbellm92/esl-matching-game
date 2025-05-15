// remove the markup tags in the definitions
export function cleanDefinition(text) {
  return text.replace(/\{.*?\}/g, "").trim();
}
