import{Component} from '@angular/core';
import { TSMap } from 'typescript-map';

@Component({

    templateUrl : './assignment.two.html',
    styles : ['.']
})

export class AssignmentTwoComponent{
   
    textParam: any = " ";
    tempValue :boolean;
    counter : number;
    timeStamp: any[] = [];
    buttonClicks:number;
    ngOnInit(){
        this.tempValue = false ;
        this.counter = 1;
        this.buttonClicks = 0;
    }
    
    textStyle() : any {
        let myStles = {
            'color' : '#cc0066',
            'margin' : '10px 0 0 500px',

        }
        return myStles;
    }

    buttonStyle() : any {
        let buttonStyle = {
            'margin' : '10px 0 0 500px',
        }
        return buttonStyle;
    }

    displayButtonClick(event: Event): void {
        console.log(event.timeStamp);
         this.timeStamp.push(event.timeStamp);
         ((this.counter % 2) == 0)? this.tempValue = true : this.tempValue = false ;
         this.counter++;
         this.buttonClicks++;
         this.textParam = " '\Secret Password = tune\' ";
    }
}