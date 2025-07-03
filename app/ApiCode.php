<?php

namespace App;

use MarcinOrlowski\ResponseBuilder\BaseApiCodes;

final class ApiCode extends BaseApiCodes
{
    public const NO_ERROR = 0;

    // Client Errors (100-199)
    public const VALIDATION_ERROR = 100;
    public const UNAUTHORIZED = 101;
    public const NOT_FOUND = 102;

    // Server Errors (200-299)
    public const GENERAL_ERROR = 200;
    public const DATABASE_ERROR = 201;
    public const NOT_ALLOWED = 202;
}
