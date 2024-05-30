import React from 'react';
import { Card, Row } from "antd";
import './styles.css';
import Button from '../Button/index'

const Cards = ({income, expense, totalBalance, showExpenseModal, showIncomeModal, transactions}) => {
  return (
    <div className='cards-div'>
        <Row className='my-row'>
            <Card className='my-card' title='Current Balance'>
                <p className='amount'>₹ {totalBalance}</p>
                <Button text={'Reset Balance'} blue={true} />
            </Card>
            <Card className='my-card' title='Total Income'>
                <p className='amount'>₹ {income}</p>
                <Button text={'Add Income'} blue={true} onClick={showIncomeModal}/>
            </Card>
            <Card className='my-card' title='Total Expense'>
                <p className='amount'>₹ {expense}</p>
                <Button text={'Add Expense'} blue={true}  onClick={showExpenseModal}/>
            </Card>
        </Row>
    </div>
  )
}

export default Cards