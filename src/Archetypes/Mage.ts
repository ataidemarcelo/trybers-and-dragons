import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  public static instances = Number();

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  set energyType(value: EnergyType) {
    this._energyType = value;
  }
}
