import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buy-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent {
  horarios: string[] = ['18:00', '20:00', '22:00'];
  fileiras: string[] = ['A', 'B', 'C', 'D', 'E'];
  assentosPorFileira: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  selectedHorario: string = this.horarios[0];
  tipoIngresso: string = 'inteira';
  assentosSelecionados: Set<string> = new Set<string>();

  isSelecionado(assento: string): boolean {
    return this.assentosSelecionados.has(assento);
  }

  toggleSelecionado(assento: string): void {
    if (this.assentosSelecionados.has(assento)) {
      this.assentosSelecionados.delete(assento);
    } else {
      this.assentosSelecionados.add(assento);
    }
  }

  calcularTotal(): number {
    const precoPorIngresso = this.tipoIngresso === 'inteira' ? 16 : 8;
    return this.assentosSelecionados.size * precoPorIngresso;
  }

  comprarIngresso(): void {
    if (this.assentosSelecionados.size > 0) {
      const assentosText = Array.from(this.assentosSelecionados).join(', ');
      const total = this.calcularTotal();
      alert(`Ingressos comprados para os assentos: ${assentosText}\nTipo: ${this.tipoIngresso}\nHorário: ${this.selectedHorario}\nTotal: R$ ${total}`);
    } else {
      alert('Por favor, selecione pelo menos um assento.');
    }
  }
}
