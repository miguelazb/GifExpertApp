import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ categoria }) => {

    const { data: gifs, loading } = useFetchGifs( categoria );


    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'> {categoria} </h3>
            { loading && <p className='animate__animated animate__flash'> Cargando... </p> }

            <div className='card-grid'>
                {gifs.map(img => {
                    return <GifGridItem key={img.id} {...img} />
                })}
            </div>
        </>
    )
} 

export default GifGrid;