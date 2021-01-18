import { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";


class Products extends Component {
    render() {
        return (
            <div className='body'>
                <NavBar />
                <div className='content'>
                    <h1>Testing produts page</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products