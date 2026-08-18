pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out DCosmetics source code...'
            }
        }

        stage('Dependencies') {
            steps {
                echo 'Preparing build environment...'
                bat 'python --version'
            }
        }

        stage('Build') {
            steps {
                echo 'Building DCosmetics website...'
                bat 'if exist index.html (echo index.html found) else (exit /b 1)'
                bat 'if exist style.css (echo style.css found) else (exit /b 1)'
                bat 'if exist script.js (echo script.js found) else (exit /b 1)'
                echo 'Website build validation completed successfully.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated website tests...'
                bat 'python -m unittest tests\\test_website.py'
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
            echo 'DCosmetics CI Pipeline completed successfully!'
        }

        failure {
            echo 'DCosmetics CI Pipeline failed.'
        }
    }
}