import React from 'react';
import {shallow} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import {LoadingIndicator as Dots} from '../Dots';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('DotsIndicator', () => {
	it('should render without problems', () => {
		const wrapper = shallow(<Dots ticks={0} />);
        expect(wrapper).to.be.ok;
	});

	it('should use supplied loading message', () => {
      const wrapper = shallow(<Dots ticks={0} message="Nacitam" />);

      expect(wrapper.find('.message').text()).to.equal('Nacitam');
	});

	it('should use default loading message if no supplied', () => {
      const wrapper = shallow(<Dots ticks={0} />);

      expect(wrapper.find('.message').text()).to.equal('Loading');
	});

	describe('ellipsis', () => {
		it('should display one dot after first tick', () => {
			const wrapper = shallow(<Dots ticks={1} />);

			expect(wrapper.find('.ellipsis').text()).to.equal('.');
		});

		 it('should display two dots after second tick', () => {
			 const wrapper = shallow(<Dots ticks={2} />);

			 expect(wrapper.find('.ellipsis').text()).to.equal('..');
		 });

		 it('should display two dots after third tick', () => {
			 const wrapper = shallow(<Dots ticks={3} />);

			 expect(wrapper.find('.ellipsis').text()).to.equal('...');
		 });

		 it('should reset dots count and display no dots after fourth tick', () => {
			 const wrapper = shallow(<Dots ticks={4} />);

			 expect(wrapper.find('.ellipsis').text()).to.equal('');
		 });

	});
});