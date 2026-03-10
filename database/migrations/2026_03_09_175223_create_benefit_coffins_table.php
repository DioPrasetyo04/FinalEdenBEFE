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
        Schema::create('benefit_coffins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coffin_id')->constrained('coffins', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('benefit_id')->constrained('bennefits', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unique(['coffin_id', 'benefit_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('benefit_coffins');
    }
};
