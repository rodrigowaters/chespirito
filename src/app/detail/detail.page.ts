import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Storage} from '@ionic/storage';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss'],
})
export class DetailPage {

    key: string;
    name: string;
    description: string;
    actor: string;
    phrases: [];
    nicknames: [];

    constructor(private route: ActivatedRoute, private storage: Storage, private nativeAudio: NativeAudio, public alertController: AlertController) {
        this.route.params.subscribe(params => {

            if (params.hasOwnProperty('pageId')) {
                let pageID = params.pageId;
                this.storage.get(pageID.toString()).then(personagem => {
                    this.key = pageID;
                    this.name = personagem.name;
                    this.description = personagem.description;
                    this.actor = personagem.actor;
                    this.phrases = personagem.phrases;
                    this.nicknames = personagem.nicknames;

                });
            }

        });
    }

    async presentAlert(message) {
        const alert = await this.alertController.create({
            header: 'Aviso',
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }

    playAudio(personagem, key) {

        let index = parseInt(key) + 1;
        let audioPath = 'assets/sounds/'.concat(personagem).concat('_').concat(index.toString()).concat('.wav');
        let audioToken = 'audioToken';

        this.nativeAudio.unload(audioToken).finally(()=>{
            this.nativeAudio.preloadSimple(audioToken, audioPath).then(
                () => {
                    this.nativeAudio.play(audioToken).then();
                },
                () => {
                    this.presentAlert('Nao foi possivel carregar o audio '.concat(audioPath));
                }
            );
        });
        
    }

}
