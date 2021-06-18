import { Component, Input, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';
​

@Component({
  selector: 'app-imoveis-page',
  templateUrl: './imoveis-page.component.html',
  styleUrls: ['./imoveis-page.component.css']
})
export class ImoveisPageComponent implements OnInit {

  @Input() imovel: ImoveisApiModel | undefined;
​
  listaDeImoveis: ImoveisApiModel[] = [];


​
  constructor(public imoveisApi: ImoveisApiService) { }

public card : number = 0;

prev(){
  if (this.card >0 ) this.card--;
  if (this.card ==0 ) this.card = this.listaDeImoveis.length-1;
}

next(){
 if (this.card < this.listaDeImoveis.length-1) this.card++;
 if (this.card ==this.listaDeImoveis.length-1 ) this.card = 0;
}

getCard(){
  return this.card;
}


  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeImoveis = retornoDaApi;
      }
    });
​
  }
​
}
