Vue.component('main-system-bar', {
    template: `
    <v-system-bar color="rgba(196, 218, 201, 0.5)" class="font-weight-black" style="height: 50px;" app>
        <v-row aline="center">
            <v-col cols="6" align-self="center">
                <div style="padding-left: 10px;">
                    <slot></slot>
                </div>
            </v-col>
            
            <v-col cols="6" class="text-right" @click.stop="drawer_local = !drawer_local">
                <v-btn rounded small plain>
                    <span style="font-weight: bold;">メニュー</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-system-bar>
    `,
    props: ['drawer'],
    computed: {
        drawer_local: {
            get() { return this.drawer; },
            set(_value) { this.$emit("change-drawer", _value); }
        }
    }
})