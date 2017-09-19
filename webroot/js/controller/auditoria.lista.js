$(function () {
    $('#data_inicial').datepicker({
        language: 'pt-BR'
    });

     $('#data_final').datepicker({
        language: 'pt-BR'
    });

    $('#data_inicial').mask('00/00/0000');
    $('#data_final').mask('00/00/0000');
});

function excluirRegistro(id) {
    swal({
        title: "Deseja excluir este registro?",
        html: "A exclusão deste registro irá tornar a operação irreversível.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then(function () {
        window.location = '/rh/auditoria/delete/' + id;
    });
}