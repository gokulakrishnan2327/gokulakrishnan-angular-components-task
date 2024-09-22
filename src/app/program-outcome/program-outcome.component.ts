import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-outcome',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './program-outcome.component.html',
  styleUrls: ['./program-outcome.component.css']
})
export class ProgramOutcomeComponent {
  programOutcomes = [
    {
      id: 1,
      poname:'PO1',
      evaluation: '5 out of 12',
      skillName: 'Decision Making Skill',
      percentage: 80,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },
    {
      id: 2,
      poname:'PO2',
      evaluation: '5 out of 12',
      skillName: 'Communication Skill',
      percentage: 70,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },{
      id: 3,
      poname:'PO3',
      evaluation: '5 out of 12',
      skillName: 'Employability Skill',
      percentage: 50,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },{
      id: 4,
      poname:'PO4',
      evaluation: '5 out of 12',
      skillName: 'Entrepreneurial Skill',
      percentage: 78,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },{
      id: 5,
      poname:'PO5',
      evaluation: '5 out of 12',
      skillName: 'Contribute to Society',
      percentage: 90,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },{
      id: 6,
      poname:'PO6',
      evaluation: '5 out of 12',
      skillName: 'Problem Solving Skill',
      percentage: 65,
      description: 'Demonstrates proficiency in problem-solving techniques.',
      peosMapped: 'PEO1, PEO2',
      isOpen: false
    },
  ];

  toggleDropdown(po: any): void {
    po.isOpen = !po.isOpen;
  }

}
