#!/usr/bin/env node
const build = require('./build')
const serve = require('./serve')
const capitano = require('capitano')
const pkg = require('../package.json')
const getData = require('./data')
const webpack = require('./webpack')
const mkdirp = require('mkdirp-then')

const getLandrConfig = (gitDir) => {
  return require(`${gitDir}/../landr.conf.js`)
}

capitano.command({
  signature: '*',
  description: 'Run dev server',
  action: async () => {
    try {
      // console.log('hii')
      const data = await getData()
      const landrConfig = getLandrConfig(data.gitDir)
      const config = webpack(Object.assign({
        env: 'development',
        distDir: `/dist`
      }, landrConfig),
      Object.assign(data, {
        landrConfig
      })
      )
      return serve(config)
    } catch (error) {
      throw error
    }
  }
})

capitano.command({
  signature: 'build',
  description: 'Build static site',
  action: async () => {
    try {
      const data = await getData()
      const distDir = `${process.env.HOME}/landr/${data.repository.owner.login}/${data.repository.name}`
      await mkdirp(distDir)
      await build(webpack({
        env: 'production',
        distDir: distDir
      }, data))
      console.log(`Site built to ${distDir}`)
    } catch (error) {
      throw error
    }
  }
})

capitano.run(process.argv, error => {
  if (error != null) {
    throw error
  }
})