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
            brandArr: [],
            selectedOption: '',
            products: products.discs
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.discBrand, this.state.filterPrice)
        console.log("clicked", this.handlePrice(event), this.setDiscBrand(event))

        if (this.state.selectedOption === "") {
            console.log('first')
            this.setState({
                discs: this.setDiscBrand(event),
                brandArr: this.setDiscBrand(event)
            })
        } else if (this.state.discBrand === "" && this.state.discBrand.length < 4) {
            console.log('second')
            this.setState({
                brandArr: this.handlePrice(event)
            })
        }
        else {
            console.log('third')
            this.setState({
                discs: this.handlePrice(event),
                brandArr: this.setDiscBrand(event)
            })
        }


        const data = this.state;
        console.log(data)
    }

    onChangeHandler = (e) => {
        this.setState({
            filterPrice: e.target.value,
            selectedOption: e.target.value,
        })

        console.log(e.target.value)
        const filterEle = e.target.value;
        //
        this.handlePrice(filterEle)
    }


    // Filter by Disc Brand
    setDiscBrand = (event) => {
        let discBrand = event.target.value;
        let brandArr = []

        if (discBrand === undefined) {
            discBrand = this.state.discBrand
        }

        this.state.products.map(ele => {
            if (ele.type.includes(discBrand) === true) {
                brandArr.push(ele)
            }
            return brandArr
        })
        console.log(brandArr)

        this.setState({
            discBrand: discBrand,
            brandArr: brandArr
        })

        return brandArr

    }

    // Reset page
    resetDiscs = () => {
        this.setState({
            discs: products.discs,
            discBrand: '',
            filterPrice: '',
            brandArr: [],
            selectedOption: ''
            
        })
    }

    // Filter Price
    handlePrice = (e) => {
        let brandArr = []
        brandArr = this.state.brandArr;

        if (brandArr.length < 4) {
            this.setState({ brandArr: this.state.discs })
        }
        console.log(e)
        let filteredArr = []
        let filterOut = true;

        filterOut = false
        this.setState({
            filterPrice: e
        });

        // Override bug on filterPrice state with the selectedOption state
        if (this.state.filterPrice === "low" || this.state.selectedOption === "low") {
            filteredArr = brandArr.sort((a, b) => {
                return a.price - b.price
            })

        } else if (this.state.filterPrice === "high" || this.state.selectedOption === "high") {
            filteredArr = brandArr.sort((a, b) => {
                return b.price - a.price
            })

        } else if (this.state.filterPrice === "") {
            return filteredArr = []
        }
        console.log(filteredArr)

        // }
        return filteredArr

    }

    render() {
        return (
            <div className='body'>
                <NavBar />
                <div className='content'>
                    <h1>Testing produts page</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>

                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name='filter'
                                    value="low"
                                    checked={this.state.selectedOption === "low"}
                                    onChange={this.onChangeHandler.bind(this)}
                                />
                                 Low - High
                             </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name='filter'
                                    value="high"
                                    checked={this.state.selectedOption === "high"}
                                    onChange={this.onChangeHandler.bind(this)}
                                />
                                         High - Low
                                    </label>
                        </div>

                        <br></br>
                        <label htmlFor="discType">Choose your brand: </label>
                        <select id="discType" value={this.state.discBrand} onChange={this.setDiscBrand.bind(this)}>
                            <option name='type' value=''></option>
                            <option name='type' value="innova" id="innova">Innova</option>
                            <option name='type' value="dynamic" id='dynamic'>Dynamic</option>
                            <option name='type' value="discraft" id='discraft'>Discraft</option>
                        </select>

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