import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; // to get the random unique id

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  newTopic = '';
  topicList: Topic[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  newTopicSubmit() {
    // console.log(this.newTopic);
    this.topicList.push({
      // id: this.randomUnique,
      id: uuidv4(),
      value: this.newTopic
    });
    this.newTopic = '';
  }
  get randomUnique() {
    return Date.now();
  }

  deleteTopic(topic: Topic) {
    // console.log('delete topic');
    const indexVal = this.topicList.indexOf(topic);
    this.topicList.splice(indexVal, 1);
  }

}

export interface Topic {
  id: (string | number);
  value: string;
  status?: boolean;
}
