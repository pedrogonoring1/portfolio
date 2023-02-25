export class Project {
  public Nome: string;
  public UrlImage: string;
  public UrlProject: string;
  public Alt: string;

  constructor(params: Partial<Project>) {
    this.Nome = params.Nome!;
    this.UrlImage = params.UrlImage!;
    this.UrlProject = params.UrlProject!;
    this.Alt = params.Alt!;
  }
}
