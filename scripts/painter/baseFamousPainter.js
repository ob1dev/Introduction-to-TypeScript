var Painter;
(function (Painter) {
    var BaseFamousPainter = (function () {
        function BaseFamousPainter(name, style, examples) {
            this.name = name;
            this.style = style;
            this.examples = examples;
        }
        return BaseFamousPainter;
    }());
    Painter.BaseFamousPainter = BaseFamousPainter;
})(Painter || (Painter = {}));
//# sourceMappingURL=baseFamousPainter.js.map