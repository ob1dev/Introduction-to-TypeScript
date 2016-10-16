var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Painter;
(function (Painter) {
    var FamousPainter = (function (_super) {
        __extends(FamousPainter, _super);
        function FamousPainter(famousPainter) {
            _super.call(this, famousPainter.name, famousPainter.style, famousPainter.examples);
            this.birthdate = famousPainter.birthdate;
            this.birthplace = famousPainter.birthplace;
            this.nationality = famousPainter.nationality;
        }
        return FamousPainter;
    }(Painter.BaseFamousPainter));
    Painter.FamousPainter = FamousPainter;
})(Painter || (Painter = {}));
//# sourceMappingURL=famousPainter.js.map