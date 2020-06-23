module.exports = {
  apps: [{
    name: 'pgpcccoronanalysispjct',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-87-196-93.compute-1.amazonaws.com',
      key: '/home/rakesh/rak/coronaKeypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rvishwan/PGPCCCoronaAnalysisPjct.git',
      path: '/home/ubuntu/gitrepofolder',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
