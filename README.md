# My-First-Full-Dockerized-Kubernetes-Deployed-Web-App-

# 🚀 SPA Deployment with Docker & Kubernetes

This project demonstrates how to containerize and deploy a Single Page Application (SPA) using **Docker**, **Kind (Kubernetes in Docker)**, and **kubectl** — all running on a local environment.

1. Docker - Containerization
Docker is a platform for developing, shipping, and running applications in containers.
Containers are lightweight, portable units that contain all dependencies.
A Dockerfile is used to define instructions to build a container image.
Key commands:
- docker build -t <image-name> .
- docker run -p 8080:80 <image-name>
- docker images / docker ps / docker rm / docker rmi
2. Kubernetes
Kubernetes (K8s) is a container orchestration platform for automating deployment, scaling, and management.
Key concepts:
- Pod: the smallest deployable unit (can contain one or more containers)
- Deployment: manages Pods and ReplicaSets
- Service: abstracts access to a set of Pods
Common commands:
- kubectl get pods/services/deployments
- kubectl apply -f deployment.yaml
- kubectl port-forward svc/<service-name> 8080:80
3. Kind (Kubernetes in Docker)
Kind allows running Kubernetes clusters in Docker containers, ideal for local testing.
Commands:
- kind create cluster --name <name>
- kind delete cluster --name <name>SPA Deployment with Docker & Kubernetes
Troubleshooting:
- Docker daemon permission: use 'sudo usermod -aG docker $USER' then 'newgrp docker'
- Ensure Docker is running before creating a cluster
4. Full Deployment Steps
1. Write a Dockerfile for your SPA (e.g., using Nginx)
2. Build the image: docker build -t webserver .
3. Create deployment.yaml to define K8s resources
4. Start kind cluster: kind create cluster --name my-cluster
5. Load image: kind load docker-image webserver --name my-cluster
6. Apply deployment: kubectl apply -f deployment.yaml
7. Expose service: kubectl port-forward service/webserver-service 8080:80
5. Common Issues
- 'kubectl not found': install it from the official K8s site
- Docker permission errors: fix user group as noted earlier
- Pod stuck in Pending: check if the image is available in kind
- Context errors: ensure 'kubectl config get-contexts' shows your current context

  
![screenshot](./1.png) 
![screenshot](./5.png) 
![screenshot](./10.png) 
![screenshot](./20.png) 
![screenshot](./80.png) 
![screenshot](./84.png) 
![screenshot](./86.png) 
![screenshot](./K8s.png) 
![screenshot](./nodovi.png)
![screenshot](./yaml.png)
![screenshot](./docker.png)
![screenshot](./docker-run.png)
![screenshot](./deploy.png)
![screenshot](./web-radi.png)


---

## 🛠 Tech Stack

- HTML/CSS/JavaScript (SPA)
- Docker
- Kubernetes (via Kind)
- kubectl

---

