import "./style.scss"

import Footer from "components/footer"

import BACKGROUND_IMAGE from "resources/banner_image.png"

const MyZomb = () => (
  <div className="myzomb flex">
    <img src={BACKGROUND_IMAGE} alt="background" />
    <div className="myzomb-wrapper flex flex-column">
      <Footer />
    </div>
  </div>
)

export default MyZomb
