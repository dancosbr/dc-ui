<template>
    <button :type="type" v-bind:class="[baseStyle, !disabled ? colorStyle : disabledStyle, sizeStyle]" :disabled="isDisabled">
        <slot></slot>
        <span v-if="badge" class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
        {{ badge }}
        </span>
    </button>
</template>

<script>
    export default {
        props: {
            badge: {
                type: String,
                required: false,
                default: null
            },
            color: {
                type: String,
                required: false,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            type: {
                type: String,
                default: 'submit',
            },
            size: {
                type: String,
                default: 'base'
            }
        },
        computed: {
            baseStyle() {
                return 'font-medium rounded-lg text-center mr-2 mb-2';
            },
            colorStyle() {
                if (this.color === 'alternative') {
                    return 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700';
                } else if (this.color === 'dark') {
                    return 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700';
                } else if (this.color === 'light') {
                    return 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800';
                } else if (this.color === 'success') {
                    return 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
                } else if (this.color === 'danger') {
                    return 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
                } else if (this.color === 'warning') {
                    return 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900';
                } else if (this.color === 'purple') {
                    return 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900';
                } else {
                    return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
                }
            },
            disabledStyle() {
                if (this.color === 'alternative') {
                    return 'text-gray-300 bg-white border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-400 focus:text-blue-400 dark:bg-gray-500 dark:text-gray-400 dark:border-gray-300 cursor-not-allowed';
                } else if (this.color === 'dark') {
                    return 'text-white bg-gray-500 focus:ring-4 focus:ring-gray-300 dark:bg-gray-500 dark:focus:ring-gray-500 dark:border-gray-400 cursor-not-allowed';
                } else if (this.color === 'light') {
                    return 'text-gray-300 bg-white border border-gray-300 focus:ring-4 focus:ring-blue-300 dark:bg-gray-300 dark:text-white dark:border-gray-300 dark:focus:ring-gray-500 cursor-not-allowed';
                } else if (this.color === 'success') {
                    return 'text-white bg-green-400 focus:ring-4 focus:ring-green-300 dark:bg-green-300 dark:focus:ring-green-500 cursor-not-allowed';
                } else if (this.color === 'danger') {
                    return 'text-white bg-red-400 focus:ring-4 focus:ring-red-300 dark:bg-red-300 dark:focus:ring-red-300 cursor-not-allowed';
                } else if (this.color === 'warning') {
                    return 'text-white bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-300 cursor-not-allowed';
                } else if (this.color === 'purple') {
                    return 'text-white bg-purple-400 focus:ring-4 focus:ring-purple-300 dark:bg-purple-300 dark:focus:ring-purple-300 cursor-not-allowed';
                } else {
                    return 'text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed';
                }
            },
            isDisabled() {
                return this.disabled ? 'disabled' : '';
            },
            sizeStyle() {
                if (this.size === 'xs') {
                    return 'text-xs py-2 px-3';
                } else if (this.size === 'sm') {
                    return 'text-sm py-2 px-3';
                } else if (this.size === 'lg') {
                    return 'text-lg py-3 px-5';
                } else if (this.size === 'xl') {
                    return 'text-xl py-3.5 px-6';
                } else {
                    return 'text-base py-2.5 px-5';
                }
            }
        }
    }
</script>
