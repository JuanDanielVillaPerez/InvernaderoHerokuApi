'use strict'

const Route = use('Route')

Route.post('/login','AuthController.login')
Route.post('/users','UserController.store')


Route.group(()=>{
    
    Route.get('/usr','UserController.index')

    Route.get('/valores','ValoreController.index')
    Route.get('/lastvalores','ValoreController.indexlast')

    Route.get('/temp','ValoreController.temperatura')
    Route.get('/lastemp','ValoreController.lastemperatura')

    Route.get('/pir','ValoreController.pir')
    Route.get('/lastpir','ValoreController.lastpir')

    Route.get('/humesuelo','ValoreController.humedadsuelo')
    Route.get('/lasthumesuelo','ValoreController.lasthumedadsuelo')

    Route.get('/humedad','ValoreController.humedad')
    Route.get('/lasthumedad','ValoreController.lasthumedad')

    Route.get('/graphtemp','ValoreController.graphtemp')
    Route.get('/graphume','ValoreController.graphume')

    Route.get('/mostemp','ValoreController.mostemp')
    Route.get('/worstemp','ValoreController.worstemp')

    Route.get('/mosthumedad','ValoreController.mosthumedad')
    Route.get('/worsthumedad','ValoreController.worsthumedad')

    Route.get('/seco','ValoreController.seco')
    Route.get('/humedo','ValoreController.humedo')

    Route.get('/detecta','ValoreController.detecta')
    Route.get('/nodetecta','ValoreController.nodetecta')
}).middleware('auth')