import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'


class SlideShow extends Component {
    state = {
        items: [
            { id: 1, url: 'https://images.unsplash.com/photo-1507469964576-83ad33be38d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2599&q=80' },
            { id: 2, url: 'https://images.unsplash.com/photo-1507469118745-fef6e5a40361?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2381&q=80' },
            { id: 3, url: 'https://www.innovadiscs.com/wp-content/uploads/2015/02/innova-bags_featured.jpg' }
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <div>
                <div className='carousel-container'>
                    {/* <h1 id="title">Ace-Run Discs</h1> */}
                    <Carousel>
                        {items.map(item => <img alt='slideshow pictures' src={item.url} key={item.id}></img>)}
                    </Carousel>
                </div>
                <article>
                    <h2>
                        Welcome to Ace-Run Discs!
                     </h2>
                    <p>Here at Ace-Run, we promote popular and effective discs. Look through our selection on our product page
                    for a more personalized description. Ranging from distance drivers to low speed putters, Ace-Run Discs
                    is here to inform disc golfers on a more appealing selection of discs. We currently promote 12 discs
                    from Innova, Dyanmic Discs and Discraft. Go check out our selection and get a disc that will improve
                your game! </p>
                </article>
            </div>
        )
    }
}

export default SlideShow;