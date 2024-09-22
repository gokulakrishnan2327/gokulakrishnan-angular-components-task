import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Peo {
  title: string;
  description: string;
  evaluation: number;
  outcomes: string;
  showDetails: boolean;
  peoname: string;
}

@Component({
  selector: 'app-peo-cards-component',
  standalone: true,
  imports: [CommonModule], // Include CommonModule
  templateUrl: './peo-cards-component.component.html',
  styleUrls: ['./peo-cards-component.component.css'],
})
export class PeoCardsComponentComponent {
  peos: Peo[] = [
    {
      title: 'PEO-1',
      description: 'Develop students with industry-specific knowledge to meet industry requirements.',
      evaluation: 80,
      outcomes: '',
      showDetails: false,
      peoname: 'Employability',
    },
    {
      title: 'PEO-2',
      description: 'Prepare students for public sector undertaking through competitive exams.',
      evaluation: 70,
      outcomes: '',
      showDetails: false,
      peoname: 'Entrepreneurship',
    },
    {
      title: 'PEO-3',
      description: 'Develop students with industry-specific knowledge to meet industry requirements.',
      evaluation: 80,
      outcomes: '',
      showDetails: false,
      peoname: 'Research & Development',
    },
    {
      title: 'PEO-4',
      description: 'Develop students with industry-specific knowledge to meet industry requirements.',
      evaluation: 80,
      outcomes: '',
      showDetails: false,
      peoname: 'Contribute to Business',
    },
    {
      title: 'PEO-5',
      description: 'Develop students with industry-specific knowledge to meet industry requirements.',
      evaluation: 80,
      outcomes: '',
      showDetails: false,
      peoname: 'Contribute to Society',
    },
  ];

  // Initialize with the first card selected
  selectedPeo: Peo = this.peos[0];

  selectPeo(peo: Peo) {
    this.selectedPeo = peo;
  }

  showDetails(peo: Peo) {
    peo.showDetails = true;
  }

  hideDetails(peo: Peo) {
    peo.showDetails = false;
  }
}
