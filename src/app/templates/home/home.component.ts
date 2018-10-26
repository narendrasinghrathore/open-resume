import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages = [
    {
      title: '1',
      href: '/templates/basic',
      aria_label: 'Select template basic.',
      subtitle: 'Basic',
      content: 'Template with basic information required for your first interview.',
    },
    {
      subtitle: 'Software Engineer',
      content: 'Have a experience in software development, then select this template to start with.',
      title: '2',
      href: '/templates/software-engineer',
      aria_label: 'Select template software engineer.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  navigateToPreviousPage() {
    window.history.back();
  }

}
