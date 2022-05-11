import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { RouterTestingModule } from "@angular/router/testing"
import { HeaderComponent } from "./header.component"

describe('HeaderComponent', ()=>{

    let fixture: ComponentFixture<HeaderComponent>
    let app: HeaderComponent

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                RouterTestingModule,
                RouterTestingModule,
                MatMenuModule,
                MatIconModule,
                MatButtonModule,
                MatToolbarModule,
            ]
        }).compileComponents()
    })
    
    beforeEach(()=>{
        fixture = TestBed.createComponent(HeaderComponent)
        app = fixture.componentInstance;
        fixture.detectChanges()
    })

    it('Should be created', () => {
        expect(app).toBeTruthy()
    })

    it('Buttons Should be declared', () => {       
        expect(app.buttons.navigate.length).toBe(4)
        expect(app.buttons.language.length).toBe(3)    
    })




})