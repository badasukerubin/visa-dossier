<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dossier_dossier_file', function (Blueprint $table) {
            $table->id();

            $table
                ->foreignUlid('dossier_id')
                ->index()
                ->references('id')
                ->on('dossiers');

            $table
                ->foreignUlid('dossier_file_id')
                ->index()
                ->references('id')
                ->on('dossier_files');

            $table->timestamps();

            $table->unique(['dossier_id', 'dossier_file_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dossier_dossier_file');
    }
};
