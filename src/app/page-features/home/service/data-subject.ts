import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SubjectService {
    constructor() { }
    public breadcrumb$ = new BehaviorSubject({page:"",pageChild:""});

}