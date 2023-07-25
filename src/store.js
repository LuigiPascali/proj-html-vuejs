import { VueElement, reactive } from "vue";

export const store = reactive(
    {
        selectedIndex: 0,

        navbarVoices: [
            {
                nome: 'home',
                selected: true
            },
            {
                nome: 'about',
                selected: false
            },
            {
                nome: 'services',
                selected: false
            },
            {
                nome: 'work',
                selected: false
            },
            {
                nome: 'articles',
                selected: false
            }
        ],
    }
)