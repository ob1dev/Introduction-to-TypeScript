namespace Painter
{
  export class FamousPainter extends BaseFamousPainter implements Interfaces.IFamousPainter
  {
    birthdate: string;
    birthplace: string;
    nationality: string;

    constructor(famousPainter: Interfaces.IFamousPainter)
    {
      super(famousPainter.name, famousPainter.style, famousPainter.examples);

      this.birthdate = famousPainter.birthdate;
      this.birthplace = famousPainter.birthplace;
      this.nationality = famousPainter.nationality;
    }
  }
}