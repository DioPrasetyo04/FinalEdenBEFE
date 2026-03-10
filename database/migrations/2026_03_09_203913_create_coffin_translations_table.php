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
        Schema::create('coffin_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coffin_id')->constrained('coffins', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name');
            $table->string('locale');
            $table->text('description');
            $table->text('detail_description');
            $table->unique(['coffin_id', 'locale']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coffin_translations');
    }
};
