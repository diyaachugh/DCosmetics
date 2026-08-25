pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out DCosmetics source code...'
                checkout scm
            }
        }

        stage('Dependencies') {
            steps {
                echo 'Preparing build environment...'
                sh 'python3 --version'
            }
        }

        stage('Build') {
            steps {
                echo 'Building DCosmetics website...'
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'
                sh 'test -f Dockerfile'
                echo 'Website and Docker configuration validation completed successfully.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated website tests...'
                sh 'python3 -m unittest tests/test_website.py'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building DCosmetics Docker image...'
                sh 'docker build -t dcosmetics:latest .'
            }
        }

        stage('Kubernetes Deploy') {
            steps {
                echo 'Deploying DCosmetics to Kubernetes...'
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
                sh 'kubectl rollout status deployment/dcosmetics'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving app.py artifact...'
                archiveArtifacts artifacts: 'app.py', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'DCosmetics CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'DCosmetics CI/CD Pipeline failed.'
        }
    }
}
