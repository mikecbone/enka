import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colourHelpers';
import { Route, Switch } from 'react-router-dom';
import { palette } from '@material-ui/system';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>TEST</h1>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
    </Switch>
  );
}

function findPalette(id){
  return seedColors.find(function(palette) {
    return palette.id === id;
  })
}

export default App;
