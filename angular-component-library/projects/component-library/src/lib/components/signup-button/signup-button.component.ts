import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'lib-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.scss'],
  animations: [trigger('myTrigger', [
    state('small', style({transform: 'scale(1)'})),
    state('large', style({transform: 'scale(1.4)'})),
    transition('small <=> large', animate('500ms'))
  ])]
})
export class SignUpButtonComponent {

  @Output() numberOfClicks: EventEmitter<number> = new EventEmitter();
  clicks = 0;
  state = 'small';

  handleClick(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.clicks++;
    this.numberOfClicks.emit(this.clicks);
  }
}

//Add button is a good use of button getting bigger on mouse hover and going back
//to normal when user mouse leaves.

//Make sure to make some kind of disabled animation reusable component
// import { trigger, state, style, animate, transition } from '@angular/animations';  
 
// @Component({  
//     selector: 'animation-demo',  
//     template: `  
//           <div class="mybox mx-auto" [@enabledStateChange]="enabledStateChange"></div>    
//           <div class="msgbox mx-auto">{{msg}}</div>  
//       `,  
//   animations: [  
//     trigger('enabledStateChange', [  
//       state( 'default', style({  
//             opacity: 1,  
//         })  
//     ),  
//     state( 'disabled', style({  
//             opacity: 0.5,  
//         })  
//       ),  
//       transition('* => *', animate('300ms ease-out')),  
//     ])  
//   ]  
// })




// check out what this does
// state('original', style({  
//   backgroundColor: '#47748f',  
//   transform: 'scale(1)' 
// })),  
// state('basic', style({  
//   backgroundColor: '#440000',  
//   transform: 'scale(1.4)' 
// })),  
// state('delaying', style({  
//   backgroundColor: '#812170',  
//   transform: 'scale(1.6)' 
// })),  
// transition('* => basic', animate('800ms')),  
// transition('* => original', animate('200ms')),  
// transition('* => delaying', animate('800ms 2000ms ease-out'))  



// MOUSE ENTER AND MOUSE LEAVE EVENTS

  // template: `  
  //       <div class="mymouse mx-auto" (mouseenter)="changeMouseState('hover')" (mousedown)="changeMouseState('press')" 
  //           (mouseleave)="changeMouseState('rest')" [@changeState]="currentState"></div>  
  //   `,  
  // styles: [`  
  //   .mymouse {  
  //       background-color: #5c8f52;  
  //       width: 100px;  
  //       height: 100px;  
  //       border-radius: 200px;  
  //       margin: 6rem;  
  //   }  
  // `],  
  // animations: [  
  //   trigger('changeState', [  
  //       state('rest', style({  
  //           transform: 'scale(1)' 
  //       })),  
  //       state('hover',   style({  
  //           transform: 'scale(1.8)' 
  //       })),  
  //       state('press',   style({  
  //           transform: 'scale(3.0)',  
  //           backgroundColor: '#8f5a7a' 
  //       })),  
  //       transition('rest => hover', animate('400ms ease-in')),  
  //       transition('hover => rest', animate('200ms ease-out')),  
  //       transition('hover => press', animate('400ms ease-in')),  
  //       transition('press => rest', animate('200ms ease-out'))  
  //   ])  


  //background color swapping method
  // animations: [       // metadata array
  //   trigger('toggleClick', [     // trigger block
  //   state('true', style({      // final CSS following animation
  //     backgroundColor: 'green'
  //   })),
  //   state('false', style({
  //     backgroundColor: 'red'
  //   })),
  //   transition('true => false', animate('1000ms linear')),  // animation timing
  //   transition('false => true', animate('1000ms linear'))
  // ])




  ///move a ball around the screen method
  // @Component({
  //   selector: 'app-example',
  //   styles: [
  //     `.ball {
  //       position: relative;
  //       background-color: black;
  //       border-radius: 50%;
  //       top: 200px;
  //       height: 25px;
  //       width: 25px;
  //     }`
  //   ],
  //   template: `
  //   <h3>Arcing Ball Animation</h3>
  //   <button (click)="toggleBounce()">Arc the Ball!</button>
  //   <div [@animateArc]="arc" class="ball"></div>
  //   `,
  //   animations: [
  //     trigger('animateArc', [
  //       state('true', style({
  //         left: '400px',
  //         top: '200px'
  //       })),
  //       state('false', style({
  //         left: '0',
  //         top: '200px'
  //       })),
  //       transition('false => true', animate('1000ms linear', keyframes([
  //         style({ left: '0',     top: '200px', offset: 0 }),
  //         style({ left: '200px', top: '100px', offset: 0.50 }),
  //         style({ left: '400px', top: '200px', offset: 1 })
  //       ]))),
  //       transition('true => false', animate('1000ms linear', keyframes([
  //         style({ left: '400px', top: '200px', offset: 0 }),
  //         style({ left: '200px', top: '100px', offset: 0.50 }),
  //         style({ left: '0',     top: '200px', offset: 1 })
  //       ])))
  //     ])
  //   ]
  // })
  // export class ExampleComponent {
  //   arc: string = 'false';
  
  //   toggleBounce(){
  //     this.arc = this.arc === 'false' ? 'true' : 'false';
  //   }
  // }



  ///// change a material card size and color on mouse hover.. imagine it
  // like pulling a paper out of a drawer, animation presentation of the data
  // animations: [
  //   trigger('changeDivSize', [
  //     state('initial', style({
  //       backgroundColor: 'green',
  //       width: '100px',
  //       height: '100px'
  //     })),
  //     state('final', style({
  //       backgroundColor: 'red',
  //       width: '200px',
  //       height: '200px'
  //     })),
  //     transition('initial=>final', animate('1500ms')),
  //     transition('final=>initial', animate('1000ms'))
  //   ]),
  // ]


  //dynamic add and remove list items animation
//   listItem = [];
// list_order: number = 1;

// addItem() {
//   var listitem = "ListItem " + this.list_order;
//   this.list_order++;
//   this.listItem.push(listitem);
// }
// removeItem() {
//   this.listItem.length -= 1;
// }

// trigger('fadeInOut', [
//   state('void', style({
//     opacity: 0
//   })),
//   transition('void <=> *', animate(1000)),
// ]),


// <h3>Fade-In and Fade-Out animation</h3>

// <button (click)="addItem()">Add List</button>
// <button (click)="removeItem()">Remove List</button>

// <div style="width:200px; margin-left: 20px">
//   <ul>
//     <li *ngFor="let list of listItem" [@fadeInOut]>
//       {{list}}
//     </li>
//   </ul>
// </div>

//enter and leave items animation
// trigger('EnterLeave', [
//   state('flyIn', style({ transform: 'translateX(0)' })),
//   transition(':enter', [
//     style({ transform: 'translateX(-100%)' }),
//     animate('0.5s 300ms ease-in')
//   ]),
//   transition(':leave', [
//     animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
//   ])
// ])
// <h3>Enter and Leave animation</h3>

// <button (click)="addItem()">Add List</button>
// <button (click)="removeItem()">Remove List</button>

// <div style="width:200px; margin-left: 20px">
//   <ul>
//     <li *ngFor="let list of listItem" [@EnterLeave]="'flyIn'">
//       {{list}}
//     </li>
//   </ul>
// </div>