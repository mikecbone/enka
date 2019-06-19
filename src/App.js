import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPallete from './SingleColorPalette';
import seedColors from './seedColors';
import generatePalette from './colourHelpers';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPallete/>}/>
    </Switch>
  );
}

function findPalette(id){
  return seedColors.find(function(palette) {
    return palette.id === id;
  })
}

export default App;
