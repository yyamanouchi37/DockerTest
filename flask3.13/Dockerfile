FROM python:3.13.0a2-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "run.py"]
EXPOSE 5000