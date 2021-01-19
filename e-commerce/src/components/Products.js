import { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Disc from './Disc'
import products from '../products.json'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discs: products.discs
        }
    }
    
    render() {
        console.log(products.discs)
        return (
            <div className='body'>
                <NavBar />
                <div className='content'>
                    <h1>Testing produts page</h1>
                    <Disc discs = {this.state.discs}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products