<script setup>
import SelectArrowIcon from './SelectArrowIcon.vue'
import {useClickOutside} from '../composables/useClickOutside'
import { ref } from 'vue';

const selectRef = ref(null)

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: null
    },
    label: {
        type: String,
        default: 'Label'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    options: {
        type: Array,
        default: () => []
    },
    defaultOptionText: {
        type: String,
        default: 'Defalut'
    },
    noOptionsText: {
        type: String,
        default: 'The is no options to choose'
    }
})

const emit = defineEmits(['update:modelValue', 'toggle'])

//click outside handler
useClickOutside(selectRef, () => {
    if(props.isActive) {
        emit('toggle')
    }
})
</script>

<template>
    <div ref="selectRef" class="select-wrapper" @click="$emit('toggle')">
        <!-- can be customized -->
        <slot name="label">
            <p class="mr-4">{{ modelValue || label }}</p>
        </slot>
        <SelectArrowIcon :class="{'rotate-180': isActive}" />
        <div 
            class="select-options-wrapper" 
            :class="{'h-0 opacity-0': !isActive}"
        >
            <template v-if="!!options.length">
                <div class="select-option border-b"  @click="$emit('update:modelValue', '')">
                    <p>{{ defaultOptionText }}</p>
                </div>
                <div
                    v-for="option in options" 
                    :key="option"
                    class="select-option"
                    @click="$emit('update:modelValue', option)"
                >
                  <!-- can be customized -->
                    <slot name="option" :item="option">
                        <p>
                            {{ option }}
                        </p>
                    </slot>
                </div>
            </template>
            <template v-else>
                <div class="select-option">
                    <p>{{ noOptionsText }}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>

</style>