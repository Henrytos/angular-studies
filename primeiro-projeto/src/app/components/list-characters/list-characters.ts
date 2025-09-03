import { Component } from '@angular/core';
import { HelloService } from '../../services/hello-service';

@Component({
  selector: 'app-list-characters',
  imports: [],
  templateUrl: './list-characters.html',
  styleUrl: './list-characters.css'
})
export class ListCharacters {

  public characters = []

  constructor(
    private helloService: HelloService
  ) {
    this.helloService.getCharaters.subscribe((data) => {

      console.log(data)
    })
  }




}
