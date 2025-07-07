import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\API\V1\DossierFileUploadController::upload
* @see app/Http/Controllers/API/V1/DossierFileUploadController.php:21
* @route '/api/v1/dossier/file-upload'
*/
export const upload = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ['post'],
    url: '/api/v1/dossier/file-upload',
}

/**
* @see \App\Http\Controllers\API\V1\DossierFileUploadController::upload
* @see app/Http/Controllers/API/V1/DossierFileUploadController.php:21
* @route '/api/v1/dossier/file-upload'
*/
upload.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\V1\DossierFileUploadController::upload
* @see app/Http/Controllers/API/V1/DossierFileUploadController.php:21
* @route '/api/v1/dossier/file-upload'
*/
upload.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\API\V1\DossierFileDeleteController::deleteMethod
* @see app/Http/Controllers/API/V1/DossierFileDeleteController.php:20
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
export const deleteMethod = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ['delete'],
    url: '/api/v1/dossier/file-delete/{dossier_file}',
}

/**
* @see \App\Http\Controllers\API\V1\DossierFileDeleteController::deleteMethod
* @see app/Http/Controllers/API/V1/DossierFileDeleteController.php:20
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
deleteMethod.url = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dossier_file: args }
    }

    if (Array.isArray(args)) {
        args = {
            dossier_file: args[0],
        }
    }

    const parsedArgs = {
        dossier_file: args.dossier_file,
    }

    return deleteMethod.definition.url
            .replace('{dossier_file}', parsedArgs.dossier_file.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\API\V1\DossierFileDeleteController::deleteMethod
* @see app/Http/Controllers/API/V1/DossierFileDeleteController.php:20
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
deleteMethod.delete = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const file = {
    upload,
    delete: deleteMethod,
}

export default file