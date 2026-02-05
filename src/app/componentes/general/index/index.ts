import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-index',
  imports: [RouterLink, Button, CardModule],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {

}
