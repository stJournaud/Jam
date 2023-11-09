#!/bin/bash

/bin/rm -Rf /var/run/apache2/apache2.pid
/bin/rm -Rf /var/run/apache2.pid
/bin/rm -Rf /var/run/httpd/httpd.pid
/bin/rm -Rf /run/httpd/*

rm -Rf /var/run/rsyslogd.pid
rm -Rf /var/run/php5-fpm.pid
rm -Rf /var/run/crond.pid

[[ -x /bootstrap.sh ]] && /bootstrap.sh &

/usr/sbin/apache2ctl -k start -D FOREGROUND

exec $@
