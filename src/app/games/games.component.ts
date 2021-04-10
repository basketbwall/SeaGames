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
        image: "assets/league.webp",
        name: "League Of Legends",
        platforms: ["PC", "Mobile"],
        tags: ["Competitive Multiplayer"],
        rating: 5
      },
      {
        image: "assets/csgo.jfif",
        name: "CS:GO",
        platforms: "PC",
        tags: ["Competitive Multiplayer"],
        rating: 4
      },
      {
        image: "assets/roblox.jpg",
        name: "Roblox",
        platforms: "PC",
        tags: ["Adventure", "Action"],
        rating: 5
      }
    ];
  }

  ngOnInit(): void {
  }

}
