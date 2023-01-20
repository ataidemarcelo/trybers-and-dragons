import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _special = Number(); 
  private readonly _cost = Number();

  constructor(private readonly _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  abstract get energyType(): EnergyType;

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  public get name(): string {
    return this._name;
  }
  
  public get special(): number {
    return this._special;
  }
  
  public get cost(): number {
    return this._cost;
  }
}
