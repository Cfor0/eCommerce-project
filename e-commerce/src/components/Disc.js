import React from 'react'

const Disc = (props) => {
    return (
        <div className='disc-container'>
            {props.discs.map((ele, index) =>
                <div className='disc-item' key={index}>
                    <img src={ele.imgUrl} alt='Specific disc'/>
                    {ele.title}
                    <br></br>
                    {ele.price}
                    <br></br>
                    {ele.description}
                </div>
            )}
        </div>
    )
}

export default Disc;