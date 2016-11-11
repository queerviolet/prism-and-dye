# TODO
[DONE] init npm
[DONE] add a build script
  [DONE] setup webpack
  [DONE] make a webpack config file, etc.
[DONE] install react
[DONE] install enzyme, etc...
[DONE] write an index.jsx
[DONE] SingleColor component & page (w/ tests)

# Requirements
Prism & Dye — A shop for colors
  Frontend: React
  Compiler: webpack
    babel is the library
    Option: browserify
      browserify index.js -o bundle.js -t stage1,...
      advantage: simplicity
    Option: webpack
      webpack.config.js
      advantage: scalability, configurability
  Testing:
    Test runner: mocha
    Assertion library: chai
    React-specific testing thing: Enzyme
      import {shallow} from 'enzyme'

      const rendered = shallow(<Somecomponent withProp={'hi'} />)
      expect(rendered.find('h1')).to.have.length(1)

Stage 1.
  Single page for a color
  Has some information about the color
  Is the color
  You get a random one when you visit the site
  Logo somewhere


