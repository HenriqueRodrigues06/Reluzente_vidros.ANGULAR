import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agendamento.html',
  styleUrl: './agendamento.scss',
})
export class Agendamento {

    form = {
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    produtos: {
      boxBanheiro: false,
      janela: false,
      sacada: false,
    },
    aceitaWhatsapp: null,
  };

  onSubmit() {
    console.log('Formulário enviado:', this.form);
    // aqui você pode chamar um serviço para enviar os dados
  }

}
