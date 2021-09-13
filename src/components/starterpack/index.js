import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

import Footer from "components/footer"

import BACKGROUND_IMAGE from "resources/banner_image.png"
import TOMB_IMAGE from "resources/tomb_stone.png"
import RANDOM_IMAGE from "resources/random/random_(1).png"

const StarterPack = () => (
  <div className="starterpack flex">
    <img src={BACKGROUND_IMAGE} alt="background" />
    <div className="starterpack-wrapper flex flex-column">
      <div className="starterpack-title">Are you feeling lucky today?</div>
      <div className="starterpack-subtitle">
        Everything you need is here. Let's build your own squad!
      </div>
      <div className="starterpack-buy">
        <img src={TOMB_IMAGE} alt="tomb" />
        <div className="starterpack-buy-wrap flex flex-column">
          <div className="starterpack-buy-wrap-image flex">
            <img src={RANDOM_IMAGE} alt="random" />
          </div>
          <span className="starterpack-buy-wrap-title">Random Zombie</span>
          <span className="starterpack-buy-wrap-price">PRICE: 10,000</span>
          <button>Connect Wallet</button>
          <Link
            to={{ pathname: "https://pancakeswap.finance" }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Buy ZOMB
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

export default StarterPack
