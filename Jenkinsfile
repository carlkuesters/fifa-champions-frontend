node {
    ansiColor('xterm') {
        try {
            stage('Checkout') {
                checkout scm
            }
            stage('Install') {
                sh 'npm install'
            }
            stage('Lint') {
                sh 'npm run lint'
            }
            stage('Unit Tests') {
                sh 'npm run test'
            }
            stage('E2E Tests') {
                sh 'npm run e2e'
            }
            stage('AOT Build') {
                sh 'npm run build'
            }
        } finally {
            step([$class: 'GitHubCommitStatusSetter'])
            cleanWs()
        }
    }
}
