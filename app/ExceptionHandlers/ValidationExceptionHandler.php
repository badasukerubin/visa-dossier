<?php

namespace App\ExceptionHandlers;

use MarcinOrlowski\ResponseBuilder\BaseApiCodes;
use MarcinOrlowski\ResponseBuilder\Contracts\ExceptionHandlerContract;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

/**
 * Handles ValidationException
 */
final class ValidationExceptionHandler implements ExceptionHandlerContract
{
    /**
     * @param array      $user_config
     * @param \Throwable $ex
     *
     * @throws \MarcinOrlowski\ResponseBuilder\Exceptions\InvalidTypeException
     * @throws \MarcinOrlowski\ResponseBuilder\Exceptions\MissingConfigurationKeyException
     * @throws \MarcinOrlowski\ResponseBuilder\Exceptions\NotIntegerException
     *
     * phpcs:disable Generic.CodeAnalysis.UnusedFunctionParameter.FoundInImplementedInterfaceAfterLastUsed
     */
    public function handle(array $user_config, \Throwable $ex): ?array
    {
        /** @noinspection PhpUnhandledExceptionInspection */
        $default_config = [
            RB::KEY_API_CODE  => BaseApiCodes::EX_VALIDATION_EXCEPTION(),
            RB::KEY_HTTP_CODE => HttpResponse::HTTP_UNPROCESSABLE_ENTITY,
        ];

        $config = array_replace($default_config, $user_config);

        return $config;
    }

} // end of class
