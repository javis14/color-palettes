import Palette from "./my_palette";
import './my_palettes.css'

const Palettes = ({ palettes }) => {
  return (
    <div className='grid'>
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </div>
  );
}

export default Palettes
