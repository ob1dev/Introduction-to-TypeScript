class Bootstrapper
{
  renderer: Renderer;

  famousPainters: Painter.FamousPainters<Interfaces.IFamousPainter>;

  loadRecipes()
  {
    var el = (<HTMLSelectElement>document.getElementById('PainterList'));
    try
    {
      let painter = this.famousPainters.items
        .filter(item => item.name === el.value)
        .reduce(item =>
        {
          var rc = new Painter.FamousPainter(item);
          return rc;
        });
      this.renderer.renderPainter(painter);
    }
    catch (ex)
    {
      alert(ex.message)
    }
  }

  init()
  {
    let paintersSelect = (<HTMLSelectElement>document.getElementById('PainterList'));
    paintersSelect.onchange = () => this.loadRecipes();

    let painterLoader = new Painter.PainterLoader("json/famousPainters.json");

    painterLoader.load().then((recipeData: Interfaces.IPainterData) =>
    {
      this.famousPainters = recipeData.recipeCategories;
      this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
    });
  }
}