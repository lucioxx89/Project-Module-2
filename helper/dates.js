const fixDate = function(date) {
    // Solo necesito que me enseñe los 16 primeros dígitos y se cargue los segundos y milisegundos
    // Porque sino el edit no lo sabe leer
    return date.slice(0, 16).toString();
}
module.exports = fixDate;