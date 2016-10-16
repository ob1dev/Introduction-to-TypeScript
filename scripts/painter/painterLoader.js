/// <reference path="../typings/jquery.d.ts" />
var Painter;
(function (Painter) {
    var PainterLoader = (function () {
        function PainterLoader(url) {
            this.url = url;
        }
        PainterLoader.prototype.load = function () {
            var _this = this;
            return $.getJSON(this.url).then(function (data) {
                var recipeData = _this.mapData(data);
                return recipeData;
            });
        };
        PainterLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var painters = data.famousPainters;
                var famousPainters = new Painter.FamousPainters();
                var famousPaintersSummary = new Painter.FamousPainters();
                painters.forEach(function (painter) {
                    var famousPainter = new Painter.FamousPainter({
                        name: painter.name,
                        style: painter.style,
                        birthdate: painter.birthdate,
                        birthplace: painter.birthplace,
                        nationality: painter.nationality,
                        examples: _this.getExamples(painter)
                    });
                    famousPainters.items.push(famousPainter);
                    var famousPainterSummary = new Painter.FamousPainterSummary({
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
            else {
                return null;
            }
        };
        PainterLoader.prototype.getExamples = function (painter) {
            return painter.examples.map(function (example) {
                return new Painter.PainterExample({
                    name: example.name,
                    year: example.year,
                    type: example.type,
                    image: example.image
                });
            });
        };
        return PainterLoader;
    }());
    Painter.PainterLoader = PainterLoader;
})(Painter || (Painter = {}));
//# sourceMappingURL=painterLoader.js.map