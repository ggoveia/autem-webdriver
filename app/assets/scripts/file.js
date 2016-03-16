document.getElementById('fileinput').addEventListener('change', function(){
    var file = this.files[0];
    $("#spnFile").html(file.name);
}, false);
