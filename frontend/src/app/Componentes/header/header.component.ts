import { Component } from '@angular/core';

@Component({
  selector: 'newHeader',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

const menuMobile = document.querySelector(".container__header__mobile");
const openMenuMobile = document.querySelector("#open__menu");
const closeMenuMobile = document.querySelector("#close__menu");

const desktopLinks = document.querySelectorAll('.container__header a[href^="#"]')
const mobileLinks = document.querySelectorAll('.container__header a[href^="#"]')

const allMyLinks = [...desktopLinks, ...mobileLinks];
