interface Player {
  level: number
  power: number
  getInfo(): string 
  
  simpleKick(): number 
  middleKick(): number 
}


class SimplePlayer implements Player {
  level = 1
  power = 1
  getInfo(): string {
    return `Simple player with ${this.level} level and with ${this.power} power points`
  }
  simpleKick(): number {
   return this.power + 1
  }

  middleKick(): number {
    return this.power + 3
  }
}

class MiddlePlayer implements Player {
  level = 5
  power = 5
  getInfo(): string {
    return `Middle player with ${this.level} level and with ${this.power} power points`
  }
  simpleKick(): number {
    return this.power + 3
   }
 
   middleKick(): number {
     return this.power + 5
   }

}

class PlayerEquipment implements Player {
  protected decoratedPlayer: Player
  public level: number
  public power: number
  constructor(player: Player) {
    this.decoratedPlayer = player
  }
  getInfo(): string {
    return this.decoratedPlayer.getInfo()
  }
  simpleKick(): number {
    return this.decoratedPlayer.simpleKick()
  }
  middleKick(): number {
    return this.decoratedPlayer.middleKick()
  }
  
}

class SimpleWeapon extends PlayerEquipment {
  getInfo(): string {
    return this.decoratedPlayer.getInfo() + ` with simple weapon`
  }
  simpleKick(): number {
    return super.simpleKick() + 1
  }

  middleKick(): number {
    return super.middleKick() + 3
  }
}

class MiddleWeapon extends PlayerEquipment {
  getInfo(): string {
    return this.decoratedPlayer.getInfo() + ` with middle weapon`
  }
  simpleKick(): number {
    return super.simpleKick() + 3
  }

  middleKick(): number {
    return super.middleKick() + 5
  }
}
  
let simplePlayer = new SimplePlayer()
simplePlayer = new SimpleWeapon(simplePlayer)

let middlePlayer = new MiddlePlayer()
middlePlayer = new MiddleWeapon(middlePlayer)
 

console.log(simplePlayer.getInfo())
console.log(middlePlayer.getInfo())
console.log(middlePlayer.middleKick())
console.log(simplePlayer.middleKick())
