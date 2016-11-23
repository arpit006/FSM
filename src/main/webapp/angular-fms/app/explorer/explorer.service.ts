import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Country} from "./country/country";
import {Layout} from "../layout/layout";
import {DataService} from "../util/data.service";
import {LayoutService} from "../layout/layout.service";
import {CanvasService} from "../canvas/canvas.service";

@Injectable()
export class ExplorerService{
    constructor(private dataService:DataService,
                private layoutService:LayoutService,
                private canvasService:CanvasService){
    }

    getCountries():Observable<Country[]>{
        return this.dataService.getCountries() ;
    }

    drawLayout(floorId):void{
        this.getLayoutData(floorId).
        subscribe((layoutData)=>{
            let layout:Layout = this.layoutService.getLayout(layoutData);
            this.canvasService.renderLayout(layout);
        });

    }
    getLayoutData(floorId:number):Observable<any>{
        return this.dataService.getLayoutData(floorId);
    }
}