import { Nifty50Card } from "./nifty50Slide/Nifty50Card"
import { Nifty50Slide } from "./nifty50Slide/Nifty50Slide"



export const Nifty50 = () => {
    return (
        <>
            <div className="mt-4">
                <Nifty50Slide />
            </div>
            <div className="mt-4">
                <Nifty50Card />
            </div>
        </>
    )
}
