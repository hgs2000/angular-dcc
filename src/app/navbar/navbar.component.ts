import { Component } from '@angular/core';

@Component({ selector: 'navbar', templateUrl: './navbar.component.html', styleUrls: ['./navbar.component.css'] })
export class NavbarComponent {
    public links = new Array<ALink>()
    constructor() {
        this.links.push(
            new LinkDireto("Inicio", "/"),
            new LinkLinks("Clientes",
                [new LinkDireto("Pessoas", "/cpfs"),
                new LinkDireto("Empresas", "/cnpjs")]
            )
        );
        console.log(this.links)
    }
}

abstract class ALink {
    constructor(private lnome: string) { }

    get nome() { return this.lnome }
    set nome(novo: string) { this.lnome = novo }
}

class LinkDireto extends ALink {
    constructor(lnome: string, private lpath: string) { super(lnome) }
    get path() { return this.lpath }
    set path(novo: string) { this.lpath = novo }
}

class LinkLinks extends ALink {
    constructor(lnome: string, private llinks: Array<LinkDireto>) { super(lnome); }
    get links(): Array<LinkDireto> { return this.llinks }
    set links(novo: Array<LinkDireto>) { this.llinks = novo }
    addLink(novo: LinkDireto) { this.links.push(novo) }

}