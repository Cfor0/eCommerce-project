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
            discBrand: '',
            filterPrice: '',
            brandArr: []
        }
    }

    handleSubmit = (event) => {
        console.log(this.state.discBrand, this.state.filterPrice)
        event.preventDefault();
        this.setDiscBrand(event)
        this.handlePrice(event)
        const data = this.state;
        console.log(data)
    }


    // Filter by Disc Brand
    setDiscBrand = (event) => {

        const discBrand = event.target.value;

        const brandArr = []

        products.discs.map(ele => {
            if (ele.type.includes(discBrand) === true) {
                brandArr.push(ele)
            }
            return brandArr
        })


        console.log(brandArr)
        this.setState({
            // discs: brandArr,
            discBrand: discBrand,
            brandArr: brandArr
        })
    }

    // Reset page
    resetDiscs = (event) => {
        this.setState({
            discs: products.discs,
            discBrand: '',
            filterPrice: ''
        })
    }

    // Filter Price
    handlePrice = (e) => {
        this.setState({ filterPrice: e.target.value });
        if (this.state.filterPrice === "low") {
            return this.lowToHigh()
        } else if (this.state.filterPrice === "high") {
            return this.highToLow()
        }
    }
    lowToHigh = () => {
        const filteredArr = this.state.brandArr.sort((a, b) => {
            return a.price - b.price
        })

        this.setState({ discs: filteredArr })

    }

    highToLow = () => {
        const filteredArr = this.state.brandArr.sort((a, b) => {
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
                    <form onSubmit={this.handleSubmit}>

                        {/* <input type="radio" id="lowToHigh" name="sort" value="lowToHigh" onClick={this.lowToHigh} />
                        <label htmlFor="radio1">lowToHigh</label>
                        <br></br>
                        <input type="radio" id="highToLow" name="sort" value="highToLow" onClick={this.highToLow} />
                        <label htmlFor="radio2">highToLow</label> */}

                        <label htmlFor="filterPrice">Filter Price: </label>
                        <select id="filterPrice" value={this.state.filterPrice} onChange={this.handlePrice}>
                            <option value=''></option>
                            <option value="low" >lowToHigh</option>
                            <option value="high" >highToLow</option>
                        </select>

                        <br></br>
                        <label htmlFor="discType">Choose your brand: </label>
                        <select id="discType" value={this.state.discBrand} onChange={this.setDiscBrand}>
                            <option value=''></option>
                            <option value="innova" >Innova</option>
                            <option value="dynamic" >Dynamic</option>
                            <option value="discraft" >Discraft</option>
                        </select>
                        {/* <input type="radio" id="innova" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio3">innova</label>
                        <br></br>
                        <input type="radio" id="dynamic" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio4">dynamic</label>
                        <br></br>
                        <input type="radio" id="discraft" name="sort" value="discType" onClick={this.setDiscBrand} />
                        <label htmlFor="radio5">discraft</label> */}
                        <br></br>
                        <button type='submit'>Submit</button>

                    </form>

                    <button type='button' id='reset' name='reset' value='reset' onClick={this.resetDiscs}>Reset</button>
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