export function captitalizeFirstLetter(name) {
  if (name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return name;
}
