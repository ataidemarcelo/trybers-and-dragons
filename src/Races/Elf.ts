import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = Number();
  public static instances = Number();

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }
}