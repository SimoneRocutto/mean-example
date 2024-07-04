import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./ui-components/specific/navbar/navbar.component";
import { SidebarComponent } from "./ui-components/specific/sidebar/sidebar.component";
import { ToastBoxComponent } from "./ui-components/generic/toast-box/toast-box.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ToastBoxComponent,
  ],
  template: `
    <div class="min-h-screen bg-gray-100">
      <app-sidebar>
        <app-navbar></app-navbar>
        <main class="relative z-0 flex flex-1 justify-center">
          <router-outlet /></main
      ></app-sidebar>
      <app-toast-box></app-toast-box>
    </div>
  `,
})
export class AppComponent {}
