<?php

namespace App\Enums;

enum Category: string
{
    case General = 'general';
    case NationalVisaRequestForm = 'national-visa-request-form';
    case Passport = 'passport';
    case PassportPhotograph = 'passport-photograph';
    case ProofOfAccommodation = 'proof-of-accommodation';
}
