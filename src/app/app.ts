import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  formation: string = '4-3-3';
  team: any = null;
  loading: boolean = false;

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  generateTeam() {

    this.loading = true;

    this.http.post<any>(`${this.apiUrl}/generate-team`, {
      formation: this.formation
    }).subscribe({
      next: (response) => {

        this.team = response;
        this.loading = false;

        // REQUIRED for zone-less Angular
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('API Error:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });

  }

  // ✅ Needed because template uses it
  trackByIndex(index: number): number {
    return index;
  }

}
