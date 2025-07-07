import { queryParams, type QueryParams } from './../../wayfinder'
import file from './file'
/**
* @see \App\Http\Controllers\API\V1\DossierListController::list
* @see app/Http/Controllers/API/V1/DossierListController.php:17
* @route '/api/v1/dossier/list'
*/
export const list = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ['get','head'],
    url: '/api/v1/dossier/list',
}

/**
* @see \App\Http\Controllers\API\V1\DossierListController::list
* @see app/Http/Controllers/API/V1/DossierListController.php:17
* @route '/api/v1/dossier/list'
*/
list.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\V1\DossierListController::list
* @see app/Http/Controllers/API/V1/DossierListController.php:17
* @route '/api/v1/dossier/list'
*/
list.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\API\V1\DossierListController::list
* @see app/Http/Controllers/API/V1/DossierListController.php:17
* @route '/api/v1/dossier/list'
*/
list.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: list.url(options),
    method: 'head',
})

const dossier = {
    file,
    list,
}

export default dossier