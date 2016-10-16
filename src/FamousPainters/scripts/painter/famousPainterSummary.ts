namespace Painter
{
  export class FamousPainterSummary implements Interfaces.IFamousPainterSummary
  {
    text: string;
    title: string;

    constructor(summary: Interfaces.IFamousPainterSummary)
    {
      this.text = summary.text;
      this.title = summary.title;
    }
  }
}