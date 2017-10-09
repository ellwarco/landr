import React from 'react'
import { Helmet } from 'react-Helmet'
import images from 'images'
import humanize from 'underscore.string/humanize'
import capitalize from 'underscore.string/capitalize'

const pageTitle = (repoName, path) => {
  if (path === '/') {
    return repoName;
  }
  return `${humanize(capitalize(path.replace(/\//g, ' ')))} - ${repoName}`;
}

export default (props) => {
  return(
    <Helmet
      defaultTitle={props.repository.name}
      titleTemplate={`%s | ${pageTitle(
        props.repository.name,
        props.location.pathname
      )}`}
      link={[
        {
          rel: 'icon',
          href: images[`./favicon.ico`],
          type: 'image/x-icon'
        }
      ]}
      meta={[
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:site_name',
          content: props.repository.name
        },
        {
          name: 'og:description',
          content: props.repository.description
        },
        {
          name: 'og:image',
          content: images[`./logo.svg`]
        }
      ]}
    />
  )
}