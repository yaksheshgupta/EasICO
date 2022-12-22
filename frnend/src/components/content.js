import "../css/content.css";
import JsonData from '../data'
import Card from "./card"

export default function Content() {
    return (
        <div className="content" id="section3">
            <div className="grid-C">
                {JsonData.product.map(s => (
                    <Card key={s.name} {...s} />
                ))}

            </div>
        </div>
    )
}