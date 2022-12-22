import Connect from "./components/form";
import Content from "./components/content";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Enter from "./components/enter";
import { SendTransaction } from "./components/test";
import Caution from "./components/caution";
export const first = () => {
    return (<>
        <Navbar />
        <Landing/>
        <Content />
        <Enter />
        <Footer />
        <Caution/>
    </>
    )
}
export const form = () => {
    return (<>
        <Navbar />
        <Connect />
        <Footer />
        <Caution/>
    </>
    )
}
export const test=()=>{
    return(
        <SendTransaction/>
    )
}
