import {Component, Injectable, OnInit} from '@angular/core';
import {CanvasService} from "./canvas.service";

@Component({
    moduleId:module.id,
    selector:'my-canvas',
    templateUrl:'canvas.component.html',
    styleUrls: ['canvas.component.css']
})

@Injectable()
export class CanvasComponent implements OnInit{
    showPublish:boolean;
    ngOnInit(): void {
        this.showPublish = this.canvasService.showPublish;
        this.canvasService.initCanvas();
        this.canvasService.renderWelcomePage();
    }

    constructor( private canvasService:CanvasService) {
    }

    zoomIn():void {
        this.canvasService.zoomIn();
    }
    zoomOut():void {
        this.canvasService.zoomOut()
    }
    zoomReset():void {
        this.canvasService.zoomReset();
    }

    zoom(e):boolean {
    return this.canvasService.zoom(e);
    }
    publish(decision:boolean):void {
        if(decision === true){

        }
        else {

        }
    }
}