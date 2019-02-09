import { formatCountdown } from '../countdownTimer';

describe('formatCountdown util', () => {
  it('should showDays if there are more than 2 days', () => {
    expect(formatCountdown(3).show.days).toEqual(true);
  });
  it('should showHours if its more thant 2 days or more than 1 hour', () => {
    expect(formatCountdown(3).show.hours).toEqual(true);
    expect(formatCountdown(3, 2).show.hours).toEqual(true);
  });

  it('should showMinutes only if there are less than 3 days', () => {
    expect(formatCountdown(1).show.minutes).toEqual(true);
  });
  it('should only show seconds if there are 0 days and less than 2 hours', () => {
    expect(formatCountdown(0, 1).show.seconds).toEqual(true);
    expect(formatCountdown(0, 4).show.seconds).toEqual(false);
  });

  it('should dispay just hours if showDays is true', () => {
    expect(formatCountdown(4, 1).display.hours).toEqual(1);
    expect(formatCountdown(2, 1).display.hours).toEqual(49);
  });

  it('should return the correct minutes if showHours is true', () => {
    expect(formatCountdown(3, 1, 24).display.minutes).toEqual(24);
    expect(formatCountdown(0, 1, 43).display.minutes).toEqual(103);
  });
});
