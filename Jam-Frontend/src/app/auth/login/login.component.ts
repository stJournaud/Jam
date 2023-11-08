import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interfaces/credential';
import { IToken } from 'src/app/_interfaces/token';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : ICredential = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    
  }

  onSubmitForm(){
    console.log(this.loginForm);
    this.authService.login(this.loginForm).subscribe(
      res => {
        console.log(res.access_token),
        this.tokenService.saveToken(res.access_token);
      },
      err => console.log(err)
    )
  }

    login() {}
  // login() {
  //   const val = this.loginForm.value;
    
  //   if(val.email && val.password) {
  //     this.authService.login(val.email, val.password)
  //       .subscribe(res => {
  //         console.log("User Logged In");
  //         this.router.navigate(['/home']);
  //       });
  //     }
  // }

}
