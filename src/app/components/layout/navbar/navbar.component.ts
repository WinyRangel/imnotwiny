import { Component, OnInit, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MenubarModule, CommonModule]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  scrolled = false;

  // Estado del idioma
  currentLang: 'es' | 'en' = 'es';

  // URLs de las banderas
  flags = {
    es: 'https://static.vecteezy.com/system/resources/previews/011/571/244/non_2x/circle-flag-of-mexico-free-png.png',
    en: 'https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-circulo-de-icono-de-idioma-de-bandera-de-inglaterra.png'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.setMenuItems();
  }

  // Alternar idioma
  toggleLang() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.setMenuItems();
  }

  // Ajustar labels según idioma
  setMenuItems() {
    if (this.currentLang === 'es') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', command: () => this.scrollTo('home') },
        { label: 'Sobre Mí', icon: 'pi pi-user', command: () => this.scrollTo('about-me') },
        { label: 'Habilidades', icon: 'pi pi-code', command: () => this.scrollTo('skills') },
        { label: 'Proyectos', icon: 'pi pi-folder-open', command: () => this.scrollTo('projects') },
        { label: 'Contacto', icon: 'pi pi-envelope', command: () => this.scrollTo('contact') }
      ];
    } else {
      this.items = [
        { label: 'Home', icon: 'pi pi-home', command: () => this.scrollTo('home') },
        { label: 'About Me', icon: 'pi pi-user', command: () => this.scrollTo('about-me') },
        { label: 'Skills', icon: 'pi pi-code', command: () => this.scrollTo('skills') },
        { label: 'Projects', icon: 'pi pi-folder-open', command: () => this.scrollTo('projects') },
        { label: 'Contact', icon: 'pi pi-envelope', command: () => this.scrollTo('contact') }
      ];
    }
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
