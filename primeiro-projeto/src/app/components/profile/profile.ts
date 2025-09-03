import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  private profileUrl = signal("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpKXI8vSC5mYx0YG502nPh6P2TVwvTdIJ5g&s")
  private username = signal("henry")


  public get getProfileUrl(): string {
    return this.profileUrl();
  }

  public get getUsername(): string {
    return this.username();
  }

}
