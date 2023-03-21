var Config = {
    url: $.parseJSON($.ajax({
        type: "GET",
        url: "http://myfirstapp.web/onfig.json",
        dataType: "json",
        global: false,
        async: false,
        success: function (data) {
            return data;
        }
    }).responseText).url
}
