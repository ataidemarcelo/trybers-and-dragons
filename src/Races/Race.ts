export default abstract class Race {
  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
  ) {}

  abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }
}
