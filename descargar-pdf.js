document.getElementById('descargar-pdf').addEventListener('click', function() {
    var doc = new jsPDF();
    doc.text(20, 20, '¡Hola, mundo!');
    doc.save('reporte.pdf');
  });