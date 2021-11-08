FROM python:3

COPY . /python
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r python/requirements.txt

CMD tail -f /dev/null