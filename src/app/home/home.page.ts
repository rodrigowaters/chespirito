import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items_default = {};
    items = {};
    closeLoading: boolean;
    private loading: HTMLIonLoadingElement;

    constructor(public router: Router, private storage: Storage, private loadingController: LoadingController) {

        this.presentLoading().then(() => {
            this.storage.forEach((item, index) => {
                this.items_default[index] = item;
            }).then(() => {
                this.closeLoading = false;
                this.items = this.items_default;
            }).finally(() => {
                this.loading.dismiss().then();
            });
        });

    }

    search(ev: any) {

        // Resetar items
        this.items = this.items_default;

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() !== '') {

            this.items = [];
            for (let index in this.items_default) {
                let item = this.items_default[index];
                if ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                    this.items[index] = item;
                }
            }

        }

    }

    async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Carregando Dados'
        });
        return await this.loading.present();
    }

}

