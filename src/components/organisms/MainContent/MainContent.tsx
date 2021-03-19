import React from 'react'
import MainContentStyled from './MainContentStyled'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Sidebar from '../Sidebar/Sidebar'
import Tickets from '../Tickets/Tickets'
import Wrapper from '../../atoms/Wrapper/Wrapper'

interface IProps {}

const MainContent = (props: IProps) => {
  return (
    <MainContentStyled>
      <Wrapper>
        <Row gutter={true}>
          <Column size={4}>
            <Sidebar></Sidebar>
          </Column>
          <Column size={8}>
            <Tickets></Tickets>
          </Column>
        </Row>
      </Wrapper>
    </MainContentStyled>
  )
}

export default MainContent