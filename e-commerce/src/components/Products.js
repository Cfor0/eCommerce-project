import { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Disc from './Disc'
import products from '../products.json'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discs: products.discs,
            discBrand: null,
            discPrice: 0,
            sort: 0
        }
    }


    // Filter by Disc Brand
    setDiscBrand = (event) => {
        const discBrand = event.target.id;

        const brandArr = []

        products.discs.map(ele => {
            if (ele.type.includes(discBrand) === true) {
                brandArr.push(ele)
            }
            return brandArr
        })


        console.log(brandArr)
        this.setState({ discs: brandArr })
    }

    // Reset page
    resetDiscs = (event) => {
        this.setState({ discs: products.discs })
    }

    // Filter Price
    lowToHigh = () => {
        const filteredArr = products.discs.sort((a, b) => {
            return a.price - b.price
        })

        this.setState({ discs: filteredArr })
       
    }

    highToLow = () => {
        const filteredArr = products.discs.sort((a, b) => {
            return b.price - a.price
        })

        this.setState({ discs: filteredArr })
    }

    //

    render() {
        return (
            <div className='body'>
                <NavBar />
                <div className='content'>
                    <h1>Testing produts page</h1>
                    <form >

                        <input type="radio" id="lowToHigh" name="sort" value="lowToHigh" onClick={this.lowToHigh} />
                        <label htmlFor="radio1">lowToHigh</label>
                        <br></br>
                        <input type="radio" id="highToLow" name="sort" value="highToLow" onClick={this.highToLow} />
                        <label htmlFor="radio2">highToLow</label>

                        <br></br>
                        <input type="radio" id="innova" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio3">innova</label>
                        <br></br>
                        <input type="radio" id="dynamic" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio4">dynamic</label>
                        <br></br>
                        <input type="radio" id="discraft" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio5">discraft</label>

                    </form>

                    <button type='submit' id='reset' name='reset' value='reset' onClick={this.resetDiscs}>Reset</button>
                    <div className='disc-container'>
                        {this.state.discs.map((ele, index) => {
                            return (
                                <Disc disc={ele} key={index} />
                            )
                        })}
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Products