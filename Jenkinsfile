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
                sh 'python3 --version'
            }
        }

        stage('Build') {
            steps {
                echo 'Building DCosmetics website...'
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'
                echo 'Website build validation completed successfully.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated website tests...'
                sh 'python3 -m unittest tests/test_website.py'
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