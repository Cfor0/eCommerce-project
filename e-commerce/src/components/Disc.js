import React from 'react'

const Disc = (props) => {

    const { disc, index } = props
    // const disc = props.disc;
    // const key = props.key;
    return (
        // <div className='disc-container'>
        // {props.discs.map((ele, index) =>
        <div className='disc-item' key={index}>
            <img src={disc.imgUrl} alt='Specific disc' />
            <div className='disc-info'>
                <div className='disc-title'>
                    {disc.title}
                </div>
                <br></br>
                <div className='disc-price'>
                   ${disc.price}
                </div>
                <br></br>
                <div className='disc-description'>
                    {disc.description}
                </div>
            </div>
        </div>
        // )}
        // </div>
    )
}

export default Disc;