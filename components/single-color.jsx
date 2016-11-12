import React from 'react'

export default ({ name, r=0, g=0, b=0 }) =>
  <div className="single-color" style={{
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  }}>
    Color: <span className="color-name">{name}</span>
    CSS: <span className="color-name-hex">#{
      [r, g, b]
        .map(channel => {
          const str = channel.toString(16)
          if (str.length === 1)
            return `0${str}`
          return str
        })
        .join('')
      }</span>
  </div>