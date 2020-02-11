function btnDetails(value){
  var titulo = "";
  var srcImg = "";
  var contenido = "<table class='tbale table-bordered'><tbody><thead><tr><th>#</th><th>Descripción</th><tr></thead>";
  switch (value) {
    case 'bolsaNegra':
      titulo = 'Bolsa Negra';
      contenido += "<tr>"+
        "<td>B NEG 100*160</td>"+
        "<td>B NEG 40*60</td>"+
        "<td>B NEG 50*70</td>"+
        "<td>B NEG 60*90</td>"+
        "<td>B NEG 80*120</td>"+
        "<td>B NEG 90*120</td>"+
      "</tr>";
    break;
    case 'burbuja':
    titulo = "Burbuja";
    srcImg = "../images/Productos/burbuja.jpg";
    contenido += "<tr>"+
                  "<td>1</td>"+
                  "<td>Burbuja pz</td>"+
                "</tr>"+
                "<tr>"+
                  "<td>2</td>"+
                  "<td>Burbuja mts</td>"+
                "</tr>";
      break;
    default:

  }
  contenido += "</tbody></table>";
  console.table(titulo,contenido);
  $('#detallesProducto').modal();
  $('#modalTitulo').html(titulo);
  $("#modalImg").attr("src", srcImg);
  $('#modalContenido').html(contenido);

}
