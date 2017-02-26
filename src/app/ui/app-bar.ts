import { Component } from '@angular/core';

@Component({
    selector: 'app-bar',
    styles: [`
    .app-bar {
        height: 65px;
        margin: 0;
        padding: 5px 30px;
        background-color: #00BCD4;
    }
    .logo {
        color: white;
        font-size: 30px;
        font-weight: 300;
        cursor: pointer;
    }
    .link {
        color: white;
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
    }
    `],
    template: `
    <header class="app-bar row middle-xs">
        <span [routerLink]="['']" class="logo col-xs-10">
            Sticky notes
        </span>
        <nav class="col-xs-2">
            <div class="row middle-xs between-xs">
                <span [routerLink]="['', 'about']" class="link">About</span>
                <span class="link">Sign out</span>
            </div>
        </nav>
    </header>
  `
})

export class AppBar {}
