import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DossierFileUploadController::__invoke
* @see app/Http/Controllers/DossierFileUploadController.php:20
* @route '/api/v1/dossier/file-upload'
*/
const DossierFileUploadController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: DossierFileUploadController.url(options),
    method: 'post',
})

DossierFileUploadController.definition = {
    methods: ['post'],
    url: '/api/v1/dossier/file-upload',
}

/**
* @see \App\Http\Controllers\DossierFileUploadController::__invoke
* @see app/Http/Controllers/DossierFileUploadController.php:20
* @route '/api/v1/dossier/file-upload'
*/
DossierFileUploadController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return DossierFileUploadController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DossierFileUploadController::__invoke
* @see app/Http/Controllers/DossierFileUploadController.php:20
* @route '/api/v1/dossier/file-upload'
*/
DossierFileUploadController.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: DossierFileUploadController.url(options),
    method: 'post',
})

export default DossierFileUploadController