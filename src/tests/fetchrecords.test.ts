import fetchrecords from './solution/fetchrecords';
describe('This is a test', () => {
    it('should pass', () => {
      expect fetchrecords('XOE089797/10/74'). expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      })
    });
  });
  