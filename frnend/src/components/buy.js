import { useState } from "react";
import "../css/buy.css";
export default function Buy(s) {
    const onChange = e => {
        setName(e.target.value)
    }  
    const [name, setName] = useState(null);
    return (
        <>
            <div className="grid-buy">
                <div className="grid-buy-container">
                    <div style={{fontSize:"xx-large",textAlign:"center"}}>
                    {s.name}
                    </div>
                    <div className="buy-grid-inside">
               
                        <img src={s.id} alt="BigCo Inc. logo" />
                   
                        {/* <div className="grid-inside-buy-container"> */}
                        {/* </div> */}
                        <div className="grid-inside-buy-container">
                            Name= {s.name}
                            <br/>
                            Discription= {s.disc}
                            <br/>
                            Symbol= {s.symbol}
                            <br/>
                            <form>
                                <input min="0" max="10" inputMode="numeric" onChange={onChange} type="number" placeholder="How much u want to invest" style={{width:"10vw"}}/>
                            </form>
                            <div style={{fontSize:"medium"}}>
                            Investing - {name} Eth
                            </div>
                            <button >Invest Now</button>
                        </div>
                    </div>
                ** Currently Site is in development stage, This option not available**
                </div>
            </div>
        </>
    )
}