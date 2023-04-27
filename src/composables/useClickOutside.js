import { onBeforeMount, onMounted } from "vue"

export function useClickOutside(targetRef, fn, node) {
    if(!targetRef) return
    let listener = (e) => {
        if(e.target === targetRef.value || e.composedPath().includes(targetRef.value)) {
            return
        }

        if(typeof fn == 'function') {
            fn()
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    })

    onBeforeMount(() => {
        window.removeEventListener('click', listener)
    })

    return listener
}