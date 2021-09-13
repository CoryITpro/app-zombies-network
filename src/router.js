import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AudioPlayer from "react-h5-audio-player"

import { Routes } from "configurations/index"
import ZOMBIE_SOUND from "resources/sounds/sound.mp3"

import Header from "components/header"
import StarterPack from "pages/starterpack"
import Marketplace from "pages/marketplace"
import MyZomb from "pages/myzomb"
import FightMonster from "pages/fightmonster"

const AppRouter = () => (
  <Router>
    <AudioPlayer
      style={{ display: "none" }}
      autoPlay
      loop
      src={ZOMBIE_SOUND}
      volume={0.6}
    />
    <Header />
    <Switch>
      <Route exact path={"/"} render={() => <StarterPack />} />
      <Route path={Routes.STARTER_PACK} component={StarterPack} />
      <Route path={Routes.MARKETPLACE} component={Marketplace} />
      <Route path={Routes.MY_ZOMB} component={MyZomb} />
      <Route path={Routes.FIGHT_MONSTER} component={FightMonster} />
    </Switch>
  </Router>
)

export default AppRouter
