```bash
  sudo docker build -t ms-payment .
```

```bash
  sudo docker run -p 50053:50053 ms-payment
```

```bash
  sudo docker stop $(sudo docker ps -a | grep "ms-payment" | awk '{print $1}')
```