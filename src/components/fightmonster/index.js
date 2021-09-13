import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

import Footer from "components/footer"

import BACKGROUND_IMAGE from "resources/banner_image.png"
import MONSTER_BACKGROUND from "resources/monster_image.png"

const generateMonsters = (monsters) =>
  monsters.map((data, index) => (
    <div key={index} className="fightmonster-monster flex flex-column">
      <img src={MONSTER_BACKGROUND} alt="background" />
      <div className="flex flex-column">
        <img src={data.image} alt="monster" />
        <span>{data.title}</span>
        {data.keys.map((data, index) => (
          <div key={index} className="flex">
            {data.key}
            <span>{data.value}</span>
          </div>
        ))}
        <button>CONNECT WALLET</button>
      </div>
    </div>
  ))

const FightMonster = ({ monsters, onReload }) => (
  <div className="fightmonster flex">
    <img src={BACKGROUND_IMAGE} alt="background" />
    <div className="fightmonster-wrapper flex flex-column">
      <div className="fightmonster-title flex">
        <span>Choose a Monster</span>
        <span onClick={onReload}>
          <FontAwesomeIcon icon={faRedoAlt} />
          Reload Monster
        </span>
      </div>
      <div className="fightmonster-monsters flex">
        {generateMonsters(monsters)}
      </div>
      <Footer />
    </div>
  </div>
)

export default FightMonster
