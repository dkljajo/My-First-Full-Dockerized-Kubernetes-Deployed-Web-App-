🚀 Full Dockerized & Kubernetes-Deployed Single Page Application
Overview

This repository demonstrates an end-to-end DevOps workflow for containerizing and deploying a Single Page Application (SPA) using Docker, Kubernetes, and Kind (Kubernetes in Docker) in a local development environment.

The project covers:

Building a production-ready Docker image

Running a local Kubernetes cluster with Kind

Deploying workloads using Kubernetes manifests

Exposing services for local access

Debugging and operational best practices

This setup closely mirrors real-world Kubernetes development and is suitable for learning, experimentation, and portfolio demonstration.

🧱 Architecture
graph TD
  A[Developer Workstation] --> B[Docker Image Build]
  B --> C[Kind Kubernetes Cluster]
  C --> D[Kubernetes Deployment]
  D --> E[Pod: SPA + NGINX]
  E --> F[Kubernetes Service]
  F --> G[localhost Access]

🛠 Tech Stack

Frontend: HTML / CSS / JavaScript (SPA)

Web Server: NGINX

Containerization: Docker

Orchestration: Kubernetes

Local Cluster: Kind (Kubernetes in Docker)

CLI Tools: kubectl, docker, kind

📁 Project Structure
project-root/
├── spa/
│   ├── index.html
│   ├── styles.css
│   └── Dockerfile
├── deployment.yaml
├── service.yaml
└── README.md

🐳 Docker
Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html


This image:

Uses a lightweight NGINX Alpine base

Serves static SPA content

Is optimized for fast startup and low resource usage

Build Image
docker build -t spa:latest ./spa

☸️ Kubernetes
Deployment (deployment.yaml)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spa-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: spa
  template:
    metadata:
      labels:
        app: spa
    spec:
      containers:
        - name: spa-container
          image: spa:latest
          ports:
            - containerPort: 80

Service (service.yaml)
apiVersion: v1
kind: Service
metadata:
  name: spa-service
spec:
  type: NodePort
  selector:
    app: spa
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080


The service exposes the application locally via NodePort for easy testing.

🚀 Deployment Workflow
1️⃣ Create Kind Cluster
kind create cluster --name spa-cluster

2️⃣ Load Docker Image into Kind
kind load docker-image spa:latest --name spa-cluster

3️⃣ Deploy Kubernetes Resources
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

4️⃣ Verify Deployment
kubectl get pods
kubectl get services

5️⃣ Access Application
http://localhost:30080

🧪 Testing & Debugging

Useful operational commands:

kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl get events

⚠️ Common Issues & Troubleshooting
Docker Permission Issues
sudo usermod -aG docker $USER
newgrp docker

Kubernetes Context Issues
kubectl config get-contexts
kubectl config use-context kind-spa-cluster

Pod Stuck in Pending

Ensure the Docker image is loaded into Kind

Verify image name and tag match the deployment

📸 Screenshots

Screenshots documenting the full lifecycle (Docker build, Kubernetes resources, running app):

./1.png
./5.png
./10.png
./20.png
./80.png
./84.png
./86.png
./K8s.png
./nodovi.png
./yaml.png
./docker.png
./docker-run.png
./deploy.png
./web-radi.png

🎯 Key Learnings

Docker image lifecycle and optimization

Kubernetes core objects (Pod, Deployment, Service)

Local Kubernetes development using Kind

Debugging containerized workloads

Infrastructure-as-Code fundamentals

👤 Author

D4v1d Klj4j0
🚀 Aspiring DevOps Engineer
🐳 Docker | ☸️ Kubernetes | 🌐 Cloud-Native Technologies
