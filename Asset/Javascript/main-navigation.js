Vue.component('main-navigation', {
    template: `
    <v-navigation-drawer v-model="drawer_local" app right color="rgba(196, 218, 201)">

        
        <!-- ▼ Navigation ▼ ------------------------------------------------------------------------------->
        <v-list nav dense>


            <!-- ▼ Home ▼ ------------------------------------------------------------------------------------->
            <v-list-item href="./Home.html">
                <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                <v-list-item-title>ホーム</v-list-item-title>
            </v-list-item>
            <!-- ▲ Home ▲ ------------------------------------------------------------------------------------->

            
            <v-list-item href="./Customer.html">
                <v-list-item-icon><v-icon>mdi-account-circle</v-icon></v-list-item-icon>
                <v-list-item-title>顧客一覧</v-list-item-title>
            </v-list-item>
            <v-list-item href="./Setting.html">
                <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
                <v-list-item-title>設定</v-list-item-title>
            </v-list-item>


        </v-list>
        <!-- ▲ Navigation ▲ ------------------------------------------------------------------------------->


    </v-navigation-drawer>
    `,
    props: ['drawer'],
    computed: {
        drawer_local: {
            get() { return this.drawer; },
            set(_value) { this.$emit("change-drawer", _value); }
        }
    }
})