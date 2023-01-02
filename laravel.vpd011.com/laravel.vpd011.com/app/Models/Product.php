<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
Створення моделі продукт для праці з таблицею в базі даних
 */
class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'name', 'detail'
    ];
}
