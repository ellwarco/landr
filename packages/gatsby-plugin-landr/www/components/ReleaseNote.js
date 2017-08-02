import React from 'react';
import ReactLink from 'gatsby-link';
import { Text, Column, Code, Link } from 'rebass';

export default ({ repo }) => {
  const latestRelease = repo.releases[0];
  return (
    <Column py={3} bg='gray9' color='white'>
      <Text center>
        <Code>
          <Link
            color='white'
            href={latestRelease.html_url}
            target="_blank"
          >
          {latestRelease.tag_name.substring(
            latestRelease.tag_name.indexOf('@') + 1
          )}
          </Link>
        </Code>
          &nbsp;-&nbsp;
        <Link
          color='white'
          is={ReactLink}
          to="/changelog">
          See what&#39;s new!
        </Link>
      </Text>
    </Column>
  );
};