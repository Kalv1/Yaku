export default (): string => {
  const images: string[] = [
    "desert.jpg",
    "plants.jpg",
    "sky.jpeg",
    "beach.jpg",
  ];
  return images[Math.floor(Math.random() * images.length)];
};
