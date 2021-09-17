import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

import Footer from "components/footer"

import BACKGROUND_IMAGE from "resources/banner_image.png"

const Marketplace = ({ forSale = 12345, tab = "marketplace" }) => (
  <div className="marketplace flex">
    <img src={BACKGROUND_IMAGE} alt="background" />
    <div className="marketplace-wrapper flex flex-column">
      <div className="marketplace-wrapper-title flex">
        <span>Results Found: {forSale} Zombies for Sale</span>
        <div className="marketplace-wrapper-input flex">
          <input type="text" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="marketplace-wrapper-tabs">
        <button>Marketplace</button>
        <button>Direct Sale</button>
      </div>
      {tab === "marketplace" ? (
        <div className="marketplace-wrapper-marketplace">
          <div className="marketplace-wrapper-marketplace-types flex">
            <button>All Zomb</button>
            <button>Price Sort</button>
            <button>Rare/Level 2</button>
            <button>Rare/Level 3</button>
            <button>Rare/Level 4</button>
            <button>Rare/Level 5</button>
            <button>Rare/Level 6</button>
          </div>
        </div>
      ) : (
        <div className="marketplace-wrapper-direct"></div>
      )}
      <Footer />
    </div>
  </div>
)

export default Marketplace
