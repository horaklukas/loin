import React from 'react';
import {shallow} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import {LoadingIndicator as Columns} from '../Columns';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('ColumnsIndicator', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Columns ticks={0} />);
        expect(wrapper).to.be.ok;
  });

  it('should use custom color if provided', () => {
    const wrapper = shallow(<Columns ticks={2} color={'red'} />);

    expect(wrapper.find('.column').first()).to.have.style('background-color', 'red');
  });

  describe('columns', () => {
    it('should display no columns after render', () => {
      const wrapper = shallow(<Columns ticks={0} />);

      expect(wrapper.find('.column')).to.have.length(0);
    });

    it('should display one column after first tick', () => {
      const wrapper = shallow(<Columns ticks={1} />);

      expect(wrapper.find('.column')).to.have.length(1);
    });

    it('should display two columns after second tick', () => {
      const wrapper = shallow(<Columns ticks={2} />);

      expect(wrapper.find('.column')).to.have.length(2);
    });

    it('should display two columns after third tick', () => {
      const wrapper = shallow(<Columns ticks={3} />);

      expect(wrapper.find('.column')).to.have.length(3);
    });

    it('should display no columns after fourth tick', () => {
      const wrapper = shallow(<Columns ticks={4} />);

      expect(wrapper.find('.column')).to.have.length(0);
    });

    it('should use maximum columns count if provided', () => {
      const wrapper = shallow(<Columns ticks={6} count={6} />);

      expect(wrapper.find('.column')).to.have.length(6);
    });
  });
});