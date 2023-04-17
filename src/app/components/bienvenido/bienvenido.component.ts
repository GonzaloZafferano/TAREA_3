import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class BienvenidoComponent  implements OnInit {  
  constructor(private loginService: LoginService, private router:Router) { }
  ngOnInit() {}
  
  logout(){
    this.loginService.desloguear();
    this.router.navigate(['/login']);
  }
}
