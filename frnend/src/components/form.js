import "../css/form.css";
import { useAccount } from 'wagmi';
export default function Connect() {
    const { address } = useAccount();
    if (address) {
        return (
            <>
                <div className="connect">
                    <div className="txt" style={{ fontSize: "3em" }}>
                        Create a new CrowdSale
                    </div>
                    <div>
                        To create a crowdsale. we first need to deploy a ERC20 Token contract.
                    </div>
                    <form style={{ marginTop: "3vh" }}>
                        <label htmlFor="Token_Name">Name of the Token</label>
                        <br />
                        <input type="text" id="Token_Name" placeholder="Token Name" />
                        <br />
                        <label htmlFor="Token_Symbol">Token Symbol</label>
                        <br />
                        <input type="text" maxLength="4" id="Token_Symbol" placeholder="Token Symbol" />
                        <br />
                        <label htmlFor="Token_Quantity">Quantity of token to minted</label>
                        <br />
                        <input type="number" min="0" inputMode="numeric" id="Token_Quantity" placeholder="Token Quantity" />
                        <br />
                        <label htmlFor="Token_Quantity">Owner's address</label>
                        <div style={{ fontSize: "small", color: "red" }}>
                            All the tokens will be minted to Owner's account
                        </div>
                        <input type="text" id="Token_Quantity" placeholder="Token Quantity" />
                        <br />
                        <button>Submit</button>
                        <div style={{ fontSize: "small", color: "red" }}>
                            This will deploy your ERC20 token
                        </div>
                        {/* print the token address after mined */}
                        <br />
                        <label htmlFor="Enter_Rate">Enter Rate-(at which you want to sell your ICO)</label>
                        <br />
                        <input type="number" min="0" max="10" inputMode="numeric" id="Enter_Rate" placeholder="Enter Rate" />
                        <br />
                        <label htmlFor="treasury_account">Treasury Account</label>
                        <div style={{ fontSize: "small", color: "red" }}> All the crypto will be sent to this acoount</div>
                        <input type="text" id="treasury_account" placeholder="treasury account" />
                        <br />
                    </form>
                    <br />
                    <button>Submit</button>
                </div>
            </>
        )
    } else {
        return (
            <div className="connect">
                <div className="txt" style={{ fontSize: "3em" }}>
                    Please Connect to a Wallet to Proceed!!
                </div>
            </div>
        )
    }
}