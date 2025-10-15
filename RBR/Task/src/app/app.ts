import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../Components/nav-bar/nav-bar';
import { Register } from '../Components/register/register';
import { ClientSection } from '../Components/client-section/client-section';
import { SiteSection } from '../Components/site-section/site-section';
import { ClubsSection } from '../Components/clubs-section/clubs-section';
import { LernMore } from '../Components/lern-more/lern-more';
import { TestmonalSection } from '../Components/testmonal-section/testmonal-section';
import { BlogSection } from "../Components/blog-section/blog-section";
import { DemoSection } from '../Components/demo-section/demo-section';
import { FooterSection } from '../Components/footer-section/footer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Register, ClientSection, SiteSection, ClubsSection, LernMore, TestmonalSection, BlogSection,DemoSection,FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Task');
}
