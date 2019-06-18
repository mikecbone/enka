import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Generate a palette that contains different levels of each colour in the starter/input palette
export default function generatePalette(starterPalette){
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  for (let level of levels){
    newPalette.colors[level] = [];
  }

  for(let colorObj of starterPalette.colors) {
    let scale = getScale(colorObj.color, 10).reverse();
    
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${colorObj.name} ${levels[i]}`,
        id: colorObj.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css("rgba")
      })
    }
  }

  return newPalette;
}

// Return range of colors from darken version - input hex colour - white
function getRange(hexColor) {
  const endColor = "#fff";
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    endColor
  ];
}

// Return x number of colours in a range based on either side of the input colour.
function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}
