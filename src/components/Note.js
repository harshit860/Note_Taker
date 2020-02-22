import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ware_house: [],
            each_note: ''
        }
    }

    increaseheight() {

        var get = document.getElementById('write')
        get.style.transition = "height 0.5s linear"
        get.style.transition = "margin-top 0.2s linear"
        get.style.height = "200px"
        get.style.marginTop = "30px"
        get.style.border = "solid 1 grey"
    }

    save() {
        this.setState({
            ware_house: [...this.state.ware_house, this.state.each_note],

        })
    }


    writenotes(event) {
        this.setState({
            each_note: event.target.value
        })

    }
    render() {

        let allnotes = this.state.ware_house.map(elem => {
            return <div>
                <div className="col-xl-12 shadow-sm p-3" style={{ marginRight: "-100px" }}>
                    {elem}
                </div>
            </div>
        })

        return (
            <div>
                <Navbar />
                <div className="col-xl-12 row mt-5" >

                    <span className="col-xl-1">

                    </span>
                    <div className="col-xl-5 ">
                        <textarea className="col-xl-12 rounded border border-white shadow-sm" id="write" style={{ height: "90px" }} onChange={(e) => this.writenotes(e)}  onFocus={() => this.increaseheight()} />
                        <button className="btn shadow-sm text-secondary " onClick={() => this.save()}>Feed Note</button> 
                    </div>
                    <div className="col-xl-6">
                        {allnotes}
                    </div>

                </div>
            </div>
        )
    }
}
