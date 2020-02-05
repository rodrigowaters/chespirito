import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {Storage, IonicStorageModule} from '@ionic/storage';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {NativeAudio} from '@ionic-native/native-audio/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot({
            name: 'chespirito',
            version: 1,
            description: 'Items Storage',
            storeName: 'items',
            dbKey: 'id',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        IonicStorageModule,
        NativeAudio
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private storage: Storage) {

        this.storage.keys().then(item => {

            // Verificar se existe registro
            if (item.length === 0) {

                // Cadastrar items
                let itens = {
                    "carequinha": {
                        "name": "Carequinha",
                        "description": "O personagem aparece apenas uma vez só na vila do Chaves para comprar a própria vila. É interpretado pelo mesmo ator que fez o Senhor Furtado, Ricardo de Pascual.",
                        "actor": "Ricardo de Pascual",
                        "phrases": [],
                        "nicknames": []
                    },
                    "chaves": {
                        "name": "Chaves",
                        "description": "Chaves é o personagem principal que dá nome ao seriado. Um garoto pobre, órfão e muito atrapalhado, sempre com as mesmas roupas velhas e apertadas e que sempre entra no seu famoso barril para se esconder. Ao contrário do que todos pensam, ele não mora no barril e seu nome não é Chaves. Ele mora na casa número 8 e seu verdadeiro nome é um mistério, pois sempre que perguntam seu nome, outra pessoa aparece e interrompe a conversa. ",
                        "actor": "Roberto Goméz Bolaños",
                        "phrases": [
                            {"text": "Isso, isso, isso!", "hasAudio": true},
                            {"text": "Foi sem querer querendo!", "hasAudio": true},
                            {"text": "Ninguém tem paciência comigo!", "hasAudio": false},
                            {"text": "É que me escapuliu!", "hasAudio": false},
                            {"text": "Zas, zas e zas", "hasAudio": false}
                        ],
                        "nicknames": []
                    },
                    "chiquinha": {
                        "name": "Chiquinha",
                        "description": "É uma menina baixinha, sardenta e muito esperta, sempre arranjando uma maneira de se aproveitar da ingenuidade (para não dizer burrice) do Chaves e do Kiko.",
                        "actor": "Maria Antonieta de las Nieves",
                        "phrases": [
                            {"text": "Pois é, pois é, pois é...", "hasAudio": true},
                            {"text": "Opa !", "hasAudio": true},
                            {"text": "Papaízinho lindo do meu coração...", "hasAudio": false},
                            {"text": "...me dá um dinheiro para mim comprar um pirulito?", "hasAudio": false},
                            {"text": "O que você tem de burro, você tem de burro", "hasAudio": false}
                        ],
                        "nicknames": [
                            "Micróbio",
                            "balguelinha sem-graça",
                            "sardenta"
                        ]
                    },
                    "dona_clotilde": {
                        "name": "Dona Clotilde",
                        "description": "As crianças da vizinhança não gostam muito dela e a chamam de Bruxa. Ela está sempre atrás do Seu Madruga, por quem é apaixonada, sempre fazendo bolos e frangos para agradá-lo, mas é sempre acusada pelas crianças de enfeitiçar a comida.",
                        "actor": "Angelines Fernández Abad",
                        "phrases": [
                            {"text": "Eu não sou nenhuma bruxa !", "hasAudio": true}
                        ],
                        "nicknames": []
                    },
                    "dona_florinda": {
                        "name": "Dona Florinda",
                        "description": "É uma mulher arrogante que diz ser da alta sociedade, mas é tão pobre quanto seus vizinhos. Vive da pensão do seu falecido marido, Frederico, que descansa em pança (como diria o Kiko). Está sempre atrás do pobre Seu Madruga, sempre o acusando injustamente de bater em seu filho Kiko. Sempre usa bobs na cabeça e um avental, tirando-os apenas em ocasiões especiais.",
                        "actor": "Florinda Meza García",
                        "phrases": [
                            {"text": "Vamos tesouro e não se misture com esta gentalha!", "hasAudio": true},
                            {"text": "Medroso !", "hasAudio": true},
                            {"text": "E da próxima vez, vai ser pior !", "hasAudio": true}
                        ],
                        "nicknames": [
                            "Velha carcomida",
                            "velha coroca",
                            "lombriga anêmica",
                            "monstro do espaço",
                            "vela derretida"
                        ]
                    },
                    "frederico": {
                        "name": "Frederico",
                        "description": "Frederico é o pai do Kiko. Morreu provavelmente em um naufrágio e descança em pança, porque foi comido por um tubarão, segundo o Kiko. Aparece apenas em uma cena do episódio do despejo do Seu Madruga.",
                        "actor": "Carlos Villagrán Eslava",
                        "phrases": [],
                        "nicknames": []
                    },
                    "dona_neves": {
                        "name": "Dona Neves",
                        "description": "É a famosa avozinha do Seu Madruga e bisavó da Chiquinha. Ela é muito parecida com sua bisneta e, assim como seu neto, vive fugindo do Seu Barriga para não pagar o aluguel.",
                        "actor": "Maria Antonieta de las Nieves",
                        "phrases": [
                            {"text": "Mas como quer que eu fale se eu não tenho dentes", "hasAudio": true},
                            {"text": "Acho que pisei em falso", "hasAudio": true},
                            {"text": "Que, que, que, como?", "hasAudio": false}
                        ],
                        "nicknames": []
                    },
                    "girafales": {
                        "name": "Girafales",
                        "description": "Também conhecido como mestre Lingüiça, é o professor da escolinha onde estudam as crianças da vizinhança. Sempre vai na vila do Chaves atrás de Dona Florinda, trazendo sempre um ramo de flores. Destaca-se pela grande estatura e por estar sempre fumando um charuto.",
                        "actor": "Rubén Aguirre Fuentes",
                        "phrases": [
                            {"text": "Sabe qual é o animal que come com o rabo ?", "hasAudio": true},
                            {"text": "Tá tá tá tá tá!", "hasAudio": false},
                            {"text": "Por que causa, motivo, razão ou circunstância?", "hasAudio": false}
                        ],
                        "nicknames": [
                            "Meste lingüiça",
                            "quilometro parado",
                            "mangueira de bombeiro"
                        ]
                    },
                    "gloria": {
                        "name": "Glória",
                        "description": "É a nova vizinha que vai morar na vizinhança do Chaves com sua sobrinha Paty. Esta personagem aparece apenas em um episódio, mas em três diferentes versões com três atrizes. A versão mais famosa no Brasil é com a atriz Regina Torné",
                        "actor": "Regina Torné",
                        "phrases": [
                            {"text": "Eu sou sua nova vizinha", "hasAudio": true},
                            {"text": "Eu sou a Glória", "hasAudio": true}
                        ],
                        "nicknames": []
                    },
                    "godinez": {
                        "name": "Godinez",
                        "description": "Godinez é um dos alunos do Professor Girafales. Apesar de falar e aparecer muito pouco, tornou-se um personagem muito marcante. Apareceu apenas uma vez na vila do Chaves, no episódio do Parque de Diversões.",
                        "actor": "Horácio Gomez Bolaños",
                        "phrases": [
                            {"text": "É um tabuleiro de xadrez para principiantes", "hasAudio": true},
                            {"text": "Aí está a confusão, por que eu não entendi nada !", "hasAudio": true},
                            {"text": "Mas porque, se eu não disse nada?", "hasAudio": false},
                        ],
                        "nicknames": []
                    },
                    "jaiminho": {
                        "name": "Jaiminho",
                        "description": "Jaiminho é o carteiro da vila. É um senhor preguisoço que sempre diz querer evitar a fadiga e sua cidade natal é Tangamandápio que, segundo ele, tem mais ou menos o tamanho da cidade de Nova York. Aparece nos anos finais do seriado substituindo o papel do Seu Madruga, que na época foi para a Venezuela gravar um programa junto com o Kiko.",
                        "actor": "Raul 'Chato' Padilla",
                        "phrases": [
                            {"text": "É que eu quero evitar a fadiga", "hasAudio": true},
                            {"text": "Eu vim trazer a correspondência para Dona Florinda", "hasAudio": true},
                            {"text": "Eu vim de Tangamandápio", "hasAudio": false}
                        ],
                        "nicknames": []
                    },
                    "kiko": {
                        "name": "Kiko",
                        "description": "É um garoto bobo, mimado e bochechudo. Tem nove anos de idade e é o melhor amigo do Chaves. Mora na casa número 14 com sua mãe, Dona Florinda. Está sempre esperando por sua bola quadrada.",
                        "actor": "Carlos Villangrán Eslavan",
                        "phrases": [
                            {"text": "Gentalha, Gentalha, pruuuuuf!", "hasAudio": true},
                            {"text": "Eu não tenho medo de ninguém", "hasAudio": true},
                            {"text": "Cale-se, cale-se, cale-se, você me deixa louco!", "hasAudio": false},
                            {"text": "Você Não vai com a minha cara?", "hasAudio": false},
                            {"text": "Você quer? Então compra!", "hasAudio": false},
                            {"text": "Mamãe!", "hasAudio": false},
                            {"text": "Da parte de quem?", "hasAudio": false},
                            {"text": "Que coisa, não?", "hasAudio": false}
                        ],
                        "nicknames": [
                            "bochechas de mamão macho",
                            "bochechas de bulldog velho",
                            "mocorongo almofadinha"
                        ]
                    },
                    "malicha": {
                        "name": "Malicha",
                        "description": " Malicha é afilhada do Seu Madruga e aparece apenas em dois episódios do seriado Chaves substituindo a Chiquinha (grávida na época).",
                        "actor": "María Luisa Alcalá",
                        "phrases": [],
                        "nicknames": []
                    },
                    "nhonho": {
                        "name": "Nhonho",
                        "description": "Nhonho é o filho do Senhor Barriga, e é tão gordo quanto o pai. De vez em quando aparece na vila do Chaves e sempre na escolinha do Professor Jirafales.",
                        "actor": "Edgar Vivar",
                        "phrases": [
                            {"text": "Quantos ovos você pode comer em jejum?", "hasAudio": true},
                            {"text": "Ou me empresta dinheiro ou amasso a tua cara", "hasAudio": true},
                            {"text": "Ah, é que estou com muita fome", "hasAudio": false},
                            {"text": "Olha ele, olha ele, hein, olha ele!", "hasAudio": false}
                        ],
                        "nicknames": []
                    },
                    "paty": {
                        "name": "Paty",
                        "description": "É a nova vizinha que vai morar na vizinhança do Chaves com sua tia Glória. Esta personagem aparece apenas em um episódio, mas em três diferentes versões com três atrizes diferentes. A versão mais famosa no Brasil é com a atriz Anna Lilian de la Macorra",
                        "actor": "Anna Lilian de la Macorra",
                        "phrases": [
                            {"text": "Eu sou Paty", "hasAudio": true}
                        ],
                        "nicknames": []
                    },
                    "popis": {
                        "name": "Popis",
                        "description": "Popis é sobrinha da Dona Florinda e prima do Kiko. É uma garoto fanha que está sempre segurando a sua boneca Serafina. Aparece ocasionalmente na escola do Professor Girafales e na vila do Cahves em substituição à Chiquinha.",
                        "actor": "Florinda Meza Garcia",
                        "phrases": [
                            {"text": "Conta tudo pra sua mãe, Kiko!", "hasAudio": false},
                            {"text": "Ah, mas eu vou te acusar!", "hasAudio": false}
                        ],
                        "nicknames": []
                    },
                    "seu_barriga": {
                        "name": "Seu Barriga",
                        "description": "Seu nome completo é Zenón Barriga y Pesado. É o 'burguês' dono da vila. Cada vez que vai à vila para cobrar aluguel é recebido com uma pancada pelo Chaves, que sempre diz que foi 'sem querer querendo'. Está sempre atrás do Seu Madruga, um de seus inquilinos, que lhe deve 14 meses de aluguel atrasados. Tem um filho chamado Nhonho e uma esposa, que ninguém conhece, pois está sempre viajando a trabalho.",
                        "actor": "Edgar Vivar",
                        "phrases": [
                            {"text": "{choros}", "hasAudio": true},
                            {"text": "Pague o aluguel!", "hasAudio": true},
                            {"text": "Não sabe que só os idiotas respondem uma pergunta com outra pergunta?", "hasAudio": true},
                            {"text": "{risada malígna}", "hasAudio": true},
                            {"text": "Tinha que ser o Chaves de novo!", "hasAudio": false}
                        ],
                        "nicknames": [
                            "Almôndega",
                            "barril de paletó",
                            "disco voador"
                        ]
                    },
                    "seu_furtado": {
                        "name": "Seu Furtado",
                        "description": "O senhor Furtado é um ladrão que apareceu apenas em um episódio do seriado Chaves: O ladrão da Vila.",
                        "actor": "Ricardo de Pascual",
                        "phrases": [
                            {"text": "Meu nome é Furtado", "hasAudio": true},
                            {"text": "Hoje eu acordei com boa sorte", "hasAudio": true}
                        ],
                        "nicknames": []
                    },
                    "seu_madruga": {
                        "name": "Seu Madruga",
                        "description": "Talvez o personagem favorito dos fãs do seriado, ele é um cara muito simples que está sempre fazendo bicos e trambiques para sobreviver. Vive fugindo do Senhor Barriga para não pagar o aluguel da sua casa onde mora junto a sua filha Chiquinha. Sempre foge também da Dona Florinda para não apanhar, pois sempre leva culpa pelas trapalhadas feitas pelo Chaves.",
                        "actor": "Ramón Gómez Valdez Castillo",
                        "phrases": [
                            {"text": "Só não te dou outra porque...", "hasAudio": true},
                            {"text": "Olha ! Cala a boca e me da meu violão", "hasAudio": true},
                            {"text": "Que que foi, que que foi, que que há?", "hasAudio": false},
                            {"text": "Não existe trabalho ruim, ruim é ter que trabalhar!", "hasAudio": false},
                            {"text": "As pessoas boas devem amar seus inimigos.", "hasAudio": false}
                        ],
                        "nicknames": [
                            "Chimpanzé reumático",
                            "lombriga esticada",
                            "pernas de saracura"
                        ]
                    },
                    "seu_madroga": {
                        "name": "Seu Madroga",
                        "description": "Seu Madroga é o primo do Seu Madruga. Ele tem muitas semelhanças físicas e comportamentais com o seu primo. Aparece apenas em um único episódio substituindo o Seu Madruga.",
                        "actor": "Germán Robles",
                        "phrases": [],
                        "nicknames": []
                    }
                };
                for (let key in itens) {
                    this.storage.set(key.toString(), itens[key]);
                }

            }
        });

    }

}
