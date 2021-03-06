import { Component, OnInit, Input } from '@angular/core';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() bpm: number;
  @Input() playing: boolean;
  @Input() togglePlayEvent: any;

  constructor(private es: EventsService) {}

  ngOnInit() {
  }

  emitPlay() { this.es.togglePlayEvent.emit() }
}
