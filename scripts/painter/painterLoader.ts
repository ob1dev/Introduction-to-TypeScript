/// <reference path="../typings/jquery.d.ts" />

namespace Painter
{
  export class PainterLoader
  {
    constructor(public url: string)
    {
    }

    load(): JQueryPromise<Interfaces.IPainterData>
    {
      return $.getJSON(this.url).then((data: any) =>
      {
        var recipeData = this.mapData(data);
        return recipeData;
      });
    }

    mapData(data: any): Interfaces.IPainterData
    {
      if (data)
      {
        let painters: any[] = data.famousPainters;
        var famousPainters = new FamousPainters<Interfaces.IFamousPainter>();
        var famousPaintersSummary = new FamousPainters<Interfaces.IFamousPainterSummary>();

        painters.forEach((painter: any) =>
        {
          let famousPainter = new FamousPainter(
            {
              name: painter.name,
              style: painter.style,
              birthdate: painter.birthdate,
              birthplace: painter.birthplace,
              nationality: painter.nationality,
              examples: this.getExamples(painter)
            });

          famousPainters.items.push(famousPainter);

          let famousPainterSummary = new FamousPainterSummary(
            {
              text: painter.name,
              title: painter.style
            });

          famousPaintersSummary.items.push(famousPainterSummary);
        });

        return {
          recipeCategories: famousPainters,
          recipeCategoriesSummary: famousPaintersSummary
        };
      }
      else
      {
        return null;
      }
    }

    getExamples(painter: any): Interfaces.IExample[]
    {
      return painter.examples.map((example: any) =>
      {
        return new PainterExample({
          name: example.name,
          year: example.year,
          type: example.type,
          image: example.image
        });
      });
    }
  }
}