namespace Painter
{
  export class PainterExample implements Interfaces.IExample
  {
    name: string;
    year: string;
    type: string;
    image: string;

    constructor(example: Interfaces.IExample)
    {
      this.name = example.name;
      this.year = example.year;
      this.type = example.type;
      this.image = example.image;
    }
  }
}