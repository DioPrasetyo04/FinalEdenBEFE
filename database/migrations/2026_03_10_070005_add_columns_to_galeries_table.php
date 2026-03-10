<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('galeries', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->string('photo')->nullable()->after('name');
            $table->foreignId('category_id')->nullable()->after('photo')->constrained('categories')->nullOnDelete();
            $table->text('description')->nullable()->after('category_id');
        });
    }

    public function down(): void
    {
        Schema::table('galeries', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropColumn(['name', 'photo', 'category_id', 'description']);
        });
    }
};
