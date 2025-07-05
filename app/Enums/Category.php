<?php

namespace App\Enums;

enum Category: string
{
    case NationalVisaRequestForm = 'national-visa-request-form';
    case PassportPhotograph = 'passport-photograph';
    case Passport = 'passport';
    case ProofOfAccommodation = 'proof-of-accommodation';
}
