import { useContext, useEffect, useState } from 'react';
import './my_home.css'
import Palettes from '../../my_components/my_palette/my_palettes';
import Tags from '../../my_components/my_tag/my_tags';
import Favorites from '../../my_components/my_favorite/my_favorites';
import { getTags } from '../../my_service';
import { FavoritesContext } from '../../my_context/my_favorite_context';
import { FiltersContext } from '../../my_context/my_filters_context'
import { ColorPalettesContext } from '../../my_context/my_color_palettes_context';

const Home = () => {
    const [tags, setTags] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [filters, setFilters] = useState({
        searchField: '',
        tagFilter: []
    })

    const { colorPalettes } = useContext(ColorPalettesContext)

    useEffect(() => {
        getTags()
            .then((data) => setTags(data))
            .catch((err) => console.log(err));
    }, []);

    const filteredColorPalettes = colorPalettes.filter(colorPalette => {

        //si no hay filtro por tag entonces devolver todos
        if (filters.tagFilter.length === 0) {
            return true
        }

        const verifiedTags = colorPalette.tags.filter(tag => filters.tagFilter.includes(tag))
        return verifiedTags.length === filters.tagFilter.length
    })

    const colorPaletteWithLikes = filteredColorPalettes.map(palette => {
        const foundIndex = favorites.findIndex(fav => fav.id === palette.id);

        //la paleta no esta marcada como favorita, entonces se la devuelve sin cambios
        if (foundIndex === -1) {
            return palette
        }

        return { ...palette, liked: true }
    })


    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            <FiltersContext.Provider value={{ filters, setFilters }}>
                <header>
                    <h1>Color Palette Project</h1>
                </header>
                <div className='main-container'>
                    <Tags tags={tags} />
                    <Palettes palettes={colorPaletteWithLikes} />
                    <Favorites favorites={favorites} />
                </div>
            </FiltersContext.Provider>
        </FavoritesContext.Provider>

    )
}

export default Home



