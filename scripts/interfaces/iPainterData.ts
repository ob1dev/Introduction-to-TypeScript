namespace Interfaces
{
  export interface IPainterData
  {
    recipeCategories?: Painter.FamousPainters<Painter.FamousPainter>;
    recipeCategoriesSummary?: Painter.FamousPainters<IFamousPainterSummary>;
  }
}