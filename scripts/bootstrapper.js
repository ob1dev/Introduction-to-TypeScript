var Bootstrapper = (function () {
    function Bootstrapper() {
    }
    Bootstrapper.prototype.loadRecipes = function () {
        var el = document.getElementById('PainterList');
        try {
            var painter = this.famousPainters.items
                .filter(function (item) { return item.name === el.value; })
                .reduce(function (item) {
                var rc = new Painter.FamousPainter(item);
                return rc;
            });
            this.renderer.renderPainter(painter);
        }
        catch (ex) {
            alert(ex.message);
        }
    };
    Bootstrapper.prototype.init = function () {
        var _this = this;
        var paintersSelect = document.getElementById('PainterList');
        paintersSelect.onchange = function () { return _this.loadRecipes(); };
        var painterLoader = new Painter.PainterLoader("json/famousPainters.json");
        painterLoader.load().then(function (recipeData) {
            _this.famousPainters = recipeData.recipeCategories;
            _this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
        });
    };
    return Bootstrapper;
}());
//# sourceMappingURL=bootstrapper.js.map