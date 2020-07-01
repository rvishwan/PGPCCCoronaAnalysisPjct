module.exports = {
  apps: [{
    name: 'pgpcccoronanalysispjct',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-236-102-91.compute-1.amazonaws.com',
      key: '/home/rakesh/rak/covid19.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rvishwan/PGPCCCoronaAnalysisPjct.git',
      path: '/home/ubuntu/covid19projectserver',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
