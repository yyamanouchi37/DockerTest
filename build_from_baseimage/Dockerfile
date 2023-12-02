FROM ubuntu:20.04 AS base
RUN apt update
CMD ["sh", "-c", "echo This is $my_name"]

FROM base AS dev
ENV my_name="test-environment"

FROM base AS prod
ENV my_name="prod-environment"