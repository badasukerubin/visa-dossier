import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see [serialized-closure]:2
* @route '/api/v1/user/get'
*/
export const get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: get.url(options),
    method: 'get',
})

get.definition = {
    methods: ['get','head'],
    url: '/api/v1/user/get',
}

/**
* @see [serialized-closure]:2
* @route '/api/v1/user/get'
*/
get.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return get.definition.url + queryParams(options)
}

/**
* @see [serialized-closure]:2
* @route '/api/v1/user/get'
*/
get.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: get.url(options),
    method: 'get',
})

/**
* @see [serialized-closure]:2
* @route '/api/v1/user/get'
*/
get.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: get.url(options),
    method: 'head',
})

const user = {
    get,
}

export default user