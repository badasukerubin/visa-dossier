import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DossierListController::__invoke
* @see app/Http/Controllers/DossierListController.php:14
* @route '/api/v1/dossier/list'
*/
const DossierListController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: DossierListController.url(options),
    method: 'get',
})

DossierListController.definition = {
    methods: ['get','head'],
    url: '/api/v1/dossier/list',
}

/**
* @see \App\Http\Controllers\DossierListController::__invoke
* @see app/Http/Controllers/DossierListController.php:14
* @route '/api/v1/dossier/list'
*/
DossierListController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return DossierListController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DossierListController::__invoke
* @see app/Http/Controllers/DossierListController.php:14
* @route '/api/v1/dossier/list'
*/
DossierListController.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: DossierListController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DossierListController::__invoke
* @see app/Http/Controllers/DossierListController.php:14
* @route '/api/v1/dossier/list'
*/
DossierListController.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: DossierListController.url(options),
    method: 'head',
})

export default DossierListController