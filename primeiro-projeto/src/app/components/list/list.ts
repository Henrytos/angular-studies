import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User{
  username: string;
  id: number;
}

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  private readonly list = signal([] as User[]);
  private lastIndex = 0;

  inputValue = "";
  idValue=0;
  usernameUpdatedValue="";
  
  public get getList() {
    return this.list();
  }


  public removeUser(id: number) {
    this.list.update(list => list.filter(u => u.id !== id));
    }

    public updateUser(){
      this.list.update(list=>{
        
        list.map(u=>{
          if(u.id==this.idValue){
            u.username=this.usernameUpdatedValue;
          }
        })

        return list;
      })

      this.usernameUpdatedValue = "";
      this.idValue = 0;
    }

    public addUser() {
      this.list.update(list=> [{username: this.inputValue, id: this.lastIndex+1}, ...list])
      this.inputValue = "";
      this.lastIndex++;
    }

}
