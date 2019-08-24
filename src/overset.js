const requireComponent = require.context('./locale', true, /[A-Za-z]\w+\.(json)$/);

const overset = {
    default: 'en',
    locale: {},

    install(Vue, options) {
        this.default = options.locale;

        requireComponent.keys().forEach(path => {
            const componentConfig = requireComponent(path);

            this.locale[componentConfig.locale] = componentConfig;
        });

        Vue.directive('no-localize', {
            bind (el, binding, vnode) {
                
            }
        });

        Vue.directive('lcode', {
            bind (el, binding, vnode) {
                el.innerText = overset.locale[overset.default][binding.value];
            }
        });
    }
};

export default overset;