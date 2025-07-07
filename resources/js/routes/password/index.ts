import { queryParams, type QueryParams } from './../../wayfinder'
import confirm from './confirm'
/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::email
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
export const email = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: email.url(options),
    method: 'post',
})

email.definition = {
    methods: ['post'],
    url: '/forgot-password',
}

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::email
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
email.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::email
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
email.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: email.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\NewPasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/NewPasswordController.php:55
* @route '/reset-password'
*/
export const update = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '/reset-password',
}

/**
* @see \Laravel\Fortify\Http\Controllers\NewPasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/NewPasswordController.php:55
* @route '/reset-password'
*/
update.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\NewPasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/NewPasswordController.php:55
* @route '/reset-password'
*/
update.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
export const confirmation = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: confirmation.url(options),
    method: 'get',
})

confirmation.definition = {
    methods: ['get','head'],
    url: '/user/confirmed-password-status',
}

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return confirmation.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: confirmation.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmation.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: confirmation.url(options),
    method: 'head',
})

const password = {
    email,
    update,
    confirmation,
    confirm,
}

export default password