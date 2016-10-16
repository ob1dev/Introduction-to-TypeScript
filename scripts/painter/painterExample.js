var Painter;
(function (Painter) {
    var PainterExample = (function () {
        function PainterExample(example) {
            this.name = example.name;
            this.year = example.year;
            this.type = example.type;
            this.image = example.image;
        }
        return PainterExample;
    }());
    Painter.PainterExample = PainterExample;
})(Painter || (Painter = {}));
//# sourceMappingURL=painterExample.js.map