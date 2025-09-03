export function camelCase(label: string) {
  return label
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      else return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

export function lowerCase(value: string) {
  return value
    .split(" ")
    .map((word) => word.toLowerCase())
    .join(" ");
}
