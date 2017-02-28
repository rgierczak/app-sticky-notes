import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'note-card',
    styles: [require('./note-card.css')],
    template: require('./note-card.html')
})

export class NoteCard {
    @Input() note = {};
    @Output() checked = new EventEmitter();
    
    showCheck: boolean = false;
    
    toggleCheck() {
        this.showCheck = !this.showCheck;
    }

    onChecked() {
        this.checked.next(this.note);
    }
}
