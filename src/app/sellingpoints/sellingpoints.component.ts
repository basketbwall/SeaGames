import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellingpoints',
  templateUrl: './sellingpoints.component.html',
  styleUrls: ['./sellingpoints.component.css']
})
export class SellingpointsComponent implements OnInit {

  sellingpoints = [{
    title: 'Games', sentence: 'Our wide array of games of all consoles helps you explore with no limitations.'},
    {
      title: 'Reviews', sentence: 'User-inputed reviews of games let gamers know how well a game would suit them.'
    }, {
      title: 'Search', sentence: 'Our easy-to-use search engine helps you find the perfect game for your needs.'
    },
    { title: 'Quiz', sentence: 'Take our short quiz to discover games based on your tastes.' }];


  constructor() { }

  ngOnInit(): void {
  }

}
