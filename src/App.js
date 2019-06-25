import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPallete from './SingleColorPalette';
import seedColors from './seedColors';
import generatePalette from './colourHelpers';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
    <Route render={({location}) => 
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Switch location={location}>
            <Route 
              exact path="/" 
              render={(routeProps) => <Page><PaletteList palettes={palettes} removePalette={removePalette} {...routeProps}/></Page>}
            />
            <Route
              exact path="/palette/new"
              render={(routeProps) => <Page><NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps}/></Page>}
            />
            <Route 
              exact path="/palette/:id" 
              render={(routeProps) => <Page><Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/></Page>}
            />
            <Route 
              exact path="/palette/:paletteId/:colorId" 
              render={(routeProps) => <Page><SingleColorPallete colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/></Page>}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    }/>
  );
}

export default App;
