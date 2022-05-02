FROM ubuntu:20.04

RUN apt-get update -y
RUN apt-get install -y python3-pip

COPY . /app

WORKDIR /app

RUN pip3 install -r config/requirements.txt

ENV FLASK_APP server.py
ENV FLASK_ENV development

EXPOSE 5000

ENTRYPOINT [ "python3" ]

CMD [ "server.py" ]