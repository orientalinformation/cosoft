<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CryosoftServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\App\Cryosoft\ValueListService::class, function ($app) {
            return new \App\Cryosoft\ValueListService();
        });

        $this->app->singleton(\App\Cryosoft\UnitsConverterService::class, function ($app) {
            return new \App\Cryosoft\UnitsConverterService();
        });

        $this->app->singleton(\App\Cryosoft\EquipmentsService::class, function ($app) {
            return new \App\Cryosoft\EquipmentsService();
        });

        $this->app->singleton(\App\Cryosoft\DimaResultsService::class, function ($app) {
            return new \App\Cryosoft\DimaResultsService();
        });

        $this->app->singleton(\App\Cryosoft\EconomicResultsService::class, function ($app) {
            return new \App\Cryosoft\EconomicResultsService();
        });

        $this->app->singleton(\App\Cryosoft\StudyService::class, function ($app) {
            return new \App\Cryosoft\StudyService();
        });

        $this->app->singleton(\App\Cryosoft\CheckControlService::class, function ($app) {
            return new \App\Cryosoft\CheckControlService();
        });

        $this->app->singleton(\App\Cryosoft\CalculateService::class, function ($app) {
            return new \App\Cryosoft\CalculateService();
        });
    }

}
