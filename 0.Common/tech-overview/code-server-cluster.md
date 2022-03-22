

## code-server-cluster

ref : docker-compose.yml https://hub.docker.com/r/linuxserver/code-server

```yml
version: "2.1"
services:
  code-server:
    image: lscr.io/linuxserver/code-server-1
    container_name: code-server-1
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - PASSWORD=password #optional
      - HASHED_PASSWORD= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional
      - PROXY_DOMAIN=code-server.my.domain #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /Users/dokim639/Workspace/Infra/code-server/1:/config
    ports:
      - 8443:8443
    restart: unless-stopped

```

ref : Docker Compose와 버전별 특징 https://meetup.toast.com/posts/277

```sh

# Summary
docker-compose -p code-server-cluster up -d
docker-compose down

# step-1 docker-compose.yml 작성하기  
#   - code-server 3개 정도 만들자. 

---

# step-2 docker-compose 실행

# docker-compose **up** : compose를 실행 
#   -d: 서비스 백그라운드로 실행. (docker run에서의 -d와 같음)
#   --force-recreate: 컨테이너를 지우고 새로 생성.
#   --build: 서비스 시작 전 이미지를 새로 생성
#   -f: 기본으로 제공하는 docker-compose.yml이 아닌 별도의 파일명을 실행할 때 사용

docker-compose -p code-server-cluster up -d

---

# step-3 docker-compose stop, start

# stop, start :  서비스를 멈추거나, 멈춰 있는 서비스를 시작합니다.
docker-compose stop code-server-cluster
docker-compose start

---

# step-4 docker-compose down

# 실행 중인 서비스를 삭제합니다.
# 컨테이너와 네트워크를 삭제하며, 옵션에 따라 볼륨도 같이 삭제할 수 있습니다.

docker-compose down

# options
#     -v, --volume: 볼륨까지 같이 삭제
#         DB 데이터 초기화하는데 용이함
#         모든 설정을 초기화하고 새로 시작하는 데 사용



```

```yml
version: "2.1"
services:
  code-server-1:
    image: lscr.io/linuxserver/code-server
    container_name: code-server-1
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - HASHED_PASSWORD= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional
      - PROXY_DOMAIN=code-server.my.domain #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /Users/dokim639/Workspace/Infra/code-server/1:/config
    ports:
      - 8443:8443
    restart: unless-stopped
  code-server-2:
    image: lscr.io/linuxserver/code-server
    container_name: code-server-2
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - HASHED_PASSWORD= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional
      - PROXY_DOMAIN=code-server.my.domain #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /Users/dokim639/Workspace/Infra/code-server/2:/config
    ports:
      - 8444:8443
    restart: unless-stopped
  code-server-3:
    image: lscr.io/linuxserver/code-server
    container_name: code-server-3
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/London
      - HASHED_PASSWORD= #optional
      - SUDO_PASSWORD=password #optional
      - SUDO_PASSWORD_HASH= #optional
      - PROXY_DOMAIN=code-server.my.domain #optional
      - DEFAULT_WORKSPACE=/config/workspace #optional
    volumes:
      - /Users/dokim639/Workspace/Infra/code-server/3:/config
    ports:
      - 8445:8443
    restart: unless-stopped
```