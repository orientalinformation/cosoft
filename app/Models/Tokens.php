<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ID_TOKENS
 * @property int $ID_USER
 * @property string $TOKEN
 */
class Tokens extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'TOKENS';
    /**
     * @var array
     */
    protected $fillable = ['ID_TOKENS', 'ID_USER', 'TOKEN'];

    /**
     * @var string
     */
    protected $primaryKey = 'ID_TOKENS';

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

}
