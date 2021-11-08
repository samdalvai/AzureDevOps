# syntax=docker/dockerfile:1

FROM mysql:5.7 as mysqlDB

RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]

ENV MYSQL_ROOT_PASSWORD=rock

COPY schema.sql /docker-entrypoint-initdb.d

RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]

FROM mysql:5.7

COPY --from=mysqlDB /initialized-db /var/lib/mysql