# cosoft
Lumen php and zero c

# Web service constructing

## Install PHP 7 on Debian 8

~~~ text
sudo tar zcvf /root/etc.backup.tar.gz /etc/
x="$(dpkg --list | grep php | awk '/^ii/{ print $2}')"
sudo apt-get --purge remove $x
~~~

**ZSH has problem with above commands**

As  root create a new file under /etc/apt/sources.list.d/php7-dotdeb.list with following content:

~~~ text
deb http://packages.dotdeb.org jessie all
deb-src http://packages.dotdeb.org jessie all
~~~


Import dotdeb gpg key into trusted keystore

~~~ text
wget https://www.dotdeb.org/dotdeb.gpg
sudo apt-key add dotdeb.gpg
rm dotdeb.gpg
~~~


Install PHP7 and stuffs

~~~ text
sudo apt update
sudo apt install php7.0 php7.0-fpm php7.0-gd php7.0-mysql

apt-get install -y libapache2-mod-php7.0
service apache2 restart
~~~


## Install composer

~~~ text
sudo su -
mkdir /opt/composer && cd composer
~~~


Follow instruction from https://getcomposer.org/download/

~~~ text
sudo ln -s /opt/composer/composer.phar /usr/local/bin/composer
composer global require "laravel/lumen-installer"
~~~

## Create a lumen project 

~~~ text
lumen new web_services
~~~

## Test run the server

~~~ text
php -S localhost:8000 -t public
~~~

## Generate models

Patch the generator command(vendor/asamaru7/eloquent-model-generator-for-lumen/src/Command/GenerateModelCommand.php)

~~~ php
    /**
     * Executes the command
     */
    public function fire()
    {
        $config = $this->createConfig();

        $model = $this->generator->generateModel($config);

        $this->output->writeln(sprintf('Model %s generated', $model->getName()->getName()));
    }

    public function handle()
    {
        $this->fire();
    }
~~~


~~~ text
artisan krlove:generate:model StudyEquipment --table-name=study_equipments
~~~

## Generate lumen from swagger

~~~ text
swagger-codegen generate -i ../api_design/api/swagger/swagger.yaml -l lumen -o .
~~~




