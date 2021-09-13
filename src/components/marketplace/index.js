import "./style.scss"

import Footer from "components/footer"

import BACKGROUND_IMAGE from "resources/banner_image.png"

const Marketplace = () => (
  <div className="marketplace flex">
    <img src={BACKGROUND_IMAGE} alt="background" />
    <div className="marketplace-wrapper flex flex-column">
      <Footer />
    </div>
  </div>
)

export default Marketplace
