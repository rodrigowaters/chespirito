$(document).ready(function() {
    var $personagens = {};
    var $page_main = $('main#main');
    var $page_view = $('main#view');
    $.getJSON("personagens.json", function($data) {
        var $item = [];
        $.each($data, function($imagem, $personagem) {
            $personagens[$imagem] = $personagem;
            var $template = '<li id_personagem="' + $imagem + '" class="item item-avatar item-button-right"><img src="images/personagens/' + $imagem + '.png"><h2>' + $personagem.name + '</h2><button class="button button-positive"><i class="icon ion-arrow-right-a"></i></button></li>';
            $item.push($template);
        });
        $("<ul/>", {
            "class": "list",
            html: $item.join("")
        }).appendTo("main#main article").find("li.item").click(function() {
            var $nodeIndex = $(this).attr('id_personagem');
            var $personagem = $personagens[$nodeIndex];
            var $audio = 1;
            $page_view.find('header div.title').html($personagem.name);
            $page_view.find('img').prop('src', 'images/personagens/' + $nodeIndex + '.png');
            var $content_to_append = '<li class="item item-divider">Descrição</li><li class="item">' + $personagem.description + '</li>';
            $content_to_append += '<li class="item item-divider">Ator</li><li class="item"">' + $personagem.actor + '</li>';
            if ($personagem.phrases.length > 0) {
                $content_to_append += '<li class="item item-divider">Frases</li>';
                for (var key in $personagem.phrases) {
                    if ($.isPlainObject($personagem.phrases[key])) {
                        $content_to_append += '<li class="item item-button-right">' + $personagem.phrases[key].text + '<button class="button button-positive"><i class="icon ion-ios7-play"><audio><source src="sounds/' + $nodeIndex + '_' + $audio++ + '.wav" type="audio/wav"></audio></i></button></li>';
                    } else {
                        $content_to_append += '<li class="item">' + $personagem.phrases[key] + '</li>';
                    }
                }
            }
            if ($personagem.nicknames.length > 0) {
                $content_to_append += '<li class="item item-divider">Apelidos</li>';
                for (var key in $personagem.nicknames) {
                    $content_to_append += '<li class="item">' + $personagem.nicknames[key] + '</li>';
                }
            }
            $page_view.find('li.list').html($content_to_append).find('li.item button').click(function() {
                var audio = $(this).find('audio')[0];
                audio.play();
            });
            $page_main.removeClass('left_to_main').addClass('main_to_left');
            $page_view.removeClass('main_to_right').addClass('right_to_main');
        });
    });
    $page_view.find('header button').click(function(){
        $page_main.removeClass('main_to_left').addClass('left_to_main');
        $page_view.removeClass('right_to_main').addClass('main_to_right');
    });
});