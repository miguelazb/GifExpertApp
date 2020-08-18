import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const arregloCategorias = ['One Punch Man'];

    const [categorias, setCategorias] = useState(arregloCategorias);

    // const handleAdd = () => {
    //     setCategorias([...categorias, `Categoría ${categorias.length + 1}`]);
    // }

    const valley = (n, s) => {
        let lvl = 0;
        let inValley = false;
        let count = 0;
        for (let char of s) {
            lvl += char === 'U' ? 1 : -1;
            if (lvl == 0 && inValley) {
                count++;
            }
            inValley = lvl < 0;
        }
        return count;
    }


    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ul>
                {
                    categorias.map(cat => (
                        <GifGrid
                            key={cat}
                            categoria={cat}
                        />
                    ))

                }

            </ul>

        </>

    )
};



export default GifExpertApp;