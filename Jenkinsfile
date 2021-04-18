pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Run') {
            steps {
                echo "Run docker image"
                script {
                    pipelineContext.dockerContainer = pipelineContext.dockerImage.run()
                }
            }
        }
    }
}
