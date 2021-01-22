import React from 'react'

const Disc = (props) => {
    
    const {disc, index} = props
    // const disc = props.disc;
    // const key = props.key;
    return (
        // <div className='disc-container'>
            // {props.discs.map((ele, index) =>
                <div className='disc-item' key={index}>
                    <img src={disc.imgUrl} alt='Specific disc' />
                    {disc.title}
                    <br></br>
                    {disc.price}
                    <br></br>
                    {disc.description}
                </div>
            // )}
        // </div>
    )
}

export default Disc;