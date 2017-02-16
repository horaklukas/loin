import React from 'react';
import {shallow, mount} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import Timer, {TICK} from '../Timer';

const expect = chai.expect;

chai.use(chaiEnzyme());
jest.useFakeTimers();

describe('Timer', () => {
	it('should render wrapped component without problems', () => {
		const Fake = () => (<div />);
		const TimedComponent = Timer(Fake);
		const wrapper = shallow(<TimedComponent />);

		expect(wrapper).to.be.ok;
	});

	it('should start timer when component mount', () => {
		const Fake = () => (<div />);
		const TimedComponent = Timer(Fake);
		const wrapper = mount(<TimedComponent />);

		expect(wrapper.instance()).to.have.property('timer').that.is.ok;
	});

	it('should clear timer when component umount', () => {
		const Fake = () => (<div />);
		const TimedComponent = Timer(Fake);
		const wrapper = mount(<TimedComponent />);

		wrapper.unmount();
		expect(clearInterval.mock.calls.length).to.equal(1);
	});

	it('should supply count of ticks to wrapping component', () => {
		const Fake = () => (<div />);
		const TimedComponent = Timer(Fake);
		const wrapper = mount(<TimedComponent />);

		expect(wrapper.find(Fake)).to.have.prop('ticks', 0);

		jest.runTimersToTime(TICK + TICK * 0.5);
		expect(wrapper.find(Fake)).to.have.prop('ticks', 1);

		jest.runTimersToTime(TICK * 0.3);
		expect(wrapper.find(Fake)).to.have.prop('ticks', 1);

		jest.runTimersToTime(TICK * 2);
		expect(wrapper.find(Fake)).to.have.prop('ticks', 3);
	});
});