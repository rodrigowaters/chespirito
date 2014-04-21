$(document).ready(function() {
    $.mobile.loading("show");
    var page_detals = "#detals";
    var personagens = {};
    $.getJSON("personagens.json", function(data) {
        var item = [];
        $.each(data, function(imagem, personagem) {
            personagens[imagem] = personagem;
            item.push('<li id_personagem="' + imagem + '"><a href="#"><img src="images/personagens/' + imagem + '.png" class="ui-li-thumb"><h2>' + personagem.name + '</h2><p>' + personagem.description + '</p></a></li>');
        });
        $("<ul/>", {
            "data-role": "listview",
            "data-inset": "true",
            "class": "my-new-list",
            html: item.join("")
        }).appendTo("#main-page .ui-content").find("li").click(function() {
            $.mobile.loading('show');
            var nodeIndex = $(this).attr('id_personagem');
            var personagem = personagens[nodeIndex];
            $(page_detals).find('div[data-role="header"] h1').text(personagem.name);
            var detals = $(page_detals).find('div[role="main"]');
            detals.find('img').prop('src', 'images/personagens/' + nodeIndex + '.png');
            var appendDetals = '<li data-role="list-divider">Descrição</li><li>' + personagem.description + '</li>';
            appendDetals += '<li data-role="list-divider">Ator</li><li>' + personagem.actor + '</li>';
            var audio = 1;
            if (personagem.phrases.length > 0) {
                appendDetals += '<li data-role="list-divider">Frases</li>';
                for (var key in personagem.phrases) {
                    if ($.isPlainObject(personagem.phrases[key])) {
                        appendDetals += '<li><a href="#">' + personagem.phrases[key].text + '<audio><source src="sounds/' + nodeIndex + '_' + audio++ + '.wav" type="audio/wav"></audio></a></li>';
                    } else {
                        appendDetals += '<li>' + personagem.phrases[key] + '</li>';
                    }
                }
            }
            if (personagem.nicknames.length > 0) {
                appendDetals += '<li data-role="list-divider">Apelidos</li>';
                for (var key in personagem.nicknames) {
                    appendDetals += '<li>' + personagem.nicknames[key] + '</li>';
                }
            }
            detals.find('ul').html(appendDetals).listview().listview('refresh').find('a').click(function() {
                var audio = $(this).find('audio')[0];
                audio.play();
            });
            $.mobile.changePage(page_detals, {transition: "pop", changeHash: false});
            $.mobile.loading("hide");
        });
        $("#main-page .ui-content ul").listview();
        $.mobile.loading("hide");
    });
});