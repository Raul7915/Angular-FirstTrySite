// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    { id: '1', name: 'EV Charging Stations', image: '/assets/Proiect1.webp', 
    description: 'We implement fast charging systems, in alternating current or direct current, for electric cars. Their sizes scale according to customer demand, with the main criterion being the safety of individuals and property. The systems include components from prestigious manufacturers: Schrack, Schneider, ABB, Eaton, E.ON, Alfen, etc.'},
    { id: '2', name: 'Flexible Photovoltaic Panel Solutions', image: 'assets/Proiect2.webp', 
    description: 'We provide photovoltaic power plant solutions for small and medium-sized companies, with energy storage in high-capacity batteries. The photovoltaic panels are mounted on ground structures produced in Romania or on designated buildings. We handle the necessary procedures to obtain prosumer status and support our clients both post-installation and post-warranty to maximize the benefits of their investment.' },
    { id: '3', name: 'Advanced Air Mobility', image: 'assets/Proiect3.png', description: 'Sensata light weight, reliable, and certified solutions enable electric or hybrid propulsion drive trains for eVTOL, eSTOL and eCTOL aircraft. Our designs support both infrastructure and aircraft mission profiles for advanced air mobility (AAM), urban air mobility (UAM), air taxi, and middle / last mile cargo delivery. Collaborate with our experienced aerospace engineering team to drive your project’s success! \n\nOur design team can assist you with:\n\tPilot Controls / Flight Simulator Controls\n\tEnergy Storage Systems / Battery Management\n\tHigh Voltage Disconnect Units / Short Circuit Protection\n\tCharging Infrastructure\n\tHydrogen Fuel Cell Stack and Balance of Plant'},
    { id: '4', name: 'Clusterxchange Registrations', image: '/assets/Proiect4.avif', description: 'The project aims to act as an enabler and multiplier of collaborations by initiating 100 matched short-term exchanges via ClusterXchange Programme. It empowers Green Tech Clusters to support SMEs in exploiting growth opportunities, service innovation, resource-efficient solutions, market traction, finding investments and internationalization. !! Check the link !! DOWNLOAD NOW: https://play.google.com/store/apps/nu-fac-reclama-gratis' }
  ];

  constructor() {}

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
