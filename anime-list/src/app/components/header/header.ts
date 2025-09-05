import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private avatarUrl: string = "https://i.pinimg.com/736x/06/eb/c5/06ebc50cb4aecee261c340de62277231.jpg"


  get getAvatarUrl(): string {
    return this.avatarUrl;
  }

}
