<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ID_FAILED_LOGINS
 * @property int $ID_USER
 * @property string $IP_ADDRESS
 * @property int $ATTEMPTED
 * @property int $FAILDED_COUNT
 */
class FailedLogins extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'FAILED_LOGINS';

    /**
     * @var array
     */
    protected $fillable = ['ID_FAILED_LOGINS', 'ID_USER', 'IP_ADDRESS', 'ATTEMPTED', 'FAILDED_COUNT'];

    /**
     * @var string
     */
    protected $primaryKey = 'ID_FAILED_LOGINS';

    /**
     * Indicates if the model should be timestamped.
     * 
     * @var bool
     */
    public $timestamps = false;

}
