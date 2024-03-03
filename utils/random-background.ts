export default (): string => {
  const images: string[] = ["desert", "plants"];
  return images[Math.floor(Math.random() * images.length)];
};
