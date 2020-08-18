import React from 'react'

const GifGridItem = ({ title, url }) => {
    // const { title, img } = gif;
    // console.log(`id: ${id}, title: ${title}, `)

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img alt={ title } src={ url }/> 
            <p> { title } </p>
        </div>
    )
}

export default GifGridItem;
