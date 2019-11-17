export const getSquad = () => {
  return fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
  )
    .then(res => res.json())
    .then(res => {
      const members = res.members;
      // set default quantity(0) for all members of the squad.
      members.forEach(m => {
        m.quantity = 0;
      });
      // add more heroes ( 5 more )
      res.members = addHeroes([...members]);
      return res;
    });
};

export function addHeroes(members) {
  const first = {
    name: "Gohan",
    age: 131,
    quantity: 0,
    secretIdentity: "Joseph Song",
    powers: [
      "Fast invisible fireball",
      "Explosive Wave",
      "Super god Fist",
      "Meteor Smash"
    ]
  };
  const second = {
    name: "Videl",
    age: 128,
    quantity: 0,
    secretIdentity: "Cassidy Williams",
    powers: [
      "Kamehameha",
      "A murderous smile",
      "Energy Shield",
      "Kaio-ken Attack",
      "Solar Flare"
    ]
  };
  const third = {
    name: "Goten",
    age: 127,
    quantity: 0,
    secretIdentity: "Randy Song",
    powers: ["Double Axe Handle", "HeadShot", "DragonThrow", "Crazy Fist"]
  };
  const forth = {
    name: "Cheelai",
    age: 126,
    quantity: 0,
    secretIdentity: "Cami Williams",
    powers: [
      "Twin Dragon Shot",
      "Invisible Eye Blast",
      "Spirit Shot",
      "Power Stance"
    ]
  };
  const fifth = {
    name: "Bulma",
    age: 120,
    quantity: 0,
    secretIdentity: "Narae Song",
    powers: [
      "Saiyan Power",
      "Fusion Dance",
      "Grudgeless Strike",
      "Endless Tickle"
    ]
  };
  return [...members, first, second, third, forth, fifth];
}
