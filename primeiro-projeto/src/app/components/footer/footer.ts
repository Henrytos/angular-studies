import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {

  private name: string = "henry";

  public get getName() {
    return this.name
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.name += " franz"
    }, 2000)
  }

}
