const { expect, assert } = require('chai')
const { booking } = require('../../lib')

describe('Library', () => {
  describe('Booking', () => {
    describe('#available()', () => {
      const arrivals = [2, 4, 1, 5, 12, 20, 15, 3, 9, 13]
      const departures = [7, 8, 3, 10, 13, 25, 30, 6, 11, 14]
      const available = 4
      const notAvailable = 3

      it('Return error when arrivals is not an array', () => {
        const invalidArrivals = 'This is a string'
        try {
          booking.available(invalidArrivals)
        } catch (error) {
          assert.strictEqual(error.message, 'arrivals is not an array')
        }
      })

      it('Return error when departures is not an array', () => {
        const invalidDepartures = { description: 'object' }
        try {
          booking.available(arrivals, invalidDepartures)
        } catch (error) {
          assert.strictEqual(error.message, 'departures is not an array')
        }
      })

      it('Return error when arrivals & departures are not same length', () => {
        const diffLengthDeparts = [1]
        try {
          booking.available(arrivals, diffLengthDeparts)
        } catch (error) {
          assert.strictEqual(error.message, 'arrivals & departures are not same length')
        }
      })

      it('Return error when arrivals contains invalid date', () => {
        const invalidArrivals = [1, 2, 3, '12', -1, 6, 7, 1, 2, 3]
        try {
          booking.available(invalidArrivals, departures, available)
        } catch (error) {
          assert.strictEqual(error.message, 'arrivals contains invalid date')
        }
      })

      it('Return error when departures contains invalid date', () => {
        const invalidDepartures = [1, 2, 3, '12', -1, 6, 7, 1, 2, 3]
        try {
          booking.available(arrivals, invalidDepartures, available)
        } catch (error) {
          assert.strictEqual(error.message, 'departures contains invalid date')
        }
      })

      it('Return error when availableRoom is not a positive integer', () => {
        const invalidAvailable = 'Not a number'
        try {
          booking.available(arrivals, departures, invalidAvailable)
        } catch (error) {
          assert.strictEqual(error.message, 'availableRoom is not a positive integer')
        }
      })

      it('Return true when more room than booking length', () => {
        const result = booking.available(arrivals, departures, arrivals.length)
        expect(result).to.eql(true)
      })

      it('Return true when having enough room available', () => {
        const result = booking.available(arrivals, departures, available)
        expect(result).to.eql(true)
      })

      it('Return true when having enough room available from example', () => {
        const examArrivals = [1, 3, 5]
        const examDepartures = [2, 6, 10]
        const result = booking.available(examArrivals, examDepartures, 2)
        expect(result).to.eql(true)
      })

      it('Return false when not enough room available from example', () => {
        const examArrivals = [1, 3, 5]
        const examDepartures = [2, 6, 10]
        const result = booking.available(examArrivals, examDepartures, 1)
        expect(result).to.eql(false)
      })

      it('Return false when not enough room available', () => {
        const result = booking.available(arrivals, departures, notAvailable)
        expect(result).to.eql(false)
      })
    })
  })
})
