import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import CustomChild from './CustomChild'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>
            <CustomChild />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
