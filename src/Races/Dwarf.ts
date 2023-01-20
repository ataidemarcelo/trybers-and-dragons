import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = Number();
  public static instances = Number();

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }
}