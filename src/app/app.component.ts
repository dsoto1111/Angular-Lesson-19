import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { Character } from './character.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
    people: Character[] = [new Character('Tutu', 30, 'shaman', ['Medicine', 'Counseling', 'Spell Casting']), new Character('Jimmy', 32, 'scout', ['Assassin', 'Outlaw', 'Subtlety'])];

    @ViewChildren('element') element!: QueryList<ElementRef>;

    ngAfterViewInit(): void {
        this.element.forEach(elmn => console.log(elmn.nativeElement));

        this.element.changes.subscribe(item => {
            setTimeout(() => {
                this.people.sort((a, b) => a.age - b.age);
            }, 0);
            console.log(item);
        })
    }

    changeName() {
        this.people[1].name = 'George';
    }

    changeAge() {
        this.people[1].age = 22;
    }

    trackFunction(index: number, character: Character): number {
        return character.age;
    }
}
