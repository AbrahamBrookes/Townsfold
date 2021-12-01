/**
 * This mixin attempts to take care of the complexities of copying data from the store into the local
 * components state. We rely on some preloading logic in the base app.js wherein you can register any
 * models that you want to preload from the api. Once that data is loaded the app fires off the event
 * 'init-data-loaded', at which point the data has been loaded from the server and into the store. We
 * then use this mixin to trigger copying the model to a local dirty data variable that we can use in
 * our components without worrying about the store.
 *
 * In order to implement this mixin you need to create a 'copyLocal' method on the component which is
 * using this mixin. This allows you to customize the logic that each component needs when loading up
 * its own data.
 */
export default {
    props: {
        id: {
            required: true
        }
    },
    data(){
        return {
            model: {}
        }
    },
    mounted(){
        // run copyLocal when the app declaresit has loaded init data
        this.$root.$on('init-data-loaded', () => {
            if( !this.copyLocal )
                return console.error("you need to implement a copyLocal method on this component in order to use the EditsLocalModelData mixin")

            return this.copyLocal()
        })
        // also run it on mount anyway in case we are loading up the component after page load
        this.copyLocal()
    },
}
