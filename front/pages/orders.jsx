import React from 'react'
import { Table } from '../components/Orders/Table';

const orders = () => {
  return (
    <div className="min-h mt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10">Orders</h1>
        <Table />

      </div>
    </div>
  )
}

export default orders;