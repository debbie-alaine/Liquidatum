import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthService]
})
export class HeaderComponent implements OnInit {

    constructor(public router: Router, private auth: AuthService) {

    }

    ngOnInit() {
    }

    public logout() {
        this.auth.logout();
    }

    public onSubmit(searchValue: string) {
        this.router.navigate(['/search'], { queryParams: { value: searchValue } });
    }
}
