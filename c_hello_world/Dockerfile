FROM gcc:12.2.0 AS dev
WORKDIR /app
COPY ./hello.c .
RUN gcc hello.c

FROM ubuntu:20.04
WORKDIR /app
COPY --from=dev /app/a.out .
CMD ["./a.out"]