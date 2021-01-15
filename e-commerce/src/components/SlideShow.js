import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'


class SlideShow extends Component {
    state = {
        items: [
            { id: 1, url: 'https://images.unsplash.com/photo-1507469964576-83ad33be38d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2599&q=80' },
            { id: 2, url: 'https://images.unsplash.com/photo-1507469118745-fef6e5a40361?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2381&q=80' },
            { id: 3, url: 'https://images.unsplash.com/photo-1575378969004-967d6cfc4114?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80' }
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <div className='carousel-container'>
                <h1 id="title">Ace-Run Discs</h1>
                <Carousel>
                    {items.map(item => <img src={item.url} key={item.id}></img>)}
                </Carousel>
            </div>
        )
    }
}

export default SlideShow;