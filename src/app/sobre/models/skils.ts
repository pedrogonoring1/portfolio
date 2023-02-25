export class Skil {
  public Nome: string;
  public NivelHabilidade: string;

  constructor(params: Partial<Skil>) {
    this.Nome = params.Nome!;
    this.NivelHabilidade = params.NivelHabilidade!;
  }
}
