interface IATC {
  registerFlight(flight: Flight): void
  registerRunway(runway: Runway): void
  setAvailabilityStatus(status: boolean): void
  isAvailable(): boolean
}

class ATC implements IATC {
  private runway: Runway
  private flight: Flight
  available: boolean
  registerFlight(flight: Flight): void {
    this.flight = flight
  }
  registerRunway(runway: Runway): void {
    this.runway = runway
  }
  setAvailabilityStatus(status: boolean): void {
    this.available = status
  }
  isAvailable(): boolean {
    return this.available
  }

}

interface ICommand {
  land(): void
}

class Flight implements ICommand {
  private atcMediator: IATC
  constructor(atcMediator: IATC) {
    this.atcMediator = atcMediator
  }

  land(): void {
    if (this.atcMediator.isAvailable()) {
      console.log("Landed successfully");
      this.atcMediator.setAvailabilityStatus(false)
    } else {
      console.log('Waiting for runway');
    }
  }
  readyToLand(): void {
    console.log("Landing initiated");
  }
  parked(): void {
    console.log("Flight is parked");
    this.atcMediator.setAvailabilityStatus(true)
  } 
}

class Runway implements ICommand {
  private atcMediator: IATC
  constructor(atcMediator: IATC) {
    this.atcMediator = atcMediator
  }

  land(): void {
    console.log("Runway is available for landing");
    this.atcMediator.setAvailabilityStatus(true)
  }
}

const atcMediator = new ATC()
const runway = new Runway(atcMediator)
const flight = new Flight(atcMediator)
const flight2 = new Flight(atcMediator)

atcMediator.registerFlight(flight)
atcMediator.registerRunway(runway)

flight.readyToLand()
runway.land()
flight.land()

flight2.land()

flight.parked()

flight2.land()