function setToaster(toasterType, toasterMsg, time = 5000) {
    $(".app-toasters-wrapper").removeClass("hide");
    if (toasterType == "success") {
        $(".app-toasters-wrapper").children(".toaster").remove();
        $(".app-toasters-wrapper").append('<div class="toaster toaster-success"><i class= "fa fa-times delete-toaster"></i >\
        <div class="toaster-icon"><i class="fa fa-check"></i></div>\
        <div class="toaster-text"> ' + toasterMsg + ' </div></div >')
    } else if (toasterType == "danger") {
        $(".app-toasters-wrapper").append('<div class="toaster toaster-danger"><i class= "fa fa-times delete-toaster"></i >\
        <div class="toaster-icon"><i class="fa fa-times"></i></div>\
        <div class="toaster-text"> ' + toasterMsg + ' </div></div >')
    } else if (toasterType == "warning") {
        $(".app-toasters-wrapper").append('<div class="toaster toaster-warning"><i class= "fa fa-times delete-toaster"></i >\
        <div class="toaster-icon"><i class="fa fa-exclamation-triangle"></i></div>\
        <div class="toaster-text"> ' + toasterMsg + ' </div></div >')
    } else {
        alert("Choose correct type - success - warning - danger ");
    }
    if (time !== 0) {
        setTimeout(function () {
            $(".app-toasters-wrapper").children(".toaster").each(function () {
                $(this).remove();
            });
            $(".app-toasters-wrapper").addClass("hide");
        }, time);
    }
}
