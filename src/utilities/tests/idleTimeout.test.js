import { activateTimer, resetTimer } from '../idleTimeout';

describe('idleTimeout', () => {
  jest.useFakeTimers();
  const logoutAction = jest.fn();

  global.document = {};

  it('activate timer attaches resetTimer to document events', () => {
    expect(setInterval.mock.calls.length).toEqual(0);
    activateTimer(logoutAction);

    expect(document.onload).toEqual(resetTimer);
    expect(document.onmousemove).toEqual(resetTimer);
    expect(document.onmousedown).toEqual(resetTimer); // touchscreen presses
    expect(document.ontouchstart).toEqual(resetTimer);
    expect(document.onclick).toEqual(resetTimer);
    expect(document.onscroll).toEqual(resetTimer);
    expect(document.onkeypress).toEqual(resetTimer);
  });

  it('its should increment every second ', () => {
    expect(setInterval.mock.calls.length).toEqual(1);
    jest.runTimersToTime(1000);
    jest.runTimersToTime(2000);
  });

  it('should call reset', () => {
    jest.runTimersToTime(300000);
    expect(clearInterval.mock.calls.length).toEqual(1);
    expect(logoutAction.mock.calls.length).toEqual(1);
  });
});
