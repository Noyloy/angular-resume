import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection = 'exp';
  constructor(private route:ActivatedRoute){ }
  
  ngOnInit(){
    this.route.fragment.subscribe(
      (fragment: string)=>{
        this.activeSection = fragment;
      }
    )
  }
}
