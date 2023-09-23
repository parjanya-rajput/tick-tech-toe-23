import MetaMask from "../components/metamask";
import { NavBar } from "../components/NavBar";

export const Donate = () => {
    return (
        <div>
            <NavBar />
            <div className="blur" />
            <div className="metamask-page-cont"
                style={{
                    backgroundImage: 'url("https://i.imgur.com/4Myw9Vu.png")',
                    backgroundSize: "cover",
                }}
            >
                <MetaMask />
            </div>
        </div>
    )
}