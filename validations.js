function Alerting(type  , msg  , ele = " " ) {
    if (type == "toaster") {
        setToaster("danger", msg);
    } else if (type == "linedText") {
        $(ele).parent("div").children(".span-error").remove();
        $(ele).parent("div").append("<span class='span-error' style='color:red;font-size:11px;display:block;'>" + msg + "</span>");
    } else if (type == "linedDiv") {
        $(ele).removeClass("hide").append('<span style="display:block">' + msg +'</span>') ;
    } 
}
function ResetAlert(type, ele = " ") {
    if (type == "linedText") {
        $(ele).parent("div").children(".span-error").remove();
    } else if (type == "linedDiv") {
        $(ele).children("span").remove();
    } 
}
function Validation(groupClass, alertType , ele = " " ) {
    var name, min, max, type, error = 0;
    //alert(groupLength);
    $("." + groupClass).each(function () {
        name    = $(this).data("name");
        min     = $(this).data("min");
        max     = $(this).data("max");
        type = $(this).data("type");
        if (alertType != "linedDiv") {
            ele = $(this);
        }
        if (type == "text") {
            // validate as text 
            if ($(this).val() == "" || $(this).val() == " " || $(this).val().length == 0) {
                error++;
                Alerting(alertType, name + " Cant be empty ", ele);
            } else if ($(this).val().length < min || $(this).val().length > max) {
                error++;
                Alerting(alertType, name + " Cant be less than " + min + " Or even greater than " + max, ele);
            } else if ($.isNumeric($(this).val())) {
                error++;
                Alerting(alertType, name + " Cant contain  numeric value without text ", ele);
            } else {
                ResetAlert(alertType , ele );
            }
        }
        else if (type == "password") {
            // validate as password 
            if ($(this).val().length == 0 || $(this).val() == "" || $(this).val() == " ") {
                error++;
                Alerting(alertType, name + " Cant be empty", ele);
            } else if ($(this).val().length < min || $(this).val().length > max) {
                error++;
                Alerting(alertType, name + " Cant be less than " + min + " Or even greater than " + max, ele);
            } else {
                ResetAlert(alertType, ele);
            }
        }
        else if (type == "email") {
            // validate as email 
            if ($(this).val().length == 0 || $(this).val() == "" || $(this).val() == " ") {
                error++;
                Alerting(alertType, name + " Cant be empty", ele);
            } else if ($(this).val().length < min || $(this).val().length > max) {
                error++;
                Alerting(alertType, name + " Cant be less than " + min + " Or even greater than " + max, ele);
            } else if ($.isNumeric($(this).val())) {
                error++;
                Alerting(alertType, name + " Cant contain  numeric value without text ", ele);
            } else if ($(this).val().indexOf("@") == -1 ) {
                error++;
                Alerting(alertType, name + " Invalid formation ", ele);
            } else {
                ResetAlert(alertType, ele);
            }
        }
        else if (type == "username") {
            // validate as username 
            if ($(this).val().length == 0 || $(this).val() == "" || $(this).val() == " ") {
                error++;
                Alerting(alertType, name + " Cant be empty", ele);
            } else if ($(this).val().length < min || $(this).val().length > max) {
                error++;
                Alerting(alertType, name + " Cant be less than " + min + " Or even greater than " + max, ele);
            } else if ($.isNumeric($(this).val())) {
                error++;
                Alerting(alertType, name + " Cant contain  numeric value without text ", ele);
            } else if ($(this).val().indexOf(" ") >= 0 ) {
                error++;
                Alerting(alertType, name + " Cant contain white spaces ", ele);
            } else {
                ResetAlert(alertType, ele);
            }
        }
        else if (type == "select") {
            // validate as select 
            if ($(this).val()  < 1  ) {
                error++;
                Alerting(alertType, name + " Cant be empty", ele);
            } else {
                ResetAlert(alertType, ele);
            }
        }
        else if (type == "number") {
            // validate as number 
            if ($(this).val().length == 0 || $(this).val() == "" || $(this).val() == " ") {
                error++;
                Alerting(alertType, name + " Cant be empty", ele);
            } else if ($(this).val().length < min || $(this).val().length > max) {
                error++;
                Alerting(alertType, name + " Cant be less than " + min + " Or even greater than " + max, ele);
            } else if ($.isNumeric($(this).val()) == false ) {
                error++;
                Alerting(alertType, name + " Cant contain text must be numeric value ", ele);
            } else if ($(this).val().indexOf(" ") >= 0) {
                error++;
                Alerting(alertType, name + " Cant contain white spaces ", ele);
            } else {
                ResetAlert(alertType, ele);
            }
        }
        else {
            console.error("Please Insert Correct Type For The Input ( " + name +  " ) , Set one of the following types -> password - text - email - username - select - number");
        }
    });
    if (error == 0) {
        return true;
    }
    return false;
}
