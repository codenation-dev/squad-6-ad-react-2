import React from 'react'

import { Item, List, Year } from './style'

export default function RepoCounter () {
  ;<List key={this.props.year}>
    <Item>
      <span>
        <Year>{this.props.year}</Year> - {this.props.count}{' '}
        <span>repositories</span>
      </span>
    </Item>
  </List>
}
