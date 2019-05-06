var templateOption = null;
var modal = "";
Vue.component('modal-template',{
    template: `<div id="modTemplate">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
        Launch demo modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>`
})
Vue.component('accordion-template',{
    props: ['componentvalue', 'n'],
    template: `<div id="accTemplate">
        <div class="accordion" id="accordionExample">
            <div class="card" v-for="n in componentvalue">
                <div class="card-header text-center" :id="'heading' + n">
                    <h2 class="mb-0">
                        <a class="btn btn-link" type="button" data-toggle="collapse" :href="'#collapseOne' + n" aria-expanded="false" :aria-controls="'collapseOne' + n">
                        Collapsible Group Item #{{ n }}
                        </a>
                    </h2>
                </div>

                <div :id="'collapseOne' + n" class="collapse" :aria-labelledby="'headingOne' + n" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
Vue.component('tabs-template',{
    props: ['componentvalue', 'n'],
    template: `<div id="tabTemplate">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a v-for="(n, index) in componentvalue" :class="{'active' : (index === 0 )}" class="nav-item nav-link" :id="'nav-'+ n +'-tab'" data-toggle="tab" :href="'#nav-' + n" role="tab" :aria-controls="'nav-' + n" aria-selected="true" >Title #{{ n }}</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div v-for="(m, index) in componentvalue" :class="{' show active' : (index === 0 )}" class="tab-pane fade" :id="'nav-'+ m" role="tabpanel" aria-labelledby="nav-home-tab">
             {{ m }}.- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
    </div>
</div>`
})
Vue.component('tabs-ver-template',{
    props: ['componentvalue', 'n'],
    template: `<div id="tabVerTemplate">
    <div class="row">
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a v-for="(n, index) in componentvalue" :class="{'active' : (index === 0 )}" class="nav-link" :id="'v-pills-' + n + '-tab'" data-toggle="pill" :href="'#v-pills-' + n" role="tab" :aria-controls="'v-pills-' + n"  aria-selected="true">Title # {{ n }}</a>
            </div>
        </div>
        <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
                <div v-for="(m, index) in componentvalue" :class="{' show active' : (index === 0 )}" class="tab-pane fade" :id="'v-pills-' + m" role="tabpanel" :aria-labelledby="'v-pills-'+ m +'-tab'">
                    {{ m }}.- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>
        </div>
</div>`
})
Vue.component('table-template',{
    props: ['numrows', 'numcolumns'],
    template: `<div id="tableTemplate">
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead class="bg-primary text-white">
                <tr>
                    <th v-for="(columnth, index) in numcolumns" scope="col"> Cabecera # {{ columnth }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowtb, index) in numrows">
                    <td v-for="(columntb, index) in numcolumns">Content #{{ rowtb }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
})
//------------------------------------------------>
var vm = new Vue({
    el: "#app",
    data: {
        title: 'Creador de Componentes',
        typeTemplate:null,
        notIsModal: true,
        quantityComponent: 1,
        qQuantityElement:false,
        showButton: false,
        clickCreate: false,
        showModal: false,
        showAccordion: false,
        showTabsVer: false,
        showAlertGenScript: false,
        showTabs: false,
        showTable: false,
        objectelement: [],
        typeTemplateAct: '',
        scriptValue: '',
        titleTooltip: 'Click para copiar',
        tableRow: 1,
        tableColumn: 1,
        componentList:[
            {component: 'Acordiones', valueI : 1},
            {component: 'Pestañas / Tabs', valueI : 2},
            {component: 'Pestañas / Verticales', valueI : 3},
            {component: 'Tablas', valueI : 4},
            {component: 'Ventanas Modales', valueI : 5}
        ]
    },
    methods: {
        changeTemplate: function(){
            var ct = this           
            ct.refreshTemplate()
            ct.clickCreate= false
            if(ct.typeTemplate != 5){
                ct.notIsModal = true;
                if(ct.typeTemplate != 4){
                    ct.qQuantityElement = true
                }else{
                    ct.qQuantityElement = false
                }
                ct.showButton = true;
            }else{
                ct.notIsModal = false
                ct.showButton = true;
            }
        },
        generateTemplate: function(){
            var gt = this                        
            document.getElementById('btn-gen-script').disabled = false
            switch (gt.typeTemplate) {
                case 1:                    
                    gt.showAccordion = true
                    gt.componentvalue = parseInt(gt.quantityComponent)
                break;

                case 2:
                    gt.showTabs = true
                    gt.componentvalue = parseInt(gt.quantityComponent)
                break;

                case 3:
                    gt.showTabsVer = true
                    gt.componentvalue = parseInt(gt.quantityComponent)
                break;

                case 4:
                    gt.showTable = true
                    
                    gt.numcolumns = parseInt(gt.quantitiesColumnsTable);
                    gt.numrows = parseInt(gt.quantitiesRowsTable);
                break;

                case 5:
                    gt.showModal = true
                break;
                
            }
            
            gt.showAlertGenScript = true
            // document.getElementById("content").innerHTML = modal
            // gt.content = modal
            
        },
        refreshTemplate: function(){
            var rt = this
            rt.showModal = false
            rt.showAccordion = false
            rt.showTabs = false
            rt.showTabsVer = false
            rt.showTable = false
            rt.componentvalue = 1
            rt.quantityComponent = 1
            rt.numcolumns = 1
            rt.numrows = 1
            rt.quantitiesColumnsTable = 1
            rt.quantitiesRowsTable = 1
            document.getElementById('btn-gen-script').disabled = true
        },
    },

    mounted: function() {
        this.clickCreate = false;
        this.showAccordion = false;
        this.showModal = false;
        this.showAlertGenScript = false;
        this.showTabs = false;
        this.showTable = false;
        document.getElementById('btn-gen-script').disabled = true
    },
});

// document.getElementById("createTemplate").onclick = function () {
// 	vm.$refs.foo.addModal();
// };