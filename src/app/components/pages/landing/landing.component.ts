import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor() {}

  public timelineData = [
    {
      title: "Ser aluno da Rede Pública",
      icon: '<i class="fa fa-pencil"></i>',
      content: "Para participar do Vestibular Cidadão o aluno deve ter concluído ou ainda estar matriculado no terceiro ano do ensino médio em uma Escola da Rede Pública de Ensino.",
      complete: false
    },
    {
      title: "Bolsista pode participar?",
      icon: '<i class="fa fa-pencil"></i>',
      content: "SIM! Porém só são aceitas inscrições de bolsistas 100%, mediante comprovação.",
      complete: false
    },
    {
      title: "Onde são as aulas e quais os horários?",
      icon: '<i class="fa fa-clock-o"></i>',
      content: "As aulas acontecem no Anexo II, da Faculdade de Direito do Recife, ao lado do Hospital Exercito, no bairro da Boa Vista, próximo ao Parque 13 de maio. As aulas ocorrem de segunda a sábado. De segunda a sexta no horário da tarde, das 13 às 18:15 e, aos sábados, das 08 às 13:15.",
      complete: false
    },
    {
      title: "O que eu preciso levar para fazer a inscrição?",
      icon: '<i class="fa fa-address-card-o"></i>',
      content: 'Para a Inscrição basta apresentar um Documento de identificação OFICIAL:( RG, Carteira de Trabalho, Passaporte ), ficha 19 ou declaração escolar, taxa de R$20,00',
      complete: false
    },
    {
      title: "Onde faço a minha inscrição?",
      icon: '<i class="fa fa-university"></i>',
      content: "Na Faculdade de Direito do Recife, que fica na Praça Adolfo Cirne, no Bairro da Boa Vista. Próximo ao Parque 13 de maio.",
      complete: false
    },
    {
      title: "Paga alguma TAXA?",
      icon: '<i class="fa fa-usd"></i>',
      content: "SIM, existe a taxa de R$20,00 que o candidato paga na inscrição. O curso é totalmente gratuito, existe a cobrança dessa taxa para a realização do processo seletivo.",
      complete: false
    },

  ];

  ngOnInit() {  }

}
