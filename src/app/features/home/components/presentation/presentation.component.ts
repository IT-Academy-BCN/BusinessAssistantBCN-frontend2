
import { Component, ElementRef, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit,OnDestroy {


  listener:any;
  
  @ViewChild('asImage1') image1!:ElementRef;

  constructor(public router: Router,
              private renderer2:Renderer2) {

}

ngOnInit(): void {
  this.listener = this.renderer2.listen('window', 'scroll', ()=>{
    let scroll = window.scrollY;
    const image1 = this.image1.nativeElement;
    image1.style.backgroundPositionY  = `${scroll/2}px` ;

  });



      
  // let scroll = window.scrollY;
  // const image1= this.image1.nativeElement;
  // image1.style.backgroundPositionY  = '' ;
  // console.log(scroll)

}




  scrool(){
    let scroll = window.scrollY;
    console.log(scroll);
  }


  onClickButtonVirtualAssistantButton = () => {
    this.router.navigate(['virtual-assistant']);
  }

  onClickButtonMyEnvironment = () => {
    this.router.navigate(['my-environment']);
  }

  img(){
    console.log(this.image1);
  }

  

  ngOnDestroy(): void {
    this.listener();
  }

}
