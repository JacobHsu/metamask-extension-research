import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'
import SelectedAccount from '../selected-account.component'

describe('SelectedAccount Component', () => {
  it('should render checksummed address', () => {
    const wrapper = render((
      <SelectedAccount
        selectedAddress="0x1b82543566f41a7db9a9a75fc933c340ffb55c9d"
        selectedIdentity={{ name: 'testName' }}
      />
    ), { context: { t: () => {}}})
    // Checksummed version of address is displayed
    assert.equal(wrapper.find('.selected-account__address').text(), '0x1B82...5C9D')
    assert.equal(wrapper.find('.selected-account__name').text(), 'testName')
  })
})