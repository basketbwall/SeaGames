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
      { name: "League Of Legends", genre: "MOBA" },
      { name: "CS:GO", genre: "FPS" },
      {name: "Roblox", genre: "Game creation system, massively multiplayer online"}
    ];
  }

  ngOnInit(): void {
  }

}
