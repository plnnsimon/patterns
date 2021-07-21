class Player {
  level: number
  protection: boolean
  equipment: Array<string>
  name: string
  power: number
  constructor() {
      this.protection = false
      this.level = 0
      this.equipment = []
      this.name = ''
      this.power = 0
  }
  getInfo(): string {
  return `Player with ${this.level} level`
  }
  protect(): boolean {
    if (this.protection === true) {
        return true
    } else {
        return false
    }
}
}


class SimplePlayer extends Player {
  constructor(public name: string) {
      super()
      this.level = 1
      this.protection = false
      this.equipment = []
  }

  kick(): number {
      console.log("Attack!!!")
      return this.power + 1
  }

}

class MiddlePlayer extends Player {
  constructor(public name: string) {
      super()
      this.level = 5
      this.equipment = []
  }

  kick(): number {
      console.log("Attack!!!")
      return this.power + 5
  }

}

class PlayerEquipment extends Player {
  decoratedPlayer: Player
  constructor(player: Player) {
      super()
      this.decoratedPlayer = player
  }
  
}

class Weapon extends PlayerEquipment {
  constructor(player: Player) {
      super(player)
      this.decoratedPlayer = player
      this.decoratedPlayer.level += 1
      this.decoratedPlayer.equipment.push("Weapon")
      this.decoratedPlayer.power += 3
  }

}

class Armor extends PlayerEquipment {
  constructor(player: Player) {
      super(player)
      this.decoratedPlayer = player
      this.decoratedPlayer.protection = true
      this.decoratedPlayer.level += 1
      this.decoratedPlayer.equipment.push("Armor")
  }
}

// в песочнице typescript playground "timer: number" - работает. B VSCode работает если "timer: any", иначе выдает ошибку. 

class Poison extends PlayerEquipment {
  timer: any
  constructor(player: Player) {
      super(player)
      this.decoratedPlayer = player
      this.decoratedPlayer.level += 5
      console.log("Power on!")
      this.timer = setTimeout(function () {
          player.level -= 5
          console.log("Power off!")
          console.log(`Player ${player.name} has level ${player.level}`)
      }, 3000)
  }
}

const simplePlayer = new SimplePlayer("SP")

const weapon = new Weapon(simplePlayer)

const armor = new Armor(simplePlayer)

const poison = new Poison(simplePlayer)

console.log(simplePlayer.getInfo())
