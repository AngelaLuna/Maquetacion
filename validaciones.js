valor = document.getElementById("name").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}
