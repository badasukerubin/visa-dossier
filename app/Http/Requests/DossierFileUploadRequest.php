<?php

namespace App\Http\Requests;

use App\Enums\Category;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class DossierFileUploadRequest
 *
 * @property string $dossier_name
 * @property File $dossier_file_upload
 * @property string|null $category
 */
class DossierFileUploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // todo: architecture test, remove all ds() calls
        ds(10);
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'dossier_name' => [
                'required',
                'string',
                'max:255',
            ],
            'dossier_file_upload' => [
                'required',
                'file',
                'mimes:pdf,png,jpg',
                'max:4096',
            ],
            'category' => [
                'required',
                Rule::enum(Category::class)
            ],
        ];
    }
}
