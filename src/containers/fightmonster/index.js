import FightMonsterComponent from "components/fightmonster"

import IMAGE from "resources/random/random_(2).png"

const FightMonster = () => {
  const onReloadHandler = () => {}

  const monsters = [
    {
      image: IMAGE,
      title: "Cow Hat Zombie",
      keys: [
        { key: "Level:", value: "01" },
        { key: "Win Rate:", value: "80%" },
        { key: "Reward Est:", value: "0.00 - 12.45" },
        { key: "Exp Estimate", value: "2.00 - 3.00" },
      ],
    },
    {
      image: IMAGE,
      title: "Cow Hat Zombie",
      keys: [
        { key: "Level:", value: "01" },
        { key: "Win Rate:", value: "80%" },
        { key: "Reward Est:", value: "0.00 - 12.45" },
        { key: "Exp Estimate", value: "2.00 - 3.00" },
      ],
    },
    {
      image: IMAGE,
      title: "Cow Hat Zombie",
      keys: [
        { key: "Level:", value: "01" },
        { key: "Win Rate:", value: "80%" },
        { key: "Reward Est:", value: "0.00 - 12.45" },
        { key: "Exp Estimate", value: "2.00 - 3.00" },
      ],
    },
    {
      image: IMAGE,
      title: "Cow Hat Zombie",
      keys: [
        { key: "Level:", value: "01" },
        { key: "Win Rate:", value: "80%" },
        { key: "Reward Est:", value: "0.00 - 12.45" },
        { key: "Exp Estimate", value: "2.00 - 3.00" },
      ],
    },
    {
      image: IMAGE,
      title: "Cow Hat Zombie",
      keys: [
        { key: "Level:", value: "01" },
        { key: "Win Rate:", value: "80%" },
        { key: "Reward Est:", value: "0.00 - 12.45" },
        { key: "Exp Estimate", value: "2.00 - 3.00" },
      ],
    },
  ]

  return (
    <FightMonsterComponent monsters={monsters} onReload={onReloadHandler} />
  )
}

export default FightMonster
