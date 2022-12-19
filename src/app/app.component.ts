
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, AbstractControl, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';

export interface Fruit {
  name: string;
  invalid:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  it=false;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
   public fruits: Fruit[] =[] ;
   public fruits2: Fruit[] =[] ;
   public fruits3: Fruit[] =[] ;

  push: any;


  add(event: MatChipInputEvent): void {
    
    if (event.value!='' && event.value.length != 0 && event.value!=' ' ){
    if (this.validateEmail(event.value)){
      const value = (event.value || '').trim();
      const value2 = (event.value || '').trim();
      // Add our fruit
      if (value && value!='') {
        this.fruits.push({name: value,invalid: false });
        event.chipInput!.clear();
        this.it=false;
      // Clear the input value
    }
  
  }
    else{
   this.fruits.push({  name: event.value, invalid: true });
     event.chipInput!.clear();
      this.it=true;
          
            
           }
        
         
            
     

  }
  }
 ///////////

 add2(event: MatChipInputEvent): void {
    
  if (event.value!='' && event.value.length != 0 && event.value!=' ' ){
  if (this.validateEmail(event.value)){
    const value3 = (event.value || '').trim();
    // Add our fruit
    if (value3 && value3!='') {
      this.fruits3.push({name: value3,invalid: false });
      event.chipInput!.clear();
      this.it=false;
    // Clear the input value
  }

}
  else{
 this.fruits3.push({  name: event.value, invalid: true });
   event.chipInput!.clear();
    this.it=true;
        
          
         }
      
       
          
   

}
}
//////
  private validateEmail(email:any) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  remove(fruit: Fruit): void {
    const index1 = this.fruits2.indexOf(fruit);
    const index = this.fruits.indexOf(fruit);
    const index2 = this.fruits3.indexOf(fruit);


    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    if (index1 >= 0) {
    
      this.fruits2.splice(index1, 1);
    }
    if (index2 >= 0) {
    
      this.fruits3.splice(index2, 1);
    }
  }


}


