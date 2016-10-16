class Renderer
{
  constructor(public recipeCategoriesSummary: Painter.FamousPainters<Interfaces.IFamousPainterSummary>)
  {
    if (recipeCategoriesSummary)
    {
      this.renderCategories(recipeCategoriesSummary);
    }
    else
    {
      this.renderError();
    }
  }

  renderCategories(recipeCategoriesSummary: Painter.FamousPainters<Interfaces.IFamousPainterSummary>)
  {
    var painterSelect = document.getElementById('PainterList');

    recipeCategoriesSummary.items.forEach((category) =>
    {
      var opt = document.createElement('option');
      opt.setAttribute('name', category.title);
      opt.innerHTML = category.text;
      painterSelect.appendChild(opt);
    });
  }

  renderPainter(painter: Interfaces.IFamousPainter)
  {
    var styleElement = (<HTMLSelectElement>document.getElementById('style'));
    styleElement.innerHTML = painter.style;

    var birthdateElement = (<HTMLSelectElement>document.getElementById('birthdate'));
    birthdateElement.innerHTML = painter.birthdate;

    var birthplaceElement = (<HTMLSelectElement>document.getElementById('birthplace'));
    birthplaceElement.innerHTML = painter.birthplace;

    var nationalityElement = (<HTMLSelectElement>document.getElementById('nationality'));
    nationalityElement.innerHTML = painter.nationality;

    this.renderExamples(painter);

  }

  renderExamples(category: Interfaces.IFamousPainter)
  {
    //Update examples
    var examples = (<HTMLSelectElement>document.getElementById('examples'));
    examples.value = '';

    var html = '<ol>';
    for (var i = 0, len = category.examples.length; i < len; i++)
    {
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
  }

  renderError()
  {
    var examples = (<HTMLSelectElement>document.getElementById('examples'));
    examples.value = 'Unable to load data!';
  }
}