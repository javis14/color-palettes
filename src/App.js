import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './my_routes/my_home/my_home';
import PaletteDisplay from './my_routes/my_palette/my_palette_display';
import { useEffect, useState } from 'react';
import { getColorPalettes } from './my_service';
import { ColorPalettesContext } from './my_context/my_color_palettes_context'

function App() {
  const [colorPalettes, setColorPalettes] = useState([]);
  useEffect(() => {
    getColorPalettes()
      .then((data) => {
        setColorPalettes(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className='App'>
      <ColorPalettesContext.Provider value={{ colorPalettes, setColorPalettes }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/palette/:id' element={<PaletteDisplay />} />
        </Routes>
      </ColorPalettesContext.Provider>
    </div>
  );
}

export default App;


