import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ColorPalettesContext } from '../../my_context/my_color_palettes_context';
import './my_palette_display.css';

const PaletteDisplay = () => {
    const { id } = useParams();
    const { colorPalettes } = useContext(ColorPalettesContext);
    const [palette] = colorPalettes.filter(
        (palette) => palette.id === Number(id)
    );

    return (
        <div className='palette-display-container'>
            <div className='palette-display-card'>
                <div className='palette-data'>
                    <span>ID: {palette.id}</span>
                    <span>Nombre: {palette.name}</span>
                    <span>Tags: {palette.tags.join(' - ')}</span>
                </div>
                <div className='palette-colors'>
                    {palette.colors.map((color) => {
                        return (
                            <div
                                key={color}
                                className='color'
                                style={{ backgroundColor: color }}
                            >
                                <span>{color}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link className='btn-back' to='/'>
                Volver al Inicio
            </Link>
        </div>

    )
}

export default PaletteDisplay;


