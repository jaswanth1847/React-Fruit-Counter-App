
import {Component} from "react"
import "./index.css"
class FruitCounter extends Component{
    state = {mangoCount:0, bananaCount:0}
    // 
    onMangoIncrement=()=>{
        
        this.setState((prevState)=>({
            mangoCount : prevState.mangoCount + 1
        }))
    }
    //  
    onBananaCount = () =>{
    
        this.setState((prevState)=>({
            bananaCount:prevState.bananaCount + 1
        }))
    }

    render(){
        const {mangoCount, bananaCount} = this.state
        return(
            <div className="main-bg-cont">
                <div className="bg-cont">
                    <p>Bob ate {mangoCount} mangoes {bananaCount} Bananas</p>
                    <div className="imgs">
                        <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
                        <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
                    </div>
                    <div>
                        <button onClick={this.onMangoIncrement}>Eat Mango</button>
                        <button onClick={this.onBananaCount}>Eat Banana</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default FruitCounter