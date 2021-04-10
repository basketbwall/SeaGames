import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gamesList: any;

  constructor() {
    this.gamesList = [
      {
        name: "League Of Legends",
        tags: ["MOBA", "Fighter"],
      },
      {
        name: "CS:GO",
        tags: ["FPS", "Shooter"],
      },
      {
        name: "Roblox",
        tags: ["MOBA", "Fighter"],
      }
    ];
  }

  ngOnInit(): void {
  }

}
