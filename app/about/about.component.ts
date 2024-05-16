import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  projects = [
    [{ id: '1', name: 'Proiect 1', image: '/assets/Proiect1.webp', description: 'Descriere Proiect 1' }],
    [{ id: '2', name: 'Proiect 2', image: '/assets/Proiect2.webp', description: 'Descriere Proiect 2' }],
    [{ id: '3', name: 'Proiect 3', image: '/assets/Proiect3.png',  description: 'Descriere Proiect 3'  }],
    [{ id: '4', name: 'Proiect 4', image: '/assets/Proiect4.avif', description: 'Descriere Proiect 4' }]
  ];

  constructor(private router: Router) {}

  goToProjectDetails(projectId: string) {
    this.router.navigate(['/projects', projectId]);
  }

  
}
