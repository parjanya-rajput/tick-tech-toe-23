import MetaMask from "../components/Metamask"
import { NavBar } from "../components/NavBar"

export const Donate = () => {
    return (
        <div>
            <NavBar />
            <div className="metamask-page-cont">
                <MetaMask />
            </div>
        </div>
    )
}