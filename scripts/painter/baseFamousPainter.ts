namespace Painter
{
  export class BaseFamousPainter implements Interfaces.IBaseFamousPainter
  {   
    name: string;
    style: string;
    examples: Interfaces.IExample[];

    constructor(name: string, style: string, examples: Interfaces.IExample[])
    {
      this.name = name;
      this.style = style;
      this.examples = examples;
    }
  }
}