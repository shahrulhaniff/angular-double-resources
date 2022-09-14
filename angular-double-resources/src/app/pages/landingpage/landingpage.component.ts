import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }


  infoFetched = false;
  tajukbuku = 'No Data';
  datab=null;
  datab2=null;


  ngOnInit(): void {
    this.displayData();
    this.displayData2();
  }

  displayData(){
    this.userService.getAllBooks().subscribe((response) => {
      if (response.success === 1) {
        if (response.data.length > 0) {
          this.infoFetched = true;
        }
        this.datab = response.data;
        console.log(response.data);
        console.log(response.data["1"].title);
      }
    });
  }

  
  displayData2(){
    this.userService.getAllBulus().subscribe((response) => {
      if (response.success === 1) {
        if (response.data.length > 0) {
          this.infoFetched = true;
        }
        this.datab2 = response.data;
        console.log(response.data);
        console.log(response.data["0"].meowname);
      }
    });
  }

}
