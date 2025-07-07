import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DossierFileDeleteController::__invoke
* @see app/Http/Controllers/DossierFileDeleteController.php:19
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
const DossierFileDeleteController = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: DossierFileDeleteController.url(args, options),
    method: 'delete',
})

DossierFileDeleteController.definition = {
    methods: ['delete'],
    url: '/api/v1/dossier/file-delete/{dossier_file}',
}

/**
* @see \App\Http\Controllers\DossierFileDeleteController::__invoke
* @see app/Http/Controllers/DossierFileDeleteController.php:19
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
DossierFileDeleteController.url = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return DossierFileDeleteController.definition.url
            .replace('{dossier_file}', parsedArgs.dossier_file.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DossierFileDeleteController::__invoke
* @see app/Http/Controllers/DossierFileDeleteController.php:19
* @route '/api/v1/dossier/file-delete/{dossier_file}'
*/
DossierFileDeleteController.delete = (args: { dossier_file: string | number } | [dossier_file: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: DossierFileDeleteController.url(args, options),
    method: 'delete',
})

export default DossierFileDeleteController