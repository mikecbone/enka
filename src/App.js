import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPallete from './SingleColorPalette';
import seedColors from './seedColors';
import generatePalette from './colourHelpers';
import NewPaletteForm from './NewPaletteForm';
import { Route, Switch } from 'react-router-dom';


function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors)

  function findPalette(id){
    return palettes.find(function(palette) {
      return palette.id === id;
    })
  }
  
  function savePalette(newPalette) {
    setPalettes([...palettes, newPalette]);
  }

  function removePalette(id){
    setPalettes(palettes.filter(palette => palette.id !== id))
  }

  React.useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes])

  return (
    <Switch>
      <Route 
        exact path="/" 
        render={(routeProps) => <PaletteList palettes={palettes} removePalette={removePalette} {...routeProps}/>}
      />
      <Route
        exact path="/palette/new"
        render={(routeProps) => <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps}/>}
      />
      <Route 
        exact path="/palette/:id" 
        render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}
      />
      <Route 
        exact path="/palette/:paletteId/:colorId" 
        render={(routeProps) => <SingleColorPallete colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>}
      />
    </Switch>
  );
}

export default App;
