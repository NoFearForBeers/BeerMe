import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

declare var Auth0: any;

@Injectable()
export class Auth {
  auth0 = new Auth0({
    domain: 'beer-me.eu.auth0.com',
    clientID: 'S7Vh9sVtrvHE7cfRoJrVqJD4w18Inv7q',
    responseType: 'token',
    callbackURL: 'http://localhost:3000/login-callback'
  });

  private router: Router;
  private userService: UserService;

  constructor(router: Router, userService: UserService) {
    this.router = router;
    this.userService = userService;

    var result = this.auth0.parseHash(window.location.hash);
    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);

      this.auth0.getUserInfo(result.idToken, (err: any, profile: any) => {
        if (err) {
          console.log(err);
        }

        let id = profile.user_id;

        this.userService.getUserById(id).subscribe(resUser => {
          let userToShow = {
            id: resUser.id,
            username: resUser.username,
            firstName: resUser.firstName,
            lastName: resUser.lastName,
            email: resUser.email,
            recipes: resUser.recipes,
            profileImgURL: resUser.profileImgURL,
            forumPoints: resUser.forumPoints
          }

          localStorage.setItem('profile', JSON.stringify(userToShow));
        });


      });
    } else if (result && result.error) {
        alert('error: ' + result.error);
    }
  }

  public login(email: string, password: string) {
    this.auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: email,
      password: password,
    }, function (err: any) {
      if (err) {
        alert('something went wrong: ' + err.message);
      }
    });

  }

  // public googleLogin() {
  //   this.auth0.login({
  //     connection: 'google-oauth2'
  //   }, function (err: any) {
  //     if (err) {
  //       alert('something went wrong: ' + err.message);
  //     }
  //   });
  // }

  public signUp(
      username: string, 
      password: string, 
      firstName: string, 
      lastName: string,
      profileImgURL: string,
      email: string) {
            this.auth0.signup({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                email: username,
                password: password,
            }, (err: any, signUpObj: any) => {
            if (err) {
                alert('something went wrong: ' + err.message);
            } else {
                this.auth0.getUserInfo(signUpObj.idToken, (error: any, profile: any) => {
                if (err) {
                    console.log(err);
                }

          let user = {
            id: profile.user_id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            profileImgURL: profileImgURL || profile.picture,
            email: username,
            recipes: [],
            forumPoints: 0
          };

          console.log(user);

          this.userService.saveUser(user).subscribe(() => {
            console.log('User registered');
            this.router.navigateByUrl('/login');
          });
        });
      }
    });
  };

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    this.router.navigateByUrl('/');
  }

  authenticated() {
    return tokenNotExpired();
  }
}