import {Component, OnInit} from '@angular/core';
import {of, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  isLoading = false;
  options!: string[];
  onChange(event: any) {
    console.log(event)
  }

  ngOnInit() {
    of(['Afolabi', "Opakunle", "Oluseun"]).subscribe(
    data => {
      this.isLoading = true
      setTimeout(() => {
        this.options = data
        this.isLoading = false;
      }, 3000)

    }
    )
  }
}
