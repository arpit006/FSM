import {Component, Injectable, OnInit} from '@angular/core';
import {CanvasService} from "./canvas.service";

@Component({
    moduleId:module.id,
    selector:'my-canvas',
    templateUrl:'canvas.component.html',
})

@Injectable()
export class CanvasComponent implements OnInit{
    showPublish:boolean=false;
    showLoader:boolean=false;

    ngOnInit(): void {
        this.canvasService.initCanvas();
        this.canvasService.renderWelcomePage();
    }

    constructor( private canvasService:CanvasService) {
        this.canvasService.showPublishEmitter.subscribe((value)=>{this.showPublish=value;});
        this.canvasService.showLoaderEmitter.subscribe((value)=>{this.showLoader=value;});
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

    changeZoomLevel(value:number):void{
        this.canvasService.changeZoomLevel(value);
    }

    publishDecision(decision:boolean):void {
        this.canvasService.publishDecision(decision);
    }
}