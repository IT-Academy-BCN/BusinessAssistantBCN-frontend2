import { animate, state, style, transition, trigger } from "@angular/animations";

export let zoomTitle = 
    trigger('aniTitle',[
        state('inactive', style({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        })),
        state('active', style({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '4',
            backgroundColor: 'whitesmoke',
            position: 'fixed',
            height: '100%',
            width: '100%',
            fontSize: '200%',
            marginTop: '-90px',
            transform: '(-50px,50vh)',
                
        })),

        transition('inactive => active', animate('700ms ease-in')),
        transition('active => inactive', animate('800ms ease')),
])
