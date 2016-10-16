var Renderer = (function () {
    function Renderer(recipeCategoriesSummary) {
        this.recipeCategoriesSummary = recipeCategoriesSummary;
        if (recipeCategoriesSummary) {
            this.renderCategories(recipeCategoriesSummary);
        }
        else {
            this.renderError();
        }
    }
    Renderer.prototype.renderCategories = function (recipeCategoriesSummary) {
        var painterSelect = document.getElementById('PainterList');
        recipeCategoriesSummary.items.forEach(function (category) {
            var opt = document.createElement('option');
            opt.setAttribute('name', category.title);
            opt.innerHTML = category.text;
            painterSelect.appendChild(opt);
        });
    };
    Renderer.prototype.renderPainter = function (painter) {
        var styleElement = document.getElementById('style');
        styleElement.innerHTML = painter.style;
        var birthdateElement = document.getElementById('birthdate');
        birthdateElement.innerHTML = painter.birthdate;
        var birthplaceElement = document.getElementById('birthplace');
        birthplaceElement.innerHTML = painter.birthplace;
        var nationalityElement = document.getElementById('nationality');
        nationalityElement.innerHTML = painter.nationality;
        this.renderExamples(painter);
    };
    Renderer.prototype.renderExamples = function (category) {
        //Update examples
        var examples = document.getElementById('examples');
        examples.value = '';
        var html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) {
            var example = category.examples[i];
            html += '<li>' +
                '<h4>' + example.name + '</h4>' +
                '<strong>Year Created: </strong>' + example.year +
                '<br /><strong>Type: </strong>' + example.type +
                '<br /><strong>Image: </strong><br />' +
                '<img width="200" src="' + example.image + '" />' +
                '</li>';
        }
        examples.innerHTML = html + '</ol>';
    };
    Renderer.prototype.renderError = function () {
        var examples = document.getElementById('examples');
        examples.value = 'Unable to load data!';
    };
    return Renderer;
}());
//# sourceMappingURL=renderer.js.map