import { Tabs } from 'antd'
import React from 'react'
import Products from '../Components/Products/Products'

function BidsAndProducts() {
  return (
    <div className=' m-7'>
        <Tabs defaultActiveKey='1'>
            <Tabs.TabPane tab="Products" key="1">
                <Products/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Bids" key="2">
                <h1>Bids</h1>
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default BidsAndProducts